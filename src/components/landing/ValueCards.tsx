import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCheck, MonitorPlay, Zap } from "lucide-react";

export const ValueCards = () => {
  return (
    <section className="bg-foreground text-background py-24 rounded-t-[3rem] -mt-10 relative z-40">
      <MaxWidthWrapper>
        <div className="mb-12">
          <div className="inline-block border border-muted-foreground/30 rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
            Meet Achieved, Your Study Buddy.
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-5xl">
            Let's be honest
            <span className="inline-block w-16 h-8 md:w-24 md:h-12 bg-primary rounded-full mx-3 align-middle -mt-2"></span>
            studying for <span className="text-muted-foreground">IELTS exam</span>{" "}
            isn't easy, and staying motivated can be tough
            <span className="inline-block w-16 h-8 md:w-24 md:h-12 bg-muted-foreground/50 rounded-full mx-3 align-middle -mt-2"></span>
            <br className="hidden md:block" />
            That's where <span className="text-muted-foreground">achieved</span>{" "}
            comes in.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card className="bg-foreground/80 border-muted-foreground/20 h-[420px] flex flex-col justify-between group text-background">
            <div>
              <div className="w-12 h-12 rounded-full bg-muted-foreground/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UserCheck className="text-background" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Insider Knowledge from the Room
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tutors aren't just teachers; they've been on the other side.
                They know the exact common traps students fall into.
              </p>
            </div>
            <Button
              variant="ghost"
              className="self-start text-background hover:text-background hover:bg-muted-foreground/20 text-sm"
            >
              Meet Your Mentor
            </Button>
          </Card>

          {/* Card 2 - Highlighted */}
          <Card className="bg-primary border-primary h-[420px] flex flex-col justify-between group text-primary-foreground">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MonitorPlay className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Zero Surprises on Exam Day
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Our platform mimics the official IELTS computer interface 1:1.
                Practice until navigation feels like second nature.
              </p>
            </div>
            <Button variant="white" className="self-start text-sm">
              Try Mock Test
            </Button>
          </Card>

          {/* Card 3 */}
          <Card className="bg-background border-border h-[420px] flex flex-col justify-between group text-foreground">
            <div>
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Instant, Precision Feedback
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Stop guessing where you lost marks. Get detailed breakdowns on
                your Writing and Speaking instantly.
              </p>
            </div>
            <Button
              variant="ghost"
              className="self-start text-foreground hover:bg-muted text-sm bg-muted"
            >
              Get Scored
            </Button>
          </Card>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
