import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { ArrowUpRight } from "lucide-react";

const CircularProgress = ({
  score,
  color,
  label
}: {
  score: number;
  color: string;
  label: string;
}) => {
  return <div className="flex flex-col items-center">
      <div className="relative w-9 h-9 md:w-11 md:h-11 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="50%" cy="50%" r="42%" stroke="hsl(var(--muted))" strokeWidth="3" fill="transparent" className="opacity-20" />
          <circle cx="50%" cy="50%" r="42%" stroke={color} strokeWidth="3" fill="transparent" strokeDasharray="100" strokeDashoffset={100 - score} strokeLinecap="round" />
        </svg>
        <span className="absolute text-xs md:text-sm font-bold text-foreground">
          {score}
        </span>
      </div>
      <span className="text-[8px] md:text-[10px] mt-1 text-muted-foreground font-medium">
        {label}
      </span>
    </div>;
};

// Curved arrow SVG component
const CurvedArrow = () => <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-primary">
    <path d="M5 5C15 5 45 5 50 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
    <path d="M45 20L50 25L55 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
export const Hero = () => {
  return <>
      <section className="relative w-full h-screen pt-32 pb-0 overflow-hidden" style={{
      background: "linear-gradient(to bottom, hsl(200 69% 41%) 0%, hsl(var(--background)) 100%)"
    }}>
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-background" />
        </div>

        {/* Background Big Text "achieved" - Split color and joined */}
        <div className="absolute inset-0 z-0 flex items-center justify-center select-none pointer-events-none transform -translate-y-[8vw]">
          <h1 className="text-[22vw] leading-none font-display font-bold tracking-tighter whitespace-nowrap flex items-center">
            <span className="text-white">achie</span>
            <span className="text-primary relative">
              ved
              {/* 'test' Badge */}
              <div className="absolute top-[2vw] -right-[2vw] bg-secondary text-primary text-[2.5vw] font-bold px-4 py-1 rounded-2xl shadow-xl transform rotate-6 border-2 border-white/20">
                test
              </div>
            </span>
          </h1>
        </div>

        <MaxWidthWrapper className="relative z-10 h-full flex flex-col">
          {/* Top Floating Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {/* Boost Your Brain Pill */}
            <div className="absolute top-0 left-0 border border-white/40 bg-white/5 backdrop-blur-sm text-white px-6 py-2 rounded-full text-xs font-light tracking-wide hidden lg:block">
              Boost Your Brain
            </div>

            {/* Boost Your Score Pill */}
            <div className="absolute top-[40%] right-[-2%] border border-white/20 text-white/20 px-10 py-5 rounded-full text-sm tracking-widest hidden lg:block rotate-[-5deg]">
              Boost Your Score
            </div>
          </div>

          {/* Main Content Area: Students and Floating Cards */}
          <div className="relative flex-grow flex items-end justify-center">
            {/* Students Container - Positioned at bottom */}
            <div className="relative w-full max-w-6xl flex justify-center items-end px-4">
              {/* Woman Student Image */}
              <div className="relative z-20 w-[44%] md:w-[38%] -mr-6 md:-mr-10">
                <img alt="Woman Student" className="w-full object-contain translate-y-2" src="/lovable-uploads/f49bb1e9-4b64-48d2-8502-8e36e213280c.png" />
              </div>
              
              {/* Man Student Image */}
              <div className="relative z-30 w-[58%] md:w-[50%] -ml-10 md:-ml-16">
                <img alt="Man Student" className="w-full object-contain translate-y-2" src="/lovable-uploads/89b1756f-102f-4315-90b1-b0fe41148367.png" />
              </div>

              {/* Left Side Container: Learn Practies + Skills Card + Student Joined */}
              <div className="absolute left-0 bottom-[6%] z-30 flex flex-col items-start gap-4">
                {/* Learn Practies Text with Arrow */}
                <div className="flex items-end gap-2 ml-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-primary font-semibold text-lg md:text-xl">Learn</span>
                    <span className="text-secondary font-semibold text-lg md:text-xl">Practies</span>
                  </div>
                  <CurvedArrow />
                </div>

                {/* Comunicative Skill Card */}
                <div className="backdrop-blur-xl p-3 md:p-4 shadow-2xl rounded-3xl bg-[#c9dce4]/[0.67] border-4 border-white/35">
                  <div className="text-primary font-semibold text-xs md:text-sm mb-3">
                    Comunicative Skill
                  </div>
                  <div className="flex justify-between gap-2 md:gap-3">
                    <CircularProgress score={90} label="Writing" color="#FFB800" />
                    <CircularProgress score={80} label="Speaking" color="#FF5B5B" />
                    <CircularProgress score={75} label="Listening" color="#8A70D6" />
                    <CircularProgress score={85} label="Reading" color="#2ACCC8" />
                  </div>
                </div>

                {/* Student Joined Card */}
                <div className="backdrop-blur-md p-3 md:p-4 rounded-xl mt-16 bg-white/0 border-white/0 border-0">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary border-2 border-white overflow-hidden shadow-sm">
                        <img src="https://i.pravatar.cc/100?u=1" className="w-full h-full object-cover" alt="User" />
                      </div>
                      <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-purple-400 border-2 border-white overflow-hidden shadow-sm">
                        <img src="https://i.pravatar.cc/100?u=2" className="w-full h-full object-cover" alt="User" />
                      </div>
                      <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-secondary border-2 border-white overflow-hidden shadow-sm">
                        <img src="https://i.pravatar.cc/100?u=3" className="w-full h-full object-cover" alt="User" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-bold text-primary leading-none">
                        300+
                      </span>
                      <span className="text-primary/70 text-[10px] font-semibold">
                        Student Joined
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 max-w-[180px] text-muted-foreground text-[9px] leading-relaxed hidden md:block">
                    The world's most effective preparation platform. Guaranteed high
                    scores via former examiner feedback.
                  </p>
                </div>
              </div>

              {/* Floating UI: Start Free Now (Bottom Right) */}
              <div className="absolute bottom-10 right-0 z-30">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground pl-8 pr-2 py-2 rounded-full flex items-center gap-6 shadow-2xl transition-all group border border-white/10">
                  <span className="text-base md:text-xl font-medium">
                    Start Free Now
                  </span>
                  <span className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-primary group-hover:rotate-45 transition-transform duration-300 shadow-inner">
                    <ArrowUpRight className="w-5 h-5 md:w-7 md:h-7 stroke-[3]" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Transition Bar */}
      <div className="bg-foreground py-6 flex justify-center relative z-50">
        <button className="border border-white/10 text-white/50 text-[10px] md:text-xs px-6 py-2 rounded-full hover:bg-white/5 transition tracking-wide font-light">
          Meet Achieved, Your Study Buddy.
        </button>
      </div>
    </>;
};