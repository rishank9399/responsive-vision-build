import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Services", href: "#services" },
    { label: "Partners", href: "#partners" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#careers" }
  ];

  const programs = [
    { label: "NATS", href: "#nats" },
    { label: "NAPS", href: "#naps" },
    { label: "AEDP", href: "#aedp" },
    { label: "WISTA", href: "#wista" }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <div>
                  <span className="text-2xl font-bold">RESONANCE</span>
                  <p className="text-sm text-white/80">Entrepreneurship & Employability Solutions</p>
                </div>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Empowering India's skilled workforce and entrepreneurs through comprehensive 
                training programs and strategic partnerships.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-xl font-bold mb-6">Our Programs</h3>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <a 
                      href={program.href}
                      className="text-white/80 hover:text-accent transition-colors duration-200"
                    >
                      {program.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Contact Info</h4>
                <div className="space-y-2 text-white/80">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+91 12345 67890</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>info@theresonance.co.in</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
              <p className="text-white/80 mb-6">
                Subscribe to our newsletter for the latest updates on programs and opportunities.
              </p>
              <div className="space-y-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder-white/60"
                />
                <Button className="w-full bg-accent hover:bg-accent/90">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-white/60 mt-4">
                We respect your privacy and won't spam you.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              © 2024 Resonance Entrepreneurship & Employability Solutions Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-white/60 text-sm">
              Visit us at: <a href="https://www.theresonance.co.in" className="text-accent hover:underline">www.theresonance.co.in</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;