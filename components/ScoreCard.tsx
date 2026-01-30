import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

interface SkillProps {
    score: number;
    label: string;
    colorClass: string;
    pathColorClass: string;
}

const SkillCircle: React.FC<SkillProps> = ({ score, label, colorClass, pathColorClass }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10px" });
    
    // Motion value for the number animation
    const count = useMotionValue(0);
    // Transform float values to integers for display
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            // Animate number from 0 to score over 2 seconds
            const controls = animate(count, score, { duration: 2, ease: "easeOut" });
            return () => controls.stop();
        }
    }, [isInView, score, count]);

    return (
        <div ref={ref} className="flex flex-col items-center gap-1">
            <div className={`relative w-12 h-12 rounded-full border-4 ${colorClass} bg-white flex items-center justify-center shadow-inner`}>
                <motion.span className="text-xs font-bold text-gray-700">
                    {rounded}
                </motion.span>
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <motion.path
                        className={pathColorClass}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        // Animate from 0 progress to the target score
                        initial={{ strokeDasharray: "0, 100" }}
                        animate={isInView ? { strokeDasharray: `${score}, 100` } : { strokeDasharray: "0, 100" }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        strokeWidth="3"
                        strokeLinecap="round"
                    ></motion.path>
                </svg>
            </div>
            {/* Adjusted text color to text-gray-600 for better visibility on light glass background */}
            <span className="text-[10px] text-gray-600 font-medium shadow-sm">{label}</span>
        </div>
    );
};

export const ScoreCard: React.FC = () => {
  return (
    <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl p-5 rounded-3xl w-[280px]">
      <h3 className="text-xs font-bold text-gray-800 mb-4 ml-1 bg-white/50 px-3 py-1.5 rounded-full w-fit backdrop-blur-sm border border-white/50">Communicative Skill</h3>
      <div className="flex justify-between items-end px-1">
        <SkillCircle score={90} label="Writing" colorClass="border-orange-100" pathColorClass="text-orange-400" />
        <SkillCircle score={80} label="Speaking" colorClass="border-blue-100" pathColorClass="text-blue-500" />
        <SkillCircle score={75} label="Listening" colorClass="border-purple-100" pathColorClass="text-purple-500" />
        <SkillCircle score={85} label="Reading" colorClass="border-teal-100" pathColorClass="text-teal-500" />
      </div>
    </div>
  );
};

export default ScoreCard;