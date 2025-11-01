# English Unpacked Email Templates

Professional HTML email templates matching the English Unpacked brand identity.

## Brand Colors
- Primary Navy: `#1e3a5f`
- Royal Blue: `#2563eb`
- Light Background: `#f1f5f9`
- Accent Orange: `#f97316`
- White: `#ffffff`
- Text Dark: `#1e293b`
- Text Muted: `#64748b`

## Available Templates

### 1. Welcome Email (`welcome-email.html`)
For new students joining English Unpacked.

**Variables:**
- `{{student_name}}` - Student's first name
- `{{teacher_name}}` - Your name (Joanna)

### 2. Lesson Reminder (`lesson-reminder.html`)
Sent before scheduled lessons.

**Variables:**
- `{{student_name}}` - Student's first name
- `{{lesson_date}}` - Date of lesson
- `{{lesson_time}}` - Time of lesson
- `{{lesson_topic}}` - Topic/focus area
- `{{meeting_link}}` - Zoom/meeting URL
- `{{preparation_notes}}` - Optional preparation tips

### 3. Monthly Invoice (`monthly-invoice.html`)
Monthly billing statement with payment options.

**Variables:**
- `{{student_name}}` - Student's first name
- `{{invoice_number}}` - Unique invoice ID
- `{{invoice_date}}` - Issue date
- `{{billing_month}}` - Month and year
- `{{lessons_table}}` - HTML table of lessons
- `{{total_amount}}` - Total amount due
- `{{payment_deadline}}` - Due date
- `{{mbank_account}}` - mBank account details
- `{{mbank_reference}}` - Payment reference
- `{{revolut_tag}}` - Revolut identifier
- `{{paypal_link}}` - PayPal payment link

### 4. Practice Activity (`practice-activity.html`)
Weekly practice exercises and activities.

**Variables:**
- `{{student_name}}` - Student's first name
- `{{week_theme}}` - Theme for the week
- `{{activities_html}}` - HTML blocks for activities
- `{{members_link}}` - Link to members area

### 5. Progress Update (`progress-update.html`)
Student progress reports and achievements.

**Variables:**
- `{{student_name}}` - Student's first name
- `{{achievements_html}}` - Achievement badges HTML
- `{{skills_covered}}` - List of covered topics
- `{{next_goals}}` - Upcoming learning objectives
- `{{teacher_note}}` - Personal message from teacher

### 6. Newsletter (`newsletter.html`)
Monthly newsletter with tips and updates.

**Variables:**
- `{{month_year}}` - Current month and year
- `{{hero_image}}` - Featured image URL
- `{{main_content}}` - Newsletter content blocks
- `{{tip_of_month}}` - English learning tip
- `{{featured_resource}}` - Resource recommendation

## Usage with Edge Function

Send emails using the Supabase Edge Function:

```typescript
const { data, error } = await supabase.functions.invoke('send-email', {
  body: {
    to: 'student@example.com',
    template: 'monthly-invoice',
    variables: {
      student_name: 'John',
      invoice_number: 'INV-2025-001',
      total_amount: '£180.00',
      // ... other variables
    }
  }
})
```

## Payment Methods

### mBank
- Bank transfer details
- Account number and sort code
- Reference format: `INV-[number]`

### Revolut
- Revolut tag or link
- Instant transfer support

### PayPal
- PayPal.me link or email
- One-click payment

## Testing

Test emails across clients:
- Gmail (web, mobile)
- Outlook (2016, 2019, 365)
- Apple Mail
- Yahoo Mail

## Image Assets

Store images in Supabase Storage or use absolute URLs:
- Logo: English Unpacked text in Pacifico font
- Profile photo: Joanna's headshot
- Payment icons: mBank, Revolut, PayPal logos

## Email Sending

Emails are sent via Resend.com through the `send-email` Edge Function.

Domain verification required at: https://resend.com/domains
