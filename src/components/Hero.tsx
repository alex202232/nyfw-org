import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-scale-in"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-primary-foreground animate-fade-in-up px-4">
          <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight">
            NYFW
          </h2>
          <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-widest">
            MODELS
          </h3>
          <p className="mt-8 font-sans text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
            Legendary agency representing the world's most iconic talent
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};
