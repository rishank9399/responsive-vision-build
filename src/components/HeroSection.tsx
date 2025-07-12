import { ArrowRight, Users, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-accent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering India's{" "}
            <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
              Skilled Workforce
            </span>{" "}
            & Entrepreneurs
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Resonance Solutions – Bridging Skills, Employability & Sustainability
          </p>

          {/* Company tagline */}
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Entrepreneurship & Employability Solutions Pvt. Ltd.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              Partner with Us
            </Button>
          </div>

          {/* Stats/Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">25,000+</div>
              <div className="text-white/80">Candidates Trained</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Briefcase className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80">Industry Partners</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Target className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">6+</div>
              <div className="text-white/80">Core Programs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;