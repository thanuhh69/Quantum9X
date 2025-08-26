export function LogoQuantum({ className = "" }: { className?: string }) {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
        <span className="gradient-text">QUANTUM</span>
        <span className="text-white">9X</span>
      </h1>
      <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
      <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
        THINK SMART. LEARN FAST. GO QUANTUM
      </p>
    </div>
  );
}
