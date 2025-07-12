import { Card } from "@/components/ui/card";

const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      alt: "Business meeting with partners",
      description: "Strategic partnership discussions"
    },
    {
      id: 2,
      alt: "Training session in progress", 
      description: "Professional training program"
    },
    {
      id: 3,
      alt: "Team collaboration meeting",
      description: "Team building and collaboration"
    },
    {
      id: 4,
      alt: "Skills development workshop",
      description: "Skill development initiatives"
    },
    {
      id: 5,
      alt: "Government partnership meeting",
      description: "Government partnership programs"
    },
    {
      id: 6,
      alt: "Group photo with team",
      description: "Team and stakeholder meetup"
    },
    {
      id: 7,
      alt: "Conference presentation",
      description: "Industry conference participation"
    },
    {
      id: 8,
      alt: "Award ceremony",
      description: "Recognition and achievements"
    },
    {
      id: 9,
      alt: "Workshop session",
      description: "Interactive workshop sessions"
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Journey in <span className="text-primary">Pictures</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={image.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{image.id}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{image.description}</h3>
                    <p className="text-sm text-muted-foreground">{image.alt}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-sm font-medium text-foreground">{image.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Capturing moments of growth, partnership, and success in our journey to empower India's workforce.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;