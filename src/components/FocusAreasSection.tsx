import { GraduationCap, Users, Building, Rocket, TrendingUp, FileText, Target } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const FocusAreasSection = () => {
  const focusAreas = [
    {
      icon: GraduationCap,
      title: "Employability & Skills Training",
      description: "Comprehensive skill development programs to enhance workforce capabilities"
    },
    {
      icon: Users,
      title: "Apprenticeship & Staffing",
      description: "Strategic placement and apprenticeship programs for career development"
    },
    {
      icon: Building,
      title: "Industry Academia Government Collaboration",
      description: "Bridging gaps between educational institutions, industry, and government"
    },
    {
      icon: Rocket,
      title: "Entrepreneurship Development",
      description: "Fostering innovation and startup ecosystem development"
    },
    {
      icon: TrendingUp,
      title: "Startup Incubation",
      description: "Supporting early-stage startups with mentorship and resources"
    },
    {
      icon: FileText,
      title: "Policy Implementation",
      description: "Implementing government policies for skill development and employment"
    }
  ];

  return (
    <section id="focus" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Target className="h-8 w-8 text-accent mr-3" />
            <span className="text-accent font-semibold text-lg">Our Focus Area's</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Strategic Focus Areas
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2 bg-white"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-accent transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {area.title}
                  </h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have advanced their careers through our comprehensive programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Explore Programs
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;