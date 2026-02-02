import React from 'react';
import { MaxWidthWrapper } from '../../layout/MaxWidthWrapper';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { UserCheck, MonitorPlay, Zap } from 'lucide-react';

export const ValueCards: React.FC = () => {
  return (
    <section className="bg-dark text-white py-24 rounded-t-[3rem] -mt-10 relative z-40">
      <MaxWidthWrapper>
        <div className="mb-12">
            <div className="inline-block border border-gray-700 rounded-full px-4 py-1.5 text-xs text-gray-400 mb-6">
                Meet Achieved, Your Study Buddy.
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-5xl">
                Let's be honest
                <span className="inline-block w-16 h-8 md:w-24 md:h-12 bg-primary rounded-full mx-3 align-middle -mt-2"></span>
                studying for <span className="text-gray-500">IELTS exam</span> isn't easy, and staying motivated can be tough
                <span className="inline-block w-16 h-8 md:w-24 md:h-12 bg-gray-700 rounded-full mx-3 align-middle -mt-2"></span>
                <br className="hidden md:block" />
                That's where <span className="text-gray-500">achieved</span> comes in.
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card className="bg-cardDark border border-gray-800 h-[420px] flex flex-col justify-between group">
                <div>
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                        <UserCheck />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Insider Knowledge from the Room</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Tutors aren't just teachers; they've been on the other side. They know the exact common traps students fall into.
                    </p>
                </div>
                <Button variant="ghost" className="self-start text-white hover:text-white hover:bg-gray-700 text-sm px-0 pl-4 pr-4">
                    Meet Your Mentor
                </Button>
            </Card>

            {/* Card 2 - Highlighted */}
            <Card className="bg-primary border border-primary h-[420px] flex flex-col justify-between group">
                <div>
                     <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                        <MonitorPlay />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Zero Surprises on Exam Day</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                        Our platform mimics the official IELTS computer interface 1:1. Practice until navigation feels like second nature.
                    </p>
                </div>
                <Button variant="white" className="self-start text-sm">
                    Try Mock Test
                </Button>
            </Card>

            {/* Card 3 */}
            <Card className="bg-white text-black h-[420px] flex flex-col justify-between group">
                <div>
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6 text-black group-hover:scale-110 transition-transform">
                        <Zap />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Instant, Precision Feedback</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Stop guessing where you lost marks. Get detailed breakdowns on your Writing and Speaking instantly.
                    </p>
                </div>
                <Button variant="ghost" className="self-start text-black hover:bg-gray-200 text-sm px-4 bg-gray-100">
                    Get Scored
                </Button>
            </Card>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};