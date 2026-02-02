import React from 'react';
import { MaxWidthWrapper } from '../../layout/MaxWidthWrapper';
import { Mic, PenTool, BookOpen, Headphones } from 'lucide-react';
import { Card } from '../ui/Card';

const ModuleCard: React.FC<{
    title: string;
    icon: React.ReactNode;
    description: string;
    color: string;
    theme: 'dark' | 'light';
    children?: React.ReactNode;
}> = ({ title, icon, description, color, theme, children }) => {
    const isDark = theme === 'dark';
    
    return (
        <Card className={`h-[400px] flex flex-col ${isDark ? 'bg-cardDark text-white' : 'bg-white text-black'} group transition-colors duration-300`}>
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>{icon}</span>
                    <span className="font-medium text-lg">{title}</span>
                </div>
                <span className={`text-[10px] px-2 py-1 rounded uppercase font-bold tracking-wider ${isDark ? 'bg-secondary/20 text-secondary' : 'bg-blue-100 text-blue-700'}`}>
                    AI Scoring
                </span>
            </div>
            
            <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'} mb-auto`}>
                {description}
            </p>

            <div className="relative h-40 w-full mt-4">
                {children}
            </div>
        </Card>
    );
};

export const TestModules: React.FC = () => {
  return (
    <section id="test-modules" className="bg-dark text-white py-24">
      <MaxWidthWrapper>
        <div className="mb-16">
            <h2 className="text-4xl font-light text-gray-500">
                Free <span className="text-white font-bold">IELTS Online Tests</span>
            </h2>
            <p className="text-xl text-gray-600 mt-2">For Practicing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Speaking */}
            <ModuleCard 
                title="Speaking" 
                icon={<Mic />} 
                theme="dark"
                color="bg-secondary"
                description="Daily update essay with auto feedback scoring by AI"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center relative">
                        <div className="absolute inset-0 border border-white/5 rounded-full scale-150"></div>
                         <div className="absolute inset-0 border border-white/5 rounded-full scale-[2]"></div>
                        <Mic className="w-8 h-8 text-white" />
                    </div>
                </div>
            </ModuleCard>

            {/* Writing */}
            <ModuleCard 
                title="Writing" 
                icon={<PenTool />} 
                theme="light"
                color="bg-primary"
                description="Daily update essay with auto feedback scoring by AI"
            >
                <div className="space-y-3 pt-4">
                    <div className="bg-blue-900 text-white p-3 rounded-lg text-xs flex justify-between shadow-lg transform -rotate-1">
                        <span>Task 1 Bar Chart</span>
                        <span className="text-gray-400">30 min</span>
                    </div>
                    <div className="bg-gray-800 text-white p-3 rounded-lg text-xs flex justify-between shadow-lg transform rotate-2">
                        <span>Task 2 Essay</span>
                        <span className="text-gray-400">40 min</span>
                    </div>
                </div>
            </ModuleCard>

             {/* Reading */}
             <ModuleCard 
                title="Reading" 
                icon={<BookOpen />} 
                theme="dark"
                color="bg-purple-500"
                description="Real exam questions updated daily"
            >
                 <div className="absolute bottom-0 right-0 w-32 h-32 bg-gray-700/30 rounded-tl-full"></div>
                 <div className="absolute bottom-4 right-4 text-right">
                     <div className="h-2 w-12 bg-gray-600 rounded mb-2 ml-auto"></div>
                     <div className="h-2 w-20 bg-gray-600 rounded mb-2 ml-auto"></div>
                     <div className="h-2 w-16 bg-gray-600 rounded ml-auto"></div>
                 </div>
            </ModuleCard>

             {/* Listening */}
             <ModuleCard 
                title="Listening" 
                icon={<Headphones />} 
                theme="light"
                color="bg-green-500"
                description="Immersive audio tests with accents"
            >
                <div className="flex items-end justify-center gap-1 h-full pb-6">
                    {[4,8,5,10,6,9,3].map((h, i) => (
                        <div key={i} className="w-2 bg-black rounded-full animate-pulse" style={{ height: `${h * 10}%`, animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                </div>
            </ModuleCard>
        </div>

      </MaxWidthWrapper>
    </section>
  );
};