import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/20">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg md:text-xl font-medium text-white">{question}</span>
        <span className={cn("p-1 rounded-full transition-colors", isOpen ? "bg-white/20" : "bg-transparent")}>
          {isOpen ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-white" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-300 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Accordion: React.FC<{ items: { question: string; answer: string }[] }> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};