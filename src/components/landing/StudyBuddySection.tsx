import { Button } from "@/components/ui/button";

const StudyBuddySection = () => {
  return (
    <section className="py-20 bg-foreground text-background px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-background/10 rounded-3xl h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop"
                    alt="Students studying"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-primary rounded-2xl p-4">
                  <p className="text-primary-foreground text-sm font-medium">Come on!</p>
                  <p className="text-primary-foreground text-lg font-bold">You Can do it</p>
                </div>
              </div>
              <div className="pt-12">
                <div className="bg-background/10 rounded-3xl h-72 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=500&fit=crop"
                    alt="Student learning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-left">
            <span className="text-primary text-sm font-medium mb-4 block">Meet Achieved,</span>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Your Study Buddy.
            </h2>
            <p className="text-background/70 mb-6 leading-relaxed">
              Let's be honest— studying for English exams isn't easy, and staying motivated can be tough. That's why we've designed a test platform to support your journey. Here's how we're here for you:
            </p>
            <ul className="text-background/70 space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>With Let's Test, immediately correct results that you can track, step-by-step.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Whether you're prepping for a career test in business, academics, healthcare, or travel — our test prep meets you where you are.</span>
              </li>
            </ul>
            <Button variant="hero" size="xl">
              Join Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyBuddySection;
