import { Users } from "lucide-react";

const WhyChooseSection = () => {
  const certifications = [
    { number: "1.", text: "Ministry of Entrepreneurship & Skill Development," },
    { number: "2.", text: "Center for Innovation & AICTE, Ministry of Education, GOI" },
    { number: "3.", text: "Department of Science & Technology, GOI" },
    { number: "4.", text: "National Institute of Entrepreneurship & Small Business Development, MSME" },
    { number: "5.", text: "Entrepreneurship Development Institute of India, EDII" },
    { number: "6.", text: "International Finance Corporation, World Bank Group" }
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Resonance</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Images */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                    <p className="text-xs font-medium text-foreground text-center">Team Collaboration</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-purple-500/30 to-transparent rounded-full blur-xl"></div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💼</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                    <p className="text-xs font-medium text-foreground text-center">Professional Growth</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-purple-500/30 to-transparent rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <p className="text-xl text-foreground mb-8 leading-relaxed">
              Dynamic team of young professionals connected with the grassroot level in all cross sections of the society. Created impact in socio economic upliftment through employable skills training, job facilitation & wealth creating entrepreneurship trainings.
            </p>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8">
                Influential Trainers Certified by :
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-foreground font-bold text-lg flex-shrink-0">{cert.number}</span>
                    <span className="text-foreground font-medium text-lg leading-relaxed">{cert.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-right mt-12">
              <div className="text-primary font-bold text-lg">Page | 9</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;