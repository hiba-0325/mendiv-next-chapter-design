import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-serif font-bold">
              M<span className="text-primary">e</span>ndiv
            </div>
            <div className="text-sm text-muted-foreground">Your Next Chapter</div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/programmes" 
              className={`transition-colors ${location.pathname === '/programmes' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Programmes
            </Link>
            <Link 
              to="/studio" 
              className={`transition-colors ${location.pathname === '/studio' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Mind Refreshment Studio
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${location.pathname === '/about' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              About
            </Link>
            <Link 
              to="/events" 
              className={`transition-colors ${location.pathname === '/events' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Events
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${location.pathname === '/contact' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/client-portal">
              <Button variant="ghost" size="sm">
                Client Portal
              </Button>
            </Link>
            <Button size="sm" className="animate-glow">
              Start Journey
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;