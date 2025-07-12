import { Building2, Shield, Handshake } from "lucide-react";

const PartnersSection = () => {
  const governmentPartners = [
    "Ministry of Skill Development and Entrepreneurship",
    "Ministry of Science and Technology",
    "Ministry of Education",
    "Ministry of Development of North Eastern Region",
    "Department of Public Enterprises",
    "Ministry of Rural Development",
    "Ministry of New and Renewable Energy", 
    "Ministry of Ports, Shipping and Waterways",
    "Skill India",
    "Ministry of Food Processing Industries",
    "National Bamboo Mission",
    "Ministry of Agriculture and Farmers Welfare"
  ];

  const industryPartners = [
    "TATA", "Cummins", "Mahindra", "Piaggio", "TVS", "Godrej", "Escorts",
    "JCB", "Hyundai", "Maruti Suzuki", "Toyota", "KIA", "Skoda", "Bajaj", "Siemens",
    "NTTF", "UNO MINDA", "Progression School", "TATA STRIVE", "Lighthouse",
    "Sandip University", "SARC Associates", "WeSchool"
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Collaborating with leading organizations to create impactful solutions
          </p>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto"></div>
        </div>

        {/* Government Partners */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-3xl font-bold text-primary">Government Partners</h3>
            </div>
            <p className="text-muted-foreground">Trusted by leading government institutions</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {governmentPartners.map((partner, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-200"
                >
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-foreground font-medium text-sm">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Partners */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Building2 className="h-8 w-8 text-accent mr-3" />
              <h3 className="text-3xl font-bold text-accent">Industry Partners</h3>
            </div>
            <p className="text-muted-foreground">Leading companies across various sectors</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {industryPartners.map((partner, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-lg hover:bg-accent/5 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSR Partners */}
        <div>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Handshake className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-3xl font-bold text-primary">CSR & Knowledge Partners</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["TATA STRIVE", "Lighthouse", "Sandip University", "WeSchool"].map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-foreground">{partner}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Become Our Partner
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our network of leading organizations working together to create positive impact
            </p>
            <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Partner with Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;