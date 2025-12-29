import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    position: 'absolute' as const
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    position: 'absolute' as const
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    position: 'absolute' as const
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Determine which images to show
  const images = project?.gallery && project.gallery.length > 0
    ? project.gallery
    : (project?.image ? [project.image] : []);

  // Optimized preloading: only preload next and previous images
  useEffect(() => {
    if (images.length > 1) {
      const nextIndex = (currentImageIndex + 1) % images.length;
      const prevIndex = (currentImageIndex - 1 + images.length) % images.length;

      const preloadImage = (src: string) => {
        const img = new Image();
        img.src = src;
      };

      preloadImage(images[nextIndex]);
      preloadImage(images[prevIndex]);
    }
  }, [currentImageIndex, images]);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setDirection(0);
    }
  }, [isOpen, project]);

  if (!project) return null;

  const hasMultipleImages = images.length > 1;

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentImageIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row h-[85vh] lg:h-[80vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Image Carousel */}
            <div className="w-full lg:w-3/5 relative bg-slate-100 overflow-hidden group h-64 sm:h-80 lg:h-full flex-shrink-0">
              {images.length > 0 ? (
                <>
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={currentImageIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      className="absolute inset-0 w-full h-full"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                          paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                          paginate(-1);
                        }
                      }}
                    >
                      {/* Main Image (Fully contained/visible) */}
                      <img
                        src={images[currentImageIndex]}
                        alt={project.title}
                        className="w-full h-full object-contain"
                        draggable={false}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={() => paginate(-1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => paginate(1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      {/* Dots Indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                        {images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setDirection(idx > currentImageIndex ? 1 : -1);
                              setCurrentImageIndex(idx);
                            }}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-slate-800 w-4' : 'bg-slate-400/60 hover:bg-slate-600'
                              }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  No Images Available
                </div>
              )}
            </div>

            {/* Right Column: Content */}
            <div className="w-full lg:w-2/5 p-8 overflow-y-auto custom-scrollbar bg-white flex flex-col">

              <div className="mb-6">
                <span className="inline-block px-3 py-1 mb-3 bg-apple-blue/10 text-apple-blue text-xs font-bold tracking-widest uppercase rounded-full">
                  {project.category}
                </span>
                <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                  {project.title}
                </h2>
              </div>

              <div className="flex flex-col gap-4 mb-8 border-b border-slate-100 pb-8">
                <div>
                  <span className="block text-xs text-slate-400 font-bold uppercase tracking-wide mb-1">Role</span>
                  <span className="text-base font-medium text-slate-900">{project.role}</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-bold uppercase tracking-wide mb-1">Timeline</span>
                  <span className="text-base font-medium text-slate-900">{project.period}</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Project Overview</h3>
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Key Highlights</h3>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-3 text-apple-blue mt-1.5 text-lg">•</span>
                      <span className="text-slate-600 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.techStack && (
                <div className="mt-auto">
                  <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;