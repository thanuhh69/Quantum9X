import { Instagram } from "lucide-react";
import founderImage from "@assets/founder_1756192755118.jpg";
import coFounderImage from "@assets/co founder _1756192765028.jpg";

export function Team() {
  const handleFounderInstagram = () => {
    window.open("https://www.instagram.com/simply_bittu?igsh=MWd1Mzg1emdvanFuZQ==", "_blank");
  };

  const handleCoFounderInstagram = () => {
    window.open("https://www.instagram.com/phani_0303_?igsh=MXNhc3VtYThubmpveA==", "_blank");
  };

  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Quantum</span> Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-quantum-red to-quantum-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The visionary minds behind Quantum9x, dedicated to revolutionizing education.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Founder Card */}
          <div className="glass-effect p-8 rounded-2xl text-center floating-card" data-testid="card-founder">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-gradient-to-r from-quantum-red to-quantum-orange animate-pulse-slow">
              <img 
                src={founderImage} 
                alt="Thanushmohan Chalamala - Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Thanushmohan Chalamala</h3>
            <p className="text-quantum-red font-semibold mb-2">Founder & Visionary Leader</p>
            <p className="text-gray-300 mb-4 text-sm">
              AI & ML, 2nd Year B.Tech<br />
              Sir CR Reddy College of Engineering
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Driving innovation in educational technology with a passion for quantum-speed learning and AI expertise.
            </p>
            <button
              onClick={handleFounderInstagram}
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              data-testid="link-founder-instagram"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </button>
          </div>
          
          {/* Co-Founder Card */}
          <div className="glass-effect p-8 rounded-2xl text-center floating-card" style={{ animationDelay: "0.2s" }} data-testid="card-co-founder">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-gradient-to-r from-quantum-red to-quantum-orange animate-pulse-slow">
              <img 
                src={coFounderImage} 
                alt="Phani Pilaka - Co-Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Phani Pilaka</h3>
            <p className="text-quantum-red font-semibold mb-2">Co-Founder & Innovation Expert</p>
            <p className="text-gray-300 mb-4 text-sm">
              CSE, 2nd Year B.Tech<br />
              Lakkireddy Balareddy College of Engineering
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Architecting the future of learning with cutting-edge technological solutions and software expertise.
            </p>
            <button
              onClick={handleCoFounderInstagram}
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              data-testid="link-co-founder-instagram"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
