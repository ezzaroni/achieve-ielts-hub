import { Landmark, BookOpen } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    { icon: Landmark, name: "HARVARD" },
    { icon: BookOpen, name: "Stanford" },
    { icon: Landmark, name: "HARVARD" },
    { icon: BookOpen, name: "Stanford" },
    { icon: Landmark, name: "HARVARD" },
  ];

  return (
    <div className="bg-card py-8 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <div key={index} className={`flex items-center gap-2 ${index > 3 ? 'hidden md:flex' : ''}`}>
              <partner.icon className="w-8 h-8 text-foreground" />
              <span className="font-display font-bold text-xl tracking-tight text-foreground">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
