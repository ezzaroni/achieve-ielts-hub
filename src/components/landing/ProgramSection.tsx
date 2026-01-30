import { Star, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
  image: string;
  title: string;
  rating: number;
  duration: string;
  students: string;
  price: string;
  instructor: string;
}

const CourseCard = ({ image, title, rating, duration, students, price, instructor }: CourseCardProps) => (
  <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
    </div>
    <div className="p-5">
      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-primary fill-primary' : 'text-muted'}`}
          />
        ))}
      </div>
      <h3 className="font-semibold text-card-foreground mb-3 line-clamp-2">{title}</h3>
      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {duration}
        </span>
        <span className="flex items-center gap-1">
          <Users className="w-3.5 h-3.5" />
          {students}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-secondary rounded-full" />
          <span className="text-xs text-muted-foreground">{instructor}</span>
        </div>
        <span className="font-bold text-secondary">{price}</span>
      </div>
    </div>
  </div>
);

const ProgramSection = () => {
  const courses = [
    {
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      title: "Complete IELTS Beginner Class",
      rating: 5,
      duration: "8 weeks",
      students: "5.7k students",
      price: "Rp.500k",
      instructor: "M. Owen",
    },
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      title: "Complete IELTS Regular Class",
      rating: 4,
      duration: "12 weeks",
      students: "4.2k students",
      price: "Rp.500k",
      instructor: "N. Mory",
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      title: "Complete IELTS Master Class",
      rating: 5,
      duration: "16 weeks",
      students: "3.8k students",
      price: "Rp.500k",
      instructor: "A. Wilson",
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      title: "Complete TOEFL Beginner Class",
      rating: 5,
      duration: "6 weeks",
      students: "6.1k students",
      price: "Rp.500k",
      instructor: "M. Clark",
    },
    {
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop",
      title: "Complete IELTS Essay Structure",
      rating: 4,
      duration: "4 weeks",
      students: "2.9k students",
      price: "Rp.500k",
      instructor: "S. Philip",
    },
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
      title: "Complete IELTS Speaking Class",
      rating: 5,
      duration: "8 weeks",
      students: "4.5k students",
      price: "Rp.500k",
      instructor: "K. Moore",
    },
  ];

  const filters = ["All Class", "Familiar Class", "Audiences Primer", "Writing Time", "Speaking"];

  return (
    <section className="py-20 bg-background text-center px-4">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
          Our Program Class
        </span>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
          Program Class for Boost Your Brain and Score
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Automated grading can't catch the nuance of Band 8.0 English. That's why we've put real human examiners.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? 'bg-secondary text-secondary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-secondary/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-center gap-3">
          <Button variant="outline" className="rounded-full px-6">
            Search Our Favorites Topics
          </Button>
          <Button variant="heroIcon" size="icon">
            <ArrowRight className="w-4 h-4 -rotate-45" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
