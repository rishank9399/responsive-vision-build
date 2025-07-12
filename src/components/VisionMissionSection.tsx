import { Eye, Target, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const VisionMissionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vision & Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">Vision</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-foreground leading-relaxed">
                To ignite a vibrant entrepreneurial culture and equip the youth with{" "}
                <span className="font-semibold text-primary">employable skills</span> to create a robust industrial workforce for the nation and beyond.
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-accent mb-2">Mission</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed">
                  To establish a strong framework that empowers entrepreneurs to overcome challenges and develop{" "}
                  <span className="font-semibold text-accent">scalable, sustainable businesses.</span>
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  To champion innovation as a key driver of{" "}
                  <span className="font-semibold text-primary">India's economic advancement.</span>
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  To foster job creation, financial inclusivity and GDP growth through the success of entrepreneurial ventures.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Mission Points */}
        <div className="mt-12 bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <Rocket className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-primary">Our Commitment</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">💼</div>
              <h4 className="font-semibold text-foreground">Job Creation</h4>
              <p className="text-muted-foreground">Fostering employment opportunities across industries</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">💰</div>
              <h4 className="font-semibold text-foreground">Financial Inclusivity</h4>
              <p className="text-muted-foreground">Promoting accessible financial solutions</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">📈</div>
              <h4 className="font-semibold text-foreground">GDP Growth</h4>
              <p className="text-muted-foreground">Contributing to national economic development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;