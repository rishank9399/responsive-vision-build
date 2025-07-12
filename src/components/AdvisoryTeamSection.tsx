import { Card, CardContent } from "@/components/ui/card";

const AdvisoryTeamSection = () => {
  const advisors = [
    {
      name: "DR. MILIND KAMBLE",
      role: "Padma Shri awardee and visionary entrepreneur",
      description: "Transforming India's entrepreneurial landscape through inclusive growth and DICCI leadership.",
      image: "advisor-1"
    },
    {
      name: "ATUL KULKARNI", 
      role: "Techno-managerial expert with 30+ years",
      description: "in leadership, consulting, and policy, specializing in supply chain and global markets.",
      image: "advisor-2"
    },
    {
      name: "VAIBHAV DANGE",
      role: "Experienced advisor with expertise in government",
      description: "CSR, sustainable development, and strategic planning.",
      image: "advisor-3"
    },
    {
      name: "RITA SEN GUPTA",
      role: "Former NIESBUD Director and master trainer",
      description: "with global credentials and experience training 1,500+ professionals in entrepreneurship.",
      image: "advisor-4"
    },
    {
      name: "SUMITRA GOENKA",
      role: "First Generation Entrepreneur, Director of Ratein Infotech",
      description: "India Pvt Ltd & CEO of ThanksGlobal & Founder Director of Freshfrugies Storage & Logistics Pvt Ltd, Ulbha Pvt Ltd and Ojastatva Life pvt ltd. Independent Director at Plada Infotech a NSE listed Company.",
      image: "advisor-5"
    },
    {
      name: "RAJENDRA BAGADE",
      role: "Senior Chartered Accountant and Director at SARC Associates",
      description: "with extensive audit experience across banks, PSUs, FDI firms, and major industries.",
      image: "advisor-6"
    },
    {
      name: "SAARA A TOMAR",
      role: "Startup mentor and edtech founder",
      description: "with 20+ years in sales, marketing, and government advisory.",
      image: "advisor-7"
    },
    {
      name: "NARENDRA GODSE",
      role: "Startup mentor and public sector advisor",
      description: "with 20+ years in sales, marketing, and digital transformation; founder of an IIM Kolkata-incubated edtech venture.",
      image: "advisor-8"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-bold text-primary">RESONANCE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Best Advisory</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((advisor, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-accent"></div>
              <CardContent className="p-0">
                {/* Profile Image */}
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">{advisor.name.charAt(0)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-purple-500/30 to-transparent rounded-full blur-xl"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 text-center">
                    {advisor.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3 text-center">
                    {advisor.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    {advisor.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="text-primary font-bold text-lg">Page | 11</div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryTeamSection;