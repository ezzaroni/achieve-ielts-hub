import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { Card } from "@/components/ui/card";
import { Mic, PenTool, BookOpen, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  theme: "dark" | "light";
  children?: React.ReactNode;
}

const ModuleCard = ({
  title,
  icon,
  description,
  theme,
  children,
}: ModuleCardProps) => {
  const isDark = theme === "dark";

  return (
    <Card
      className={cn(
        "h-[480px] md:h-[520px] flex flex-col group transition-colors duration-300 p-6",
        isDark
          ? "bg-foreground/80 text-background border-muted-foreground/20"
          : "bg-background text-foreground border-border"
      )}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-2">
          <span className={isDark ? "text-muted-foreground" : "text-muted-foreground"}>
            {icon}
          </span>
          <span className="font-medium text-lg">{title}</span>
        </div>
        <span
          className={cn(
            "text-[10px] px-2 py-1 rounded uppercase font-bold tracking-wider",
            isDark
              ? "bg-secondary/20 text-secondary"
              : "bg-primary/10 text-primary"
          )}
        >
          AI Scoring
        </span>
      </div>

      <p className="text-xs text-muted-foreground mb-auto">{description}</p>

      <div className="relative h-40 w-full mt-4">{children}</div>
    </Card>
  );
};

export const TestModules = () => {
  return (
    <section id="test-modules" className="bg-foreground text-background py-24">
      <MaxWidthWrapper>
        <div className="mb-16">
          <h2 className="text-4xl font-light text-muted-foreground">
            Free <span className="text-background font-bold">IELTS Online Tests</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-2">For Practicing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Speaking */}
          <ModuleCard
            title="Speaking"
            icon={<Mic />}
            theme="dark"
            description="Daily update essay with auto feedback scoring by AI"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center relative">
                <div className="absolute inset-0 border border-white/5 rounded-full scale-150"></div>
                <div className="absolute inset-0 border border-white/5 rounded-full scale-[2]"></div>
                <Mic className="w-8 h-8 text-background" />
              </div>
            </div>
          </ModuleCard>

          {/* Writing */}
          <ModuleCard
            title="Writing"
            icon={<PenTool />}
            theme="light"
            description="Daily update essay with auto feedback scoring by AI"
          >
            <div className="space-y-3 pt-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg text-xs flex justify-between shadow-lg transform -rotate-1">
                <span>Task 1 Bar Chart</span>
                <span className="opacity-70">30 min</span>
              </div>
              <div className="bg-foreground text-background p-3 rounded-lg text-xs flex justify-between shadow-lg transform rotate-2">
                <span>Task 2 Essay</span>
                <span className="opacity-70">40 min</span>
              </div>
            </div>
          </ModuleCard>

          {/* Reading */}
          <ModuleCard
            title="Reading"
            icon={<BookOpen />}
            theme="dark"
            description="Real exam questions updated daily"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-muted-foreground/20 rounded-tl-full"></div>
            <div className="absolute bottom-4 right-4 text-right">
              <div className="h-2 w-12 bg-muted-foreground/50 rounded mb-2 ml-auto"></div>
              <div className="h-2 w-20 bg-muted-foreground/50 rounded mb-2 ml-auto"></div>
              <div className="h-2 w-16 bg-muted-foreground/50 rounded ml-auto"></div>
            </div>
          </ModuleCard>

          {/* Listening */}
          <ModuleCard
            title="Listening"
            icon={<Headphones />}
            theme="light"
            description="Immersive audio tests with accents"
          >
            <div className="flex items-end justify-center gap-1 h-full pb-6">
              {[4, 8, 5, 10, 6, 9, 3].map((h, i) => (
                <div
                  key={i}
                  className="w-2 bg-foreground rounded-full animate-pulse"
                  style={{
                    height: `${h * 10}%`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                ></div>
              ))}
            </div>
          </ModuleCard>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
