import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const faqs = [
    {
      question: "Are food charges included in the rent?",
      answer: "Yes, our Double Sharing and standard Single Bed plans include delicious, hygienic home-cooked meals (Breakfast, Dinner, and Evening Snacks). We also offer an economy plan without food if you prefer."
    },
    {
      question: "What is the security deposit?",
      answer: "We require a standard refundable security deposit at the time of admission, which is equivalent to one month's setup charge. It is fully refunded upon leaving, provided a 30-day notice is given."
    },
    {
      question: "Is there a lock-in period?",
      answer: "No, we do not have a strict long-term lock-in period, but we do require a standard 30-day notice before vacating the PG to ensure a smooth transition and full deposit refund."
    },
    {
      question: "Are there any hidden electricity or water charges?",
      answer: "No, standard electricity, high-speed WiFi, and 24/7 water supply are fully included in all our plans. However, dedicated AC usage might have sub-meter scaling depending on your specific AC room agreement."
    },
    {
      question: "Are visitors allowed?",
      answer: "For security reasons, male and female visitors are restricted from entering private living quarters. However, family members can visit and utilize the common lounge area after checking in with the management."
    }
  ];

  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 px-4 md:px-6 bg-white overflow-hidden border-t border-gray-100 pb-12">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Got Questions?</h2>
          <h3 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
          <p className="text-gray-600 text-lg">Find quick answers to common queries about living at Meridian Homestay.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-gray-200 rounded-2xl overflow-hidden bg-zinc-50 hover:border-blue-300 transition-colors"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFaq(idx)}
              >
                <span className="font-heading font-semibold text-lg text-gray-900 pr-8">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openIdx === idx ? 'bg-blue-600 text-white rotate-180' : 'bg-blue-100 text-blue-600'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
