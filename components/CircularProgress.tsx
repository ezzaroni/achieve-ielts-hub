import React from 'react';

interface CircularProgressProps {
  value: number;
  label: string;
  color: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({ value, label, color }) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="transform -rotate-90 w-full h-full">
          <circle
            cx="20"
            cy="20"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="3"
            fill="transparent"
          />
          {/* Progress Circle */}
          <circle
            cx="20"
            cy="20"
            r={radius}
            stroke={color}
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-[9px] font-bold text-gray-700">{value}</span>
      </div>
      <span className="text-[8px] text-gray-500 font-medium">{label}</span>
    </div>
  );
};