import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-pacifico">English Unpacked</h3>
            <p className="text-white/80 leading-relaxed">
              Personalized English lessons designed to help you communicate with confidence. 
              Based in Czech Republic, serving students worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2">
              <a href="#business" className="block text-white/80 hover:text-white transition-colors duration-200">
                Business English
              </a>
              <a href="#conversation" className="block text-white/80 hover:text-white transition-colors duration-200">
                Conversational English
              </a>
              <a href="#exam-prep" className="block text-white/80 hover:text-white transition-colors duration-200">
                Exam Preparation
              </a>
              <a href="#about" className="block text-white/80 hover:text-white transition-colors duration-200">
                About Joanna
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get Started</h4>
            <div className="space-y-3">
              <a 
                href="https://calendly.com/english-unpacked/consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-white transition-colors duration-200"
              >
                📅 Book Free Consultation
              </a>
              <a 
                href="mailto:info@englishunpacked.com"
                className="block text-white/80 hover:text-white transition-colors duration-200"
              >
                ✉️ Send an Email
              </a>
              <p className="text-white/60 text-sm">
                Monday - Friday: 9:00 AM - 6:00 PM CET
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 flex items-center justify-center gap-2">
            © {currentYear} English Unpacked. Made with <Heart className="w-4 h-4 text-red-400" /> for English learners worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;