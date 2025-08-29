import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "../ui/card";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to get my LifeMap360™ results?",
      answer:
        "After we receive your sample, it typically takes 3-4 weeks to complete the analysis and generate your comprehensive report.",
    },
    {
      question: "Is my genetic data secure and private?",
      answer:
        "Absolutely. We use bank-level encryption and never sell or share your data with third parties. You own your data and can request deletion at any time.",
    },
    {
      question: "Do I need to be in perfect health to start?",
      answer:
        "Not at all! Our programs are designed for people at any stage of their health journey. We'll meet you where you are and help you optimize from there.",
    },
    {
      question:
        "What makes Mendiv different from other genetic testing companies?",
      answer:
        "We go beyond just genetic testing to include epigenetic analysis, lifestyle factors, and provide actionable coaching to help you implement changes.",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-transparent text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Card
                key={index}
                className="glass border-card-border cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex items-center justify-between p-6">
                  <h3 className="font-heading font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`text-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown content with smooth transition */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-40 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-foreground-muted">{faq.answer}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
