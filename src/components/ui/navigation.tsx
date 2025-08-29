import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/programmes", label: "Programmes" },
    { href: "/mind-refreshment-studio", label: "Mind Refreshment Studio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    // { href: "/portal", label: "Client Portal" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-7xl">
      <div
        className={`flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 rounded-2xl transition-all duration-500 border ${
          isScrolled
            ? "backdrop-blur-lg bg-white/300 border-white/30"
            : "backdrop-blur-lg bg-white/300 border-white/30"
        }`}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mendiv-O9U4M90cTh9IOt9HRUf70JHpEB1Xfk.png"
              alt="Mendiv"
              width={120}
              height={40}
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-lato transition-colors duration-300 ${
                isScrolled
                  ? "text-white hover:text-green-500"
                  : "text-white hover:text-green-400"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`p-2 transition-colors duration-300 ${
              isScrolled
                ? "text-black hover:text-green-500"
                : "text-white hover:text-green-400"
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2">
          <div
            className={`px-2 pt-2 pb-3 space-y-1 rounded-2xl shadow-md backdrop-blur-lg border transition-colors ${
              isScrolled
                ? "bg-white/90 border-gray-200/40"
                : "bg-black/50 border-white/20"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block font-lato px-3 py-2 transition-colors ${
                  isScrolled
                    ? "text-black hover:text-green-500"
                    : "text-white hover:text-green-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
