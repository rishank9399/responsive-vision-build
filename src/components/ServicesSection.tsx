import { UserCheck, Settings, GraduationCap, Lightbulb, TrendingUp, Building } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: UserCheck,
      title: "Skilled workforce Sourcing & Onboarding",
      description: "Comprehensive talent acquisition and onboarding solutions for organizations",
      color: "bg-blue-500"
    },
    {
      icon: Settings,
      title: "Customize Skill Development Program",
      description: "Tailored training programs designed to meet specific industry requirements",
      color: "bg-green-500"
    },
    {
      icon: GraduationCap,
      title: "Campus Entrepreneurship Program",
      description: "Foster entrepreneurial mindset and innovation in educational institutions",
      color: "bg-purple-500"
    },
    {
      icon: Lightbulb,
      title: "Startup Mentoring & Fundraising",
      description: "Expert guidance and support for startup development and funding",
      color: "bg-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Incubation Support & Handholding",
      description: "End-to-end incubation services for emerging businesses and entrepreneurs",
      color: "bg-red-500"
    },
    {
      icon: Building,
      title: "CSR Project Implementation",
      description: "Strategic corporate social responsibility project management and execution",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Key Services
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Comprehensive solutions for skill development, entrepreneurship, and organizational growth
          </p>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2 bg-white overflow-hidden"
              >
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                      <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent className="text-center px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Tailored Solutions for Your Needs
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              We understand that every organization has unique requirements. Our team works closely 
              with you to develop customized solutions that align with your goals and objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Get Custom Solution
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;