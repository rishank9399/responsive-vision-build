const ThankYouSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center transform rotate-3">
              <span className="text-white font-bold text-3xl transform -rotate-3">R</span>
            </div>
          </div>

          {/* Company Name */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">RESONANCE</h1>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              Entrepreneurship & Employability Solutions Pvt. Ltd.
            </p>
          </div>

          {/* Thank You Message */}
          <div className="mb-16">
            <h2 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="text-primary">Thank</span>{" "}
              <span className="text-foreground">You!</span>
            </h2>
          </div>

          {/* Bottom indicator */}
          <div className="text-right">
            <p className="text-primary font-medium">End Page</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;