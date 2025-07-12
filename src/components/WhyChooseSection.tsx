import { Award, Users, Target, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const WhyChooseSection = () => {
  const certifications = [
    "Ministry of Entrepreneurship & Skill Development",
    "Center for Innovation & AICTE, Ministry of Education, GOI",
    "Department of Science & Technology, GOI",
    "National Institute of Entrepreneurship & Small Business Development, MSME",
    "Entrepreneurship Development Institute of India, EDII",
    "International Finance Corporation, World Bank Group"
  ];

  const highlights = [
    {
      icon: Users,
      title: "Dynamic Team",
      description: "Young professionals connected with grassroot level across all sectors"
    },
    {
      icon: Target,
      title: "Proven Impact",
      description: "Created impact in socio economic upliftment through employable skills training"
    },
    {
      icon: Award,
      title: "Government Certified",
      description: "Trainers certified by multiple prestigious government institutions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Resonance</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Dynamic team of young professionals connected with the grassroot level in all cross 
              sections of the society. Created impact in socio economic upliftment through employable 
              skills training, job facilitation & wealth creating entrepreneurship trainings.
            </p>

            {/* Highlights */}
            <div className="space-y-6 mb-8">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Influential Trainers Certified by:
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">{index + 1}</span>
                      </div>
                    </div>
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Professional Team</h3>
                <p className="text-muted-foreground">Connected with grassroot communities</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">25,000+</div>
                  <div className="text-sm text-muted-foreground">Trained Candidates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100+</div>
                  <div className="text-sm text-muted-foreground">Organizations</div>
                </div>
              </div>

              {/* Achievement badges */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Government Certified Programs</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-accent/5 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Multi-sector Experience</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Proven Track Record</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-primary rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;