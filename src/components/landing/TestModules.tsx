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
        "h-[550px] md:h-[600px] flex flex-col group transition-colors duration-300 p-8 rounded-[2rem] border-0",
        isDark
          ? "bg-foreground/90 text-background"
          : "bg-background text-foreground"
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <span className={isDark ? "text-background/70" : "text-foreground/70"}>
            {icon}
          </span>
          <span className="font-semibold text-2xl">{title}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "text-xs font-medium",
              isDark ? "text-primary" : "text-primary"
            )}
          >
            AI Scoring
          </span>
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

      <div className="relative flex-1 w-full mt-6">{children}</div>
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
            icon={<Mic className="w-6 h-6" />}
            theme="dark"
            description="Daily update essay with auto feedback scoring by AI"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center relative">
                <div className="absolute inset-0 border border-white/10 rounded-full scale-125"></div>
                <div className="absolute inset-0 border border-white/10 rounded-full scale-150"></div>
                <div className="absolute inset-0 border border-white/5 rounded-full scale-[1.75]"></div>
                <div className="absolute inset-0 border border-white/5 rounded-full scale-[2]"></div>
                <Mic className="w-10 h-10 text-background" />
              </div>
            </div>
          </ModuleCard>

          {/* Writing */}
          <ModuleCard
            title="Writing"
            icon={<PenTool className="w-6 h-6" />}
            theme="light"
            description="Daily update essay with auto feedback scoring by AI"
          >
            <div className="space-y-4 pt-4">
              <div className="bg-primary text-primary-foreground p-4 rounded-xl text-sm flex justify-between items-center shadow-lg">
                <div>
                  <div className="font-medium">Task 1 Bar Chart</div>
                  <div className="text-xs opacity-70 mt-1">30 minutes</div>
                </div>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              </div>
              <div className="bg-foreground text-background p-4 rounded-xl text-sm shadow-lg">
                <div className="font-medium">Task 2 Line Chart</div>
                <div className="text-xs opacity-70 mt-1">40 minutes</div>
              </div>
              <div className="bg-foreground text-background p-4 rounded-xl text-sm shadow-lg">
                <div className="font-medium">Task 2 Pie Chart</div>
                <div className="text-xs opacity-70 mt-1">45 minutes</div>
              </div>
            </div>
          </ModuleCard>

          {/* Reading */}
          <ModuleCard
            title="Reading"
            icon={<BookOpen className="w-6 h-6" />}
            theme="dark"
            description="Daily update essay with auto feedback scoring by AI"
          >
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-foreground/50 p-4">
                <div className="space-y-2 text-right text-xs text-muted-foreground">
                  <p>dolor</p>
                  <p>estie.</p>
                  <p className="mt-4">s proin.</p>
                  <p>dales duis</p>
                  <p>ortor. Quis</p>
                  <p>d montes</p>
                  <p>ibus lacus.</p>
                </div>
              </div>
              {/* Page curl effect */}
              <div className="absolute bottom-0 right-0 w-24 h-24">
                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-background via-background to-transparent transform origin-bottom-right" 
                     style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
              </div>
            </div>
          </ModuleCard>

          {/* Listening */}
          <ModuleCard
            title="Listening"
            icon={<Headphones className="w-6 h-6" />}
            theme="light"
            description="Daily update essay with auto feedback scoring by AI"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-20 bg-foreground rounded-full"></div>
                <div className="w-4 h-28 bg-foreground rounded-full"></div>
                <div className="w-4 h-16 bg-foreground/60 rounded-full"></div>
              </div>
              <div className="w-32 h-2 bg-primary rounded-full"></div>
            </div>
          </ModuleCard>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
