import { MessageCircle, Instagram, Mail } from "lucide-react";

export function Contact() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/918019234832", "_blank");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-quantum-red to-quantum-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to start your quantum learning journey? Let's connect and explore the possibilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp Contact */}
          <div className="glass-effect p-6 rounded-2xl text-center floating-card" data-testid="contact-whatsapp">
            <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-slow">
              <MessageCircle className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-400 mb-4">Direct messaging for instant support</p>
            <button
              onClick={handleWhatsApp}
              className="text-green-500 font-semibold hover:text-green-400 transition-colors"
              data-testid="button-whatsapp-contact"
            >
              +91 8019234832
            </button>
          </div>
          
          {/* Instagram */}
          <div className="glass-effect p-6 rounded-2xl text-center floating-card" data-testid="contact-instagram">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-slow">
              <Instagram className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Instagram</h3>
            <p className="text-gray-400 mb-4">Follow our journey and updates</p>
            <button
              onClick={() => window.open("https://www.instagram.com/quantum9x?igsh=eG1udTJrNTMzMmc=", "_blank")}
              className="text-red-500 font-semibold hover:text-white transition-colors"
            >
              @quantum9x
            </button>
          </div>
          
          {/* Email */}
          <div className="glass-effect p-6 rounded-2xl text-center floating-card" data-testid="contact-email">
            <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-slow">
              <Mail className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-400 mb-4">Professional inquiries</p>
            <a 
              href="mailto:thanushmohan69@gmail.com"
              className="text-red-500 font-semibold hover:text-white transition-colors"
            >
              thanushmohan69@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
