import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const questions = [
    {
      question: "What is IELTS?",
      answer:
        "The International English Language Testing System (IELTS) is designed to help you work, study or migrate to a country where English is the native language.",
    },
    {
      question: "How does Achieved.test work?",
      answer:
        "We provide mock tests that mimic the real exam environment, instant AI grading, and human feedback to help you improve your band score efficiently.",
    },
    {
      question: "Why choose Achieved.test over others?",
      answer:
        "Our platform offers the most accurate simulation of the computer-delivered IELTS, combined with the most advanced AI feedback engine on the market.",
    },
    {
      question: "Can I get my writing checked by a human?",
      answer:
        "Yes! While our AI gives instant feedback, Premium members can request detailed reviews from certified former IELTS examiners.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Absolutely. You can take one full mock test for free and access limited practice materials without entering any credit card details.",
    },
  ];

  return (
    <section className="bg-primary py-24 px-6 md:px-12">
      <MaxWidthWrapper>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-primary-foreground mb-16">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-primary-foreground/20"
              >
                <AccordionTrigger className="text-primary-foreground hover:no-underline text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-primary-foreground/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
