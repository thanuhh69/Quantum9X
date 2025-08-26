import { useState, useEffect } from "react";
import { ChevronUp, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleFounderInstagram = () => {
    window.open("https://www.instagram.com/simply_bittu?igsh=MWd1Mzg1emdvanFuZQ==", "_blank");
  };

  const handleCoFounderInstagram = () => {
    window.open("https://www.instagram.com/phani_0303_?igsh=MXNhc3VtYThubmpveA==", "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918019234832", "_blank");
  };

  return (
    <>
      <footer className="bg-quantum-dark/50 py-12 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            {/* Quantum9x Branding */}
            <div className="mb-6">
              <h3 className="text-2xl font-black mb-2">
                <span className="gradient-text">QUANTUM</span>
                <span className="text-white">9X</span>
              </h3>
              <p className="text-gray-400">Think Smart. Learn Fast. Go Quantum</p>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <button
                onClick={() => window.open("https://www.instagram.com/quantum9x?igsh=eG1udTJrNTMzMmc=", "_blank")}
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                data-testid="footer-quantum9x-instagram"
              >
                <Instagram className="text-white h-5 w-5" />
              </button>
              <button
                onClick={handleFounderInstagram}
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                data-testid="footer-founder-instagram"
              >
                <Instagram className="text-white h-5 w-5" />
              </button>
              <button
                onClick={handleCoFounderInstagram}
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                data-testid="footer-co-founder-instagram"
              >
                <Instagram className="text-white h-5 w-5" />
              </button>
              <button
                onClick={handleWhatsApp}
                className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                data-testid="footer-whatsapp"
              >
                <MessageCircle className="text-white h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Quantum9x. All rights reserved. | Revolutionizing Education Through Technology
            </p>
          </div>
        </div>
      </footer>
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-110 z-50"
          data-testid="button-back-to-top"
        >
          <ChevronUp className="text-white h-6 w-6" />
        </button>
      )}
    </>
  );
}
