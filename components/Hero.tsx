import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="text-center z-10 px-6 max-w-7xl"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl font-semibold text-apple-blue mb-4"
        >
          Data & AI Engineer Portfolio
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-6"
        >
          Yi-Hsin (Jimmy) Lin
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl text-slate-500 font-medium leading-relaxed md:whitespace-nowrap"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 text-base text-slate-400 max-w-2xl mx-auto"
        >
            Focusing on Generative AI, Urban GIS, and Agent-Based Modeling.
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-slate-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;