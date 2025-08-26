import { Brain, Zap, Atom } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Quantum9x</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-quantum-red to-quantum-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're not just another educational platform. We're the quantum leap your learning journey needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Feature Card 1 */}
          <div className="glass-effect p-8 rounded-2xl floating-card" data-testid="card-think-smart">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 mx-auto animate-pulse-slow">
              <Brain className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Think Smart</h3>
            <p className="text-gray-400 text-center leading-relaxed">
              Develop critical thinking skills with our innovative problem-solving methodologies.
            </p>
          </div>
          
          {/* Feature Card 2 */}
          <div className="glass-effect p-8 rounded-2xl floating-card" style={{ animationDelay: "0.2s" }} data-testid="card-learn-fast">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 mx-auto animate-pulse-slow">
              <Zap className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Learn Fast</h3>
            <p className="text-gray-400 text-center leading-relaxed">
              Accelerated learning techniques that help you master concepts in record time.
            </p>
          </div>
          
          {/* Feature Card 3 */}
          <div className="glass-effect p-8 rounded-2xl floating-card" style={{ animationDelay: "0.4s" }} data-testid="card-go-quantum">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 mx-auto animate-pulse-slow">
              <Atom className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Go Quantum</h3>
            <p className="text-gray-400 text-center leading-relaxed">
              Transcend traditional learning boundaries with quantum-inspired educational approaches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
