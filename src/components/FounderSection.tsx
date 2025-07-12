import { Eye, Users, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FounderSection = () => {
  const qualities = [
    {
      icon: Eye,
      label: "Visionary",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Users,
      label: "Mentor", 
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Award,
      label: "Awarded",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: BookOpen,
      label: "Author",
      gradient: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-bold text-primary">RESONANCE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-50 to-blue-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/30 rounded-full flex items-center justify-center">
                    <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-4xl">VS</span>
                    </div>
                  </div>
                </div>
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Founder & MD
            </h2>
            
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Vivek Somnath Sinare
            </h3>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A seasoned socio-economic development leader with 20+ years of expertise in entrepreneurship training and large-scale skill development across India. A Gold Medalist and certified trainer by the IFC, World Bank, and NIESBUD, Vivek has empowered over 25,000 youth through industry-integrated programs. He has held national leadership roles in premier skilling institutions and is a passionate advocate for "Viksit Bharat," delivering impactful sessions at top universities nationwide.
            </p>

            {/* Quality Badges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {qualities.map((quality, index) => {
                const IconComponent = quality.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${quality.gradient} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-lg font-bold text-primary">{quality.label}</span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-right">
              <div className="text-primary font-bold text-lg">Page | 10</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;