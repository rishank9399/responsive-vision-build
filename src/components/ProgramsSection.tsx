import { BookOpen, Users, Award, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ProgramsSection = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "National Apprenticeship Training Scheme",
      acronym: "(NATS)",
      description: "Comprehensive apprenticeship training for skill development and industry readiness",
      features: ["Industry-aligned curriculum", "Hands-on training", "Government certification"]
    },
    {
      icon: Award,
      title: "National Apprenticeship Promotion Scheme",
      acronym: "(NAPS)",
      description: "Promoting apprenticeship culture across various sectors and organizations",
      features: ["Multi-sector coverage", "Career advancement", "Professional networking"]
    },
    {
      icon: Users,
      title: "Apprenticeship Embedded Degree Program",
      acronym: "(AEDP)",
      description: "Integrated degree programs combining academic learning with practical experience",
      features: ["Academic excellence", "Work experience", "Industry mentorship"]
    },
    {
      icon: Briefcase,
      title: "Work Integrated Skills Training & Apprenticeships",
      acronym: "(WISTA)",
      description: "Skills training programs integrated with workplace learning for immediate application",
      features: ["Practical skills", "Workplace integration", "Immediate employment"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Core Programs
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Government-aligned programs designed to bridge the skill gap and create a competent workforce
          </p>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-1 bg-white overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                        {program.title}
                      </h3>
                      <span className="text-2xl font-bold text-accent">{program.acronym}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Join Our Training Programs
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Take the next step in your career with our government-certified training programs
            </p>
            <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;