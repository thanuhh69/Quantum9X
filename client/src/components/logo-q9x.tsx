import q9xLogoImage from "@assets/q9x logo _1756192156163.png";

export function LogoQ9X() {
  return (
    <div className="w-12 h-12 rounded-lg p-1 shadow-lg animate-pulse-slow">
      <img 
        src={q9xLogoImage} 
        alt="Q9X Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
