const AchievedSection = () => {
  const categories = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];

  return (
    <section className="py-20 bg-background px-4">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
          Why Achieved.Test?
        </span>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12">
          Achieved For Students, Professionals, & Dreamers
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-muted rounded-2xl h-48 flex items-center justify-center"
            >
              <div className="w-full h-full bg-muted rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievedSection;
