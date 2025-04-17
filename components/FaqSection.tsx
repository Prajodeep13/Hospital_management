import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Is Stem Cell Therapy Right For Me?",
    answer: "Stem cell therapy is suitable for many chronic and degenerative conditions. Please consult our doctors at QA Stem Cell Center for a detailed assessment."
  },
  {
    question: "How Long Is The Recovery Process?",
    answer: "Most patients resume normal activities within a few days, although full recovery varies based on the condition being treated."
  },
  {
    question: "How Much Does Stem Cell Therapy Cost In India?",
    answer: "Costs vary based on treatment plans, but QA Stem Cell Center provides transparent pricing and affordable packages for international patients."
  },
  {
    question: "Is Stem Cell Therapy Allowed In India?",
    answer: "Yes, stem cell therapy is allowed under specific guidelines issued by the ICMR and QA Stem Cell Center adheres to all ethical standards."
  },
  {
    question: "What Are The Potential Side Effects?",
    answer: "Side effects are generally mild such as swelling or soreness at the injection site. Serious complications are rare under expert care."
  },
  {
    question: "Which Hospital Is Best For Stem Cell Therapy In India?",
    answer: "QA Stem Cell Center partners with top-tier facilities and specialized stem cell experts to ensure the highest quality care in India."
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#1b3a3f] py-16 px-4 md:px-20 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-300">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-white border border-white rounded-md">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 px-6 text-left hover:bg-cyan-800 transition-all"
              >
                <span className="text-white font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronDown className="text-cyan-300" />
                ) : (
                  <ChevronRight className="text-cyan-300" />
                )}
              </button>

              {openIndex === index && (
                <div className="bg-cyan-900 px-6 py-4 text-sm text-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
