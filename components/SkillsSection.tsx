import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, PERSONAL_TRAITS, getIcon } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-apple-gray relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4"
          >
            Capabilities.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500"
          >
            Technical expertise meets creative problem solving.
          </motion.p>
        </div>

        {/* Personal Traits Grid - Apple "Feature" Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {PERSONAL_TRAITS.map((trait, index) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center justify-center min-h-[240px]"
            >
              <div className="mb-6 p-4 bg-slate-50 rounded-full text-slate-900">
                {getIcon(trait.icon)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{trait.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{trait.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technical Skills - List Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SKILLS.map((skillGroup, idx) => (
                <motion.div 
                    key={skillGroup.category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                >
                    <h3 className="text-lg font-bold text-slate-900 mb-6 pb-2 border-b border-slate-300">
                        {skillGroup.category}
                    </h3>
                    <ul className="space-y-3">
                        {skillGroup.items.map(item => (
                            <li key={item} className="text-slate-600 font-medium flex items-center">
                                <span className="w-1.5 h-1.5 bg-apple-blue rounded-full mr-3"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;