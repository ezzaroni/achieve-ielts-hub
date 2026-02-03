import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import noiseTexture from "@/assets/noise-texture.png";

export const ValueCards = () => {
  return (
    <section className="py-24 rounded-t-[3rem] -mt-10 relative z-40" style={{ backgroundColor: '#1B1B1B' }}>
      <MaxWidthWrapper>
        <div className="mb-12">
          <div className="inline-block border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/60 mb-6">
            Meet Achieved, Your Study Buddy.
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-5xl text-white">
            Let's be honest
            <span className="inline-block w-16 h-8 md:w-24 md:h-12 rounded-full mx-3 align-middle -mt-2" style={{ backgroundColor: '#156790' }}></span>
            studying for <span className="text-white">IELTS exam</span>{" "}
            isn't easy, and staying <span className="text-[#D4A853]">motivated can be tough.</span>
            <span className="inline-block w-16 h-8 md:w-24 md:h-12 bg-white/30 rounded-full mx-3 align-middle -mt-2"></span>
            <br className="hidden md:block" />
            That's where <span className="text-[#156790]">achieved test</span>,{" "}
            <span className="text-white/60">your dedicated study companion.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Insider Knowledge */}
          <div 
            className="p-8 h-[380px] flex flex-col justify-between relative overflow-hidden"
            style={{ backgroundColor: '#3B3B3B', borderRadius: '50px' }}
          >
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ 
                backgroundImage: `url(${noiseTexture})`,
                backgroundSize: 'cover',
                borderRadius: '50px'
              }}
            />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Insider Knowledge<br />
                from the Scoring Room
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Tutors aren't just teachers; they've been on the other side of the desk. They know the exact common traps students fall into.
              </p>
            </div>
            <Button
              className="self-start text-sm rounded-lg px-6"
              style={{ backgroundColor: '#156790', color: 'white' }}
            >
              Meet Your Mentor
            </Button>
          </div>

          {/* Card 2 - Zero Surprises */}
          <div 
            className="p-8 h-[380px] flex flex-col justify-between relative overflow-hidden"
            style={{ backgroundColor: '#156790', borderRadius: '50px' }}
          >
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ 
                backgroundImage: `url(${noiseTexture})`,
                backgroundSize: 'cover',
                borderRadius: '50px'
              }}
            />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Zero Surprises on<br />
                Exam Day
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Our platform mimics the official IELTS computer interface 1:1. Practice until the navigation feels like second nature.
              </p>
            </div>
            <Button
              className="self-start text-sm rounded-lg px-6 bg-white text-foreground hover:bg-white/90"
            >
              Try Mock Test
            </Button>
          </div>

          {/* Card 3 - Instant Precision Feedback */}
          <div 
            className="p-8 h-[380px] flex flex-col justify-between relative overflow-hidden"
            style={{ backgroundColor: '#D9D9D9', borderRadius: '50px' }}
          >
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ 
                backgroundImage: `url(${noiseTexture})`,
                backgroundSize: 'cover',
                borderRadius: '50px'
              }}
            />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                The Feedback Instant,<br />
                Precision Feedback
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Stop guessing where you lost marks. Get detailed breakdowns on your Writing and Speaking performance instantly—powered by advanced AI.
              </p>
            </div>
            <Button
              variant="outline"
              className="self-start text-sm rounded-lg px-6 border-foreground/30 text-foreground hover:bg-foreground/10"
            >
              Get Scored
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
