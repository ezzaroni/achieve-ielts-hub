import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Star } from "lucide-react";
import studentHero from "@/assets/student-hero.png";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";
import testimonialAvatar from "@/assets/testimonial-avatar.jpg";

const SkillCircle = ({ value, color, label }: { value: number; color: string; label: string }) => (
  <div className="flex flex-col items-center gap-1">
    <div className={`relative w-12 h-12 rounded-full border-4 ${color} bg-card flex items-center justify-center`}>
      <span className="text-xs font-bold text-card-foreground">{value}</span>
      <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
        <path
          className={color.replace('border-', 'text-').replace('-200', '-500')}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeDasharray={`${value}, 100`}
          strokeWidth="3"
        />
      </svg>
    </div>
    <span className="text-[10px] text-secondary-foreground/90">{label}</span>
  </div>
);

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen gradient-hero overflow-hidden">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dots-pattern pointer-events-none opacity-50" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center pt-10 pb-32 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-dark/30 text-secondary-foreground text-xs font-medium border border-teal-dark/30 backdrop-blur-sm mb-6">
          #1st Test IELTS on 2026
        </div>

        <h1 className="font-display text-5xl md:text-7xl text-secondary-foreground mb-6 leading-tight drop-shadow-sm">
          Grow up your skills by online <br />
          courses with Onlearning
        </h1>

        <p className="text-secondary-foreground/80 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
          Join 200,000+ students acing their English exams with real test practice, instant AI feedback, and smart study plans
        </p>

        <div className="flex items-center gap-4">
          <Button variant="hero" size="xl">
            Enroll Our Practies Free
          </Button>
          <Button variant="heroIcon" size="iconLg">
            <ArrowRight className="w-6 h-6 -rotate-45" />
          </Button>
        </div>
      </div>

      {/* Curved bottom section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[55vh] md:h-[65vh] bg-secondary-foreground/10 backdrop-blur-[2px] rounded-t-[100%] border-t border-secondary-foreground/20">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-gradient-to-b from-secondary-foreground/20 to-secondary-foreground/5 rounded-t-[100%]" />
      </div>

      {/* Hero image and floating elements */}
      <div className="relative w-full max-w-6xl mx-auto h-[600px] mt-[-100px] md:mt-[-150px]">
        {/* Center student image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[350px] md:w-[480px]">
          <img
            src={studentHero}
            alt="Happy student giving thumbs up holding books"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Left side description */}
        <div className="absolute top-[20%] left-4 md:left-0 z-20 max-w-[250px] text-secondary-foreground/90 text-sm hidden md:block">
          <p className="leading-relaxed drop-shadow-md">
            The world's most effective preparation platform. Guaranteed high scores via former examiner feedback.
          </p>
        </div>

        {/* Band Score badge */}
        <div className="absolute top-[35%] left-[20%] md:left-[18%] z-10 bg-card/90 backdrop-blur text-teal px-4 py-2 rounded-xl shadow-lg font-bold text-sm transform -rotate-6">
          Band Score 8.5
        </div>

        {/* Student avatars with count */}
        <div className="absolute bottom-[20%] left-4 md:left-0 z-20 flex items-center gap-3">
          <div className="flex -space-x-3">
            <img alt="Student avatar" className="w-10 h-10 rounded-full border-2 border-card object-cover" src={avatar1} />
            <img alt="Student avatar" className="w-10 h-10 rounded-full border-2 border-card object-cover" src={avatar2} />
            <img alt="Student avatar" className="w-10 h-10 rounded-full border-2 border-card object-cover" src={avatar3} />
          </div>
          <div className="flex flex-col text-secondary-foreground drop-shadow-md">
            <span className="text-2xl font-display leading-none">5000+</span>
            <span className="text-xs opacity-90 leading-none">students have<br />joined</span>
          </div>
        </div>

        {/* Testimonial card */}
        <div className="absolute top-[15%] right-4 md:right-0 z-20 glass-card p-4 rounded-2xl max-w-[260px] transform rotate-3 hover:rotate-0 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-2">
            <img alt="Alisa M" className="w-10 h-10 rounded-full border border-secondary-foreground/50 object-cover" src={testimonialAvatar} />
            <div>
              <h4 className="text-secondary-foreground font-bold text-sm">Alisa M</h4>
              <div className="flex text-primary text-xs">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
          <p className="text-secondary-foreground/80 text-xs leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>

        {/* Trophy icon */}
        <div className="absolute top-[10%] right-[30%] z-10 opacity-70 animate-bounce-slow">
          <Trophy className="w-12 h-12 text-secondary-foreground" />
        </div>

        {/* Learn Practice text */}
        <div className="absolute bottom-[35%] right-[25%] z-30 hidden md:block">
          <div className="relative">
            <span className="font-display text-4xl text-primary bg-secondary-foreground/10 backdrop-blur-sm px-2 rounded transform -rotate-6 inline-block">Learn</span>
            <span className="font-display text-4xl text-secondary-foreground/90 bg-teal-dark/30 backdrop-blur-sm px-2 rounded transform rotate-3 inline-block absolute top-8 left-12">Practies</span>
            <svg className="absolute top-12 left-36 w-12 h-12 text-teal-dark transform rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Skills card */}
        <div className="absolute bottom-[10%] right-4 md:right-0 z-20 glass-card p-4 rounded-3xl w-[280px]">
          <h3 className="text-xs font-semibold text-card-foreground mb-3 ml-1 bg-card/80 px-2 py-1 rounded w-fit">Communicative Skill</h3>
          <div className="flex justify-between items-end px-1">
            <SkillCircle value={90} color="border-orange-200" label="Writing" />
            <SkillCircle value={80} color="border-blue-200" label="Speaking" />
            <SkillCircle value={75} color="border-purple-200" label="Listening" />
            <SkillCircle value={85} color="border-teal-200" label="Reading" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
