import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-serif font-bold">
                M<span className="text-primary">e</span>ndiv
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Your Next Chapter in optimal health and longevity. Science-backed
              wellness programs for the modern professional.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a
                href="/programmes"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                Programmes
              </a>
              <a
                href="/studio"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                Mind Refreshment Studio
              </a>
              <a
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                About
              </a>
              <a
                href="#events"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                Events
              </a>
              <a
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                LifeMap360™
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                BioAlign™ System
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                NeuroSleep™
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                Digital Twin
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                Corporate Wellness
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">hello@mendiv.com</span>
              </div>
              <div className="text-muted-foreground">
                Transform your biology,
                <br />
                design your future.
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 bg-muted/50 border border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2025 Mendiv. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
