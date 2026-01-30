const MarqueeSection = () => {
  const items = [
    "Skill Boost",
    "Scored Mock Test",
    "Practies Question",
    "Skill Boost",
  ];

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-8 text-4xl md:text-6xl font-display text-foreground/20 hover:text-secondary transition-colors cursor-default"
          >
            {item} <span className="text-primary">•</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
