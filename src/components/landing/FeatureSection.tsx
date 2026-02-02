import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureProps {
  title: string;
  description: string;
  cta: string;
  align: "left" | "right";
  imageGrid?: boolean;
  mainImage?: string;
}

const FeatureItem = ({
  title,
  description,
  cta,
  align,
  imageGrid,
  mainImage,
}: FeatureProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-12 md:gap-24 items-center py-20",
        align === "right" ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      {/* Image Side */}
      <div className="w-full md:w-1/2 relative">
        {imageGrid ? (
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=400"
              className="rounded-2xl h-40 w-full object-cover shadow-lg translate-y-8"
              alt="student"
            />
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=400"
              className="rounded-2xl h-40 w-full object-cover shadow-lg"
              alt="student"
            />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
              className="col-span-2 rounded-2xl h-48 w-full object-cover shadow-lg"
              alt="group"
            />
          </div>
        ) : (
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-muted aspect-[4/3]">
            <img
              src={mainImage}
              alt={title}
              className="w-full h-full object-cover"
            />

            {/* Decorative UI elements overlay */}
            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur p-3 rounded-xl shadow-lg">
              <div className="w-8 h-8 rounded-full border-4 border-green-500 flex items-center justify-center text-[10px] font-bold text-foreground">
                7.5
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2">
        <div className="inline-block border border-border bg-background px-3 py-1 rounded-full text-xs text-muted-foreground mb-6">
          Meet Achieved, Your Study Buddy.
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
          {description}
        </p>
        <a
          href="#"
          className="inline-flex items-center text-foreground font-semibold hover:text-primary transition-colors group"
        >
          {cta}
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export const FeatureSection = () => {
  return (
    <section className="bg-muted py-20 overflow-hidden">
      <MaxWidthWrapper>
        <FeatureItem
          align="left"
          title="Live Interactive Classes"
          description="Don't study alone. Join our live group sessions to practice conversation, build confidence, and get real-time corrections from expert tutors and peers from around the world."
          cta="Join a Class"
          imageGrid={true}
        />

        <FeatureItem
          align="right"
          title="Personalized Curriculum"
          description="Whether you need a Band 6.0 for university or 8.0 for migration, our adaptive curriculum focuses on your weak points so you don't waste time on what you already know."
          cta="Build My Plan"
          mainImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000"
        />

        <FeatureItem
          align="left"
          title="Progress Tracking"
          description="Stop guessing your score. Our intelligent dashboard visualizes your daily improvements across all four skills, predicting your IELTS band score with high accuracy."
          cta="View Analytics"
          mainImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
        />
      </MaxWidthWrapper>
    </section>
  );
};
