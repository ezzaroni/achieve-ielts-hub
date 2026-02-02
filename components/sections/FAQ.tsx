import React from 'react';
import { MaxWidthWrapper } from '../../layout/MaxWidthWrapper';
import { Accordion } from '../ui/Accordion';

export const FAQ: React.FC = () => {
  const questions = [
    { question: "What is IELTS?", answer: "The International English Language Testing System (IELTS) is designed to help you work, study or migrate to a country where English is the native language." },
    { question: "How does Achieved.test work?", answer: "We provide mock tests that mimic the real exam environment, instant AI grading, and human feedback to help you improve your band score efficiently." },
    { question: "Why choose Achieved.test over others?", answer: "Our platform offers the most accurate simulation of the computer-delivered IELTS, combined with the most advanced AI feedback engine on the market." },
    { question: "Can I get my writing checked by a human?", answer: "Yes! While our AI gives instant feedback, Premium members can request detailed reviews from certified former IELTS examiners." },
    { question: "Is there a free trial?", answer: "Absolutely. You can take one full mock test for free and access limited practice materials without entering any credit card details." },
  ];

  return (
    <section className="bg-primary py-24 px-6 md:px-12">
      <MaxWidthWrapper>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">Frequently Asked Questions</h2>
        <Accordion items={questions} />
      </MaxWidthWrapper>
    </section>
  );
};