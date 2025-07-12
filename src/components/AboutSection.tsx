import { CheckCircle, Lightbulb, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    "Govt-aligned programs (NATS, NAPS, WISTA, AEDP)",
    "Strong Academia - Industry - Government linkages",
    "Onboarded 25,000 Candidates in 100+ Establishments",
    "Industries and organizations"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-accent font-semibold text-lg mb-2 block">Welcome to</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Company
              </h2>
              <div className="w-24 h-1 bg-gradient-accent rounded-full"></div>
            </div>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A dynamic social enterprise advancing entrepreneurship and employability 
              through skill development, strategic partnerships and innovation.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Edge:</h3>
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">25,000+</div>
                <div className="text-muted-foreground">Candidates Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-muted-foreground">Partner Organizations</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <Users className="h-24 w-24 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Empowering Communities
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Building a skilled workforce through comprehensive training programs 
                  and strategic partnerships across India.
                </p>
              </div>
            </div>
            
            {/* Floating cards */}
            <Card className="absolute -top-4 -right-4 w-32 h-32 shadow-lg border-0 bg-white">
              <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                <Lightbulb className="h-8 w-8 text-accent mb-2" />
                <span className="text-sm font-semibold text-center">Innovation</span>
              </CardContent>
            </Card>
            
            <Card className="absolute -bottom-4 -left-4 w-32 h-32 shadow-lg border-0 bg-white">
              <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                <Target className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-semibold text-center">Impact</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;