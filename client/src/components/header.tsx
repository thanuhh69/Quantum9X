import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LogoQ9X } from "./logo-q9x";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass-dark" : "glass-dark"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Q9X Logo in Corner */}
          <div className="flex items-center">
            <LogoQ9X />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-quantum-red transition-colors duration-300 font-medium"
              data-testid="nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-quantum-red transition-colors duration-300 font-medium"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="hover:text-quantum-red transition-colors duration-300 font-medium"
              data-testid="nav-courses"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="hover:text-quantum-red transition-colors duration-300 font-medium"
              data-testid="nav-team"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-quantum-red transition-colors duration-300 font-medium"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-quantum-red transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass-effect rounded-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left hover:text-quantum-red transition-colors duration-300 font-medium"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-quantum-red transition-colors duration-300 font-medium"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-left hover:text-quantum-red transition-colors duration-300 font-medium"
                data-testid="mobile-nav-courses"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-left hover:text-quantum-red transition-colors duration-300 font-medium"
                data-testid="mobile-nav-team"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-quantum-red transition-colors duration-300 font-medium"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
