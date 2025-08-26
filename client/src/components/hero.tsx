import { Rocket, Info, ChevronDown } from "lucide-react";
import { LogoQuantum } from "./logo-quantum";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Network Animation Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          {/* Network Connections */}
          <line x1="10%" y1="20%" x2="40%" y2="60%" className="network-line" style={{ animationDelay: "0s" }} />
          <line x1="60%" y1="30%" x2="90%" y2="70%" className="network-line" style={{ animationDelay: "1s" }} />
          <line x1="20%" y1="80%" x2="80%" y2="20%" className="network-line" style={{ animationDelay: "2s" }} />
          <line x1="50%" y1="10%" x2="30%" y2="90%" className="network-line" style={{ animationDelay: "3s" }} />
          <line x1="70%" y1="50%" x2="10%" y2="40%" className="network-line" style={{ animationDelay: "4s" }} />
          <line x1="85%" y1="15%" x2="25%" y2="65%" className="network-line" style={{ animationDelay: "1.5s" }} />
        </svg>
        
        {/* Network Nodes */}
        <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-red-500 rounded-full network-node" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-[60%] left-[40%] w-2 h-2 bg-white rounded-full network-node" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-[30%] left-[60%] w-4 h-4 bg-red-500 rounded-full network-node" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-[70%] left-[90%] w-2 h-2 bg-white rounded-full network-node" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute top-[80%] left-[20%] w-3 h-3 bg-red-500 rounded-full network-node" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-[20%] left-[80%] w-2 h-2 bg-white rounded-full network-node" style={{ animationDelay: "2.5s" }}></div>
        <div className="absolute top-[10%] left-[50%] w-3 h-3 bg-red-500 rounded-full network-node" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-[90%] left-[30%] w-2 h-2 bg-white rounded-full network-node" style={{ animationDelay: "3.5s" }}></div>
        <div className="absolute top-[50%] left-[70%] w-4 h-4 bg-red-500 rounded-full network-node" style={{ animationDelay: "4s" }}></div>
        <div className="absolute top-[40%] left-[10%] w-2 h-2 bg-white rounded-full network-node" style={{ animationDelay: "4.5s" }}></div>
        
        {/* Data Flow Particles */}
        <div className="absolute top-[25%] left-[15%] w-1 h-1 bg-red-400 rounded-full data-particle" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-[65%] left-[45%] w-1 h-1 bg-white rounded-full data-particle" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-[35%] left-[65%] w-1 h-1 bg-red-400 rounded-full data-particle" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-[75%] left-[25%] w-1 h-1 bg-white rounded-full data-particle" style={{ animationDelay: "4s" }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Quantum9x Logo and Branding */}
        <div className="mb-8 animate-glow">
          <LogoQuantum />
        </div>
        
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
            Revolutionize your learning experience with cutting-edge educational technology. 
            Unlock your potential with quantum-speed learning methodologies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection("courses")}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 animate-glow inline-flex items-center"
              data-testid="button-start-learning"
            >
              <Rocket className="mr-3 h-5 w-5" />
              Start Learning
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 floating-card inline-flex items-center"
              data-testid="button-learn-more"
            >
              <Info className="mr-3 h-5 w-5" />
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-quantum-red" />
      </div>
    </section>
  );
}
