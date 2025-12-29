import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const NavBar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Overview", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const yOffset = -80; // Offset for fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      <div className="bg-white/70 backdrop-blur-xl border border-white/20 shadow-sm rounded-full px-6 py-3 flex items-center space-x-6 sm:space-x-8">
        <span 
          className="font-semibold text-sm sm:text-base tracking-tight text-slate-900 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Jimmy Lin
        </span>
        <div className="h-4 w-px bg-slate-300 hidden sm:block"></div>
        <div className="flex space-x-4 sm:space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;