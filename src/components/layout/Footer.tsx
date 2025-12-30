import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin } from "lucide-react";
import nexleorLogo from "@/assets/nexleor-logo-transparent.png";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Why NexLeor", href: "/why-nexleor" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Product & Systems Engineering", href: "/services#product-systems" },
    { name: "Embedded & Software", href: "/services#embedded-software" },
    { name: "Program Consulting", href: "/services#program-consulting" },
    { name: "Technology & Product Transition", href: "/services#industrialization" },
  ],
  industries: [
    { name: "Aerospace & Defense", href: "/industries#aerospace" },
    { name: "Embedded & High-Tech", href: "/industries#embedded" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-6">
              <img src={nexleorLogo} alt="NexLeor" className="h-16 w-auto brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Practitioner-led engineering consulting for complex, regulated, 
              mission-critical systems.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hello@nexleor.com"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries & Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">
              Industries
            </h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-start gap-2 text-primary-foreground/60 text-sm">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>India | Global Delivery</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} NexLeor. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
