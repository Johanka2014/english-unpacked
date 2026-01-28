import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.75.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface EmailRequest {
  to: string;
  template: string;
  variables: Record<string, string>;
  subject?: string;
}

const templates: Record<string, string> = {
  welcome: "welcome-email.html",
  "lesson-reminder": "lesson-reminder.html",
  "monthly-invoice": "monthly-invoice.html",
  "practice-activity": "practice-activity.html",
  "progress-update": "progress-update.html",
  newsletter: "newsletter.html",
};

const defaultSubjects: Record<string, string> = {
  welcome: "Welcome to English Unpacked! 🎉",
  "lesson-reminder": "Lesson Reminder - English Unpacked",
  "monthly-invoice": "Your Monthly Invoice - English Unpacked",
  "practice-activity": "This Week's Practice Activities",
  "progress-update": "Your Progress Update",
  newsletter: "English Unpacked Newsletter",
};

function replaceVariables(html: string, variables: Record<string, string>): string {
  let result = html;
  
  for (const [key, value] of Object.entries(variables)) {
    const regex = new RegExp(`{{${key}}}`, "g");
    result = result.replace(regex, value);
  }
  
  return result;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify authentication
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: 'Missing or invalid authorization header' }),
        { status: 401, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY');

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase configuration');
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } }
    });

    // Verify the JWT token and get user claims
    const token = authHeader.replace('Bearer ', '');
    const { data: claimsData, error: claimsError } = await supabase.auth.getClaims(token);

    if (claimsError || !claimsData?.claims) {
      console.error('Auth error:', claimsError);
      return new Response(
        JSON.stringify({ error: 'Unauthorized - Invalid token' }),
        { status: 401, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    const userId = claimsData.claims.sub;

    // Check if user has admin role
    const { data: roleData, error: roleError } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .maybeSingle();

    if (roleError) {
      console.error('Role check error:', roleError);
      return new Response(
        JSON.stringify({ error: 'Error checking permissions' }),
        { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    if (!roleData) {
      console.log(`Access denied for user ${userId} - not an admin`);
      return new Response(
        JSON.stringify({ error: 'Admin access required' }),
        { status: 403, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // User is authenticated and is an admin - proceed with email
    const { to, template, variables, subject }: EmailRequest = await req.json();

    // Validate input
    if (!to || !template) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: to, template' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(to)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    console.log(`Admin ${userId} sending ${template} email to ${to}`);

    // Email templates
    const simpleTemplates: Record<string, string> = {
      welcome: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Merriweather:wght@300;400;600;700&display=swap" rel="stylesheet">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9;">
            <tr>
              <td align="center" style="padding: 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; max-width: 600px;">
                  <tr>
                    <td style="background-color: #1e3a5f; padding: 24px; text-align: center;">
                      <h1 style="margin: 0; font-family: 'Pacifico', cursive; font-size: 32px; color: #ffffff;">English Unpacked</h1>
                      <p style="margin: 8px 0 0; color: #f1f5f9; font-size: 14px;">Unlock Your English Potential</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px;">
                      <h2 style="color: #1e3a5f; font-family: 'Merriweather', Georgia, serif;">Welcome, {{student_name}}! 🎉</h2>
                      <p style="color: #1e293b; line-height: 1.6;">I'm thrilled to have you join English Unpacked! My name is Joanna, and I'm excited to be your guide on this English learning journey.</p>
                      <p style="color: #1e293b; line-height: 1.6;">Whether you're preparing for exams, improving business communication, or simply want to feel more confident speaking English, I'm here to help you achieve your goals.</p>
                      <div style="text-align: center; margin: 32px 0;">
                        <a href="https://calendly.com" style="display: inline-block; padding: 14px 32px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600;">Book Your First Lesson</a>
                      </div>
                      <p style="color: #1e293b;">Looking forward to our first lesson together!</p>
                      <p style="color: #1e293b;">Warm regards,<br><strong>Joanna</strong></p>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: #f1f5f9; padding: 32px; text-align: center; border-top: 2px solid #2563eb;">
                      <p style="margin: 0; color: #64748b; font-size: 12px;">© 2025 English Unpacked. All rights reserved.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      "lesson-reminder": `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Merriweather:wght@300;400;600;700&display=swap" rel="stylesheet">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9;">
            <tr>
              <td align="center" style="padding: 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; max-width: 600px;">
                  <tr>
                    <td style="background-color: #1e3a5f; padding: 24px; text-align: center;">
                      <h1 style="margin: 0; font-family: 'Pacifico', cursive; font-size: 32px; color: #ffffff;">English Unpacked</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px;">
                      <h2 style="color: #1e3a5f; font-family: 'Merriweather', Georgia, serif;">Lesson Reminder 📅</h2>
                      <p style="color: #1e293b; line-height: 1.6;">Hi {{student_name}},</p>
                      <p style="color: #1e293b; line-height: 1.6;">This is a friendly reminder about your upcoming English lesson.</p>
                      <div style="background: linear-gradient(135deg, #2563eb, #1e3a5f); padding: 32px; border-radius: 12px; color: white; margin: 24px 0;">
                        <h3 style="color: white; text-align: center; margin-bottom: 20px;">Lesson Details</h3>
                        <p><strong>📅 Date:</strong> {{lesson_date}}</p>
                        <p><strong>⏰ Time:</strong> {{lesson_time}}</p>
                        <p><strong>📖 Topic:</strong> {{lesson_topic}}</p>
                      </div>
                      <div style="text-align: center; margin: 32px 0;">
                        <a href="{{meeting_link}}" style="display: inline-block; padding: 14px 32px; background-color: #f97316; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600;">Join Lesson</a>
                      </div>
                      <p style="color: #1e293b;">See you soon!<br><strong>Joanna</strong></p>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: #f1f5f9; padding: 32px; text-align: center; border-top: 2px solid #2563eb;">
                      <p style="margin: 0; color: #64748b; font-size: 12px;">© 2025 English Unpacked. All rights reserved.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      "monthly-invoice": `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Merriweather:wght@300;400;600;700&display=swap" rel="stylesheet">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9;">
            <tr>
              <td align="center" style="padding: 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; max-width: 600px;">
                  <tr>
                    <td style="background-color: #1e3a5f; padding: 24px; text-align: center;">
                      <h1 style="margin: 0; font-family: 'Pacifico', cursive; font-size: 32px; color: #ffffff;">English Unpacked</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px;">
                      <h2 style="color: #1e3a5f; font-family: 'Merriweather', Georgia, serif;">Monthly Invoice</h2>
                      <p style="color: #64748b; font-size: 14px;">Invoice #{{invoice_number}} | {{invoice_date}}</p>
                      <p style="color: #1e293b; line-height: 1.6;">Hi {{student_name}},</p>
                      <p style="color: #1e293b; line-height: 1.6;">Thank you for another great month of learning together! Here's your invoice for <strong>{{billing_month}}</strong>.</p>
                      
                      <table width="100%" cellpadding="12" cellspacing="0" style="border: 1px solid #e2e8f0; border-radius: 8px; margin: 24px 0;">
                        <thead>
                          <tr style="background-color: #1e3a5f;">
                            <th style="text-align: left; color: white; padding: 12px;">Date</th>
                            <th style="text-align: left; color: white; padding: 12px;">Topic</th>
                            <th style="text-align: right; color: white; padding: 12px;">Duration</th>
                            <th style="text-align: right; color: white; padding: 12px;">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {{lessons_table}}
                        </tbody>
                        <tfoot>
                          <tr style="background-color: #f1f5f9;">
                            <td colspan="3" style="text-align: right; padding: 16px; font-weight: 600; color: #1e3a5f;">Total:</td>
                            <td style="text-align: right; padding: 16px; font-weight: 600; color: #1e3a5f;">{{total_amount}}</td>
                          </tr>
                        </tfoot>
                      </table>

                      <div style="background-color: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f97316; margin: 24px 0;">
                        <p style="margin: 0; color: #92400e;"><strong>Payment Due:</strong> {{payment_deadline}}</p>
                      </div>

                      <h3 style="color: #1e3a5f; text-align: center; margin: 32px 0 24px;">Choose Your Payment Method</h3>
                      
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td width="33%" style="padding: 12px; vertical-align: top;">
                            <div style="background-color: #f1f5f9; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; text-align: center;">
                              <div style="font-size: 32px; margin-bottom: 12px;">🏦</div>
                              <h4 style="color: #1e3a5f; margin: 0 0 12px;">mBank</h4>
                              <p style="font-size: 12px; color: #64748b; margin: 0;"><strong>Account:</strong><br>{{mbank_account}}</p>
                              <p style="font-size: 12px; color: #64748b; margin: 8px 0 0;"><strong>Ref:</strong> {{mbank_reference}}</p>
                            </div>
                          </td>
                          <td width="33%" style="padding: 12px; vertical-align: top;">
                            <div style="background-color: #f1f5f9; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; text-align: center;">
                              <div style="font-size: 32px; margin-bottom: 12px;">💳</div>
                              <h4 style="color: #1e3a5f; margin: 0 0 12px;">Revolut</h4>
                              <p style="font-size: 12px; color: #64748b; margin: 0;">Send to:<br><strong>{{revolut_tag}}</strong></p>
                            </div>
                          </td>
                          <td width="33%" style="padding: 12px; vertical-align: top;">
                            <div style="background-color: #f1f5f9; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px; text-align: center;">
                              <div style="font-size: 32px; margin-bottom: 12px;">💰</div>
                              <h4 style="color: #1e3a5f; margin: 0 0 12px;">PayPal</h4>
                              <a href="{{paypal_link}}" style="display: inline-block; padding: 10px 20px; background-color: #f97316; color: white; text-decoration: none; border-radius: 6px; font-size: 13px; margin-top: 8px;">Pay Now</a>
                            </div>
                          </td>
                        </tr>
                      </table>

                      <p style="color: #1e293b; margin-top: 32px;">Thank you for your continued trust in English Unpacked!</p>
                      <p style="color: #1e293b;">Best regards,<br><strong>Joanna</strong></p>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: #f1f5f9; padding: 32px; text-align: center; border-top: 2px solid #2563eb;">
                      <p style="margin: 0; color: #64748b; font-size: 12px;">© 2025 English Unpacked. All rights reserved.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    let htmlTemplate = simpleTemplates[template];
    
    if (!htmlTemplate) {
      return new Response(
        JSON.stringify({ error: `Template "${template}" not found` }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Replace variables in template
    htmlTemplate = replaceVariables(htmlTemplate, variables || {});

    const emailSubject = subject || defaultSubjects[template] || "Email from English Unpacked";

    const { data, error } = await resend.emails.send({
      from: "English Unpacked <onboarding@resend.dev>", // Update with your verified domain
      to: [to],
      subject: emailSubject,
      html: htmlTemplate,
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
    }

    console.log("Email sent successfully by admin", userId, ":", data);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
