import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
  featured?: boolean;
  align?: 'left' | 'right';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onOpen,
  featured = false,
  align = 'left'
}) => {
  const isRightAligned = align === 'right';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={() => onOpen(project)}
      className={`
        group relative flex bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer will-change-transform
        ${featured ? 'flex-col lg:flex-row h-auto lg:min-h-[550px]' : 'flex-col h-full'}
      `}
    >
      {/* Preview Image Section */}
      {project.image && (
        <div className={`
          relative overflow-hidden bg-slate-50 order-1 flex items-center justify-center
          ${featured ? 'w-full lg:w-3/5 h-72 lg:h-full' : 'w-full h-72'}
          ${featured && isRightAligned ? 'lg:order-2' : 'lg:order-1'}
        `}>
          {/* Main Image */}
          <img
            src={project.image}
            alt={project.title}
            className={`
              relative w-full max-h-[500px] object-contain z-10 transition-transform duration-500 group-hover:scale-105
              ${featured ? 'p-8 lg:p-12' : 'p-6'}
            `}
            loading="lazy"
            decoding="async"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
        </div>
      )}

      {/* Content Section */}
      <div className={`
        flex flex-col relative bg-white z-30 order-2
        ${featured ? 'w-full lg:w-2/5 p-8 lg:p-10 justify-center' : 'flex-grow p-8 sm:p-10'}
        ${featured && isRightAligned ? 'lg:order-1' : 'lg:order-2'}
      `}>
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold tracking-widest uppercase text-apple-blue bg-apple-blue/5 px-3 py-1 rounded-full">
            {project.category}
          </span>
          {!featured && (
            <span className="text-xs text-slate-400 font-medium">
              {project.period}
            </span>
          )}
        </div>

        <h3 className={`
          font-bold text-slate-900 mb-2 group-hover:text-apple-blue transition-colors duration-300
          ${featured ? 'text-2xl lg:text-3xl' : 'text-2xl sm:text-3xl'}
        `}>
          {project.title}
        </h3>

        <p className="text-sm font-semibold text-slate-500 mb-6">{project.role}</p>

        <p className={`
          text-slate-600 leading-relaxed mb-6
          ${featured ? 'text-base lg:text-lg' : 'text-base flex-grow'}
        `}>
          {project.description}
        </p>

        <div className="space-y-3 mb-8">
          {project.highlights.slice(0, featured ? 3 : 2).map((highlight, idx) => (
            <div key={idx} className="flex items-start">
              <span className="mr-2 text-apple-blue mt-1.5 text-[10px]">•</span>
              <span className="text-slate-500 text-sm">{highlight}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-slate-100">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack?.slice(0, featured ? 5 : 3).map((tech) => (
              <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                {tech}
              </span>
            ))}
            {project.techStack && project.techStack.length > (featured ? 5 : 3) && (
              <span className="px-3 py-1 bg-slate-50 text-slate-400 text-xs font-medium rounded-full">...</span>
            )}
          </div>

          <button
            className="flex items-center text-sm font-semibold text-slate-900 group-hover:text-apple-blue transition-colors outline-none focus:outline-none"
          >
            View Case Study <ArrowUpRight className="ml-1 w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;