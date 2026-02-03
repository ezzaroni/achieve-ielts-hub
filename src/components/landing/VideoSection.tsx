import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { Play } from "lucide-react";
import videoClassroom from "@/assets/video-classroom.png";

export const VideoSection = () => {
  return (
    <section className="relative" style={{ backgroundColor: '#1B1B1B' }}>
      {/* Full Width Video Container */}
      <div className="relative w-full">
        {/* Video Image */}
        <div className="relative aspect-video w-full">
          <img
            src={videoClassroom}
            alt="IELTS Training Classroom"
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          {/* Play Button */}
          <button className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-2xl z-10" style={{ backgroundColor: '#156790' }}>
            <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
          </button>

          {/* Achieved Text & Description - Overlay on Image */}
          <div className="absolute bottom-0 left-0 right-0 pb-8 md:pb-12 lg:pb-16 z-10">
            <MaxWidthWrapper>
              {/* Achieved Text */}
              <div className="flex justify-center mb-4 md:mb-6">
                <h2 className="text-[12vw] md:text-[10vw] leading-none font-display font-bold tracking-tighter">
                  <span style={{ color: '#EDF9FF' }}>achie</span>
                  <span style={{ color: '#1B79A8' }}>ved</span>
                </h2>
              </div>

              {/* Description Text */}
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed">
                  Automated grading can't catch the nuance of Band 8.0 English. That's why we've put real human examiners, detailed writing feedback, and live speaking practice at the core of everything we do.
                </p>
              </div>
            </MaxWidthWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
