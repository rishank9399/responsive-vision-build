import { Globe, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const locations = [
    "Pune",
    "Mumbai", 
    "Delhi",
    "Guwahati"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              Contact
            </h2>
            
            {/* Contact Images */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-green-400/20 to-blue-400/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Phone className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm font-medium text-foreground">Partnership</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-primary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Mail className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm font-medium text-foreground">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Details */}
          <div>
            <div className="text-right mb-8">
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="text-2xl font-bold text-primary">RESONANCE</span>
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-right">
              LET'S BUILD BHARAT WITH<br />
              FUTURE READY WORKFORCE
            </h3>

            <div className="space-y-6">
              {/* Website */}
              <Card className="border-primary/20 hover:border-primary/40 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Website :</p>
                      <p className="text-lg font-semibold text-foreground">www.theresonance.co.in</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-primary/20 hover:border-primary/40 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email :</p>
                      <p className="text-lg font-semibold text-foreground">viveksinare@theresonance.co.in</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="border-primary/20 hover:border-primary/40 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone :</p>
                      <p className="text-lg font-semibold text-foreground">+91 87668 25520</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Locations */}
            <div className="mt-12 text-center">
              <div className="flex items-center justify-center space-x-2 text-3xl font-bold text-primary">
                {locations.map((location, index) => (
                  <span key={location}>
                    {location}
                    {index < locations.length - 1 && <span className="mx-2">|</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;