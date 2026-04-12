import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <motion.a
        href="tel:+918282895500"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg shadow-gray-500/30 hover:bg-black transition-colors"
        aria-label="Call Us"
      >
        <Phone className="w-5 h-5 fill-current" />
      </motion.a>

      {/* WhatsApp Button Component */}
      <motion.a
        href="https://wa.me/916290381799"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 animate-pulse-hover relative"
        aria-label="WhatsApp Us"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="z-10"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </motion.a>
    </div>
  );
}
