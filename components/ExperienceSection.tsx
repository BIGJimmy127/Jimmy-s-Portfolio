import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, EDUCATION, WORK_EXPERIENCE } from '../constants';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Project } from '../types';

const ExperienceSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="bg-white">
      {/* Overview Section: Education & Work Experience */}
      <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-20"
        >
          {/* Education - Grid Layout for balance */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-10 border-b border-slate-200 pb-4">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                        <span className="text-xs font-bold tracking-widest uppercase text-apple-blue">
                            {edu.period}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.school}</h3>
                    <p className="text-slate-600 font-medium mb-4">{edu.degree}</p>
                    {edu.details && (
                      <div className="mt-auto">
                        {edu.details.map((d, i) => (
                            <p key={i} className="text-sm text-slate-400 leading-relaxed border-t border-slate-200 pt-4">
                                {d}
                            </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience - Full Width Vertical Stack */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-10 border-b border-slate-200 pb-4">Work Experience</h2>
            <div className="grid grid-cols-1 gap-12">
              {WORK_EXPERIENCE.map((job, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group">
                   <div className="md:w-1/4 flex-shrink-0">
                      <span className="inline-block px-3 py-1 bg-slate-100 text-apple-blue font-mono text-sm font-medium rounded-full mb-2">
                        {job.period}
                      </span>
                   </div>
                   <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-apple-blue transition-colors duration-300">{job.company}</h3>
                      <p className="text-md font-semibold text-slate-500 mb-3">{job.role}</p>
                      <p className="text-slate-600 leading-relaxed">{job.description}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
             <div className="max-w-2xl">
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-apple-blue font-semibold tracking-wider uppercase text-sm mb-4 block"
                >
                    Featured Work
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl sm:text-6xl font-bold text-slate-900 tracking-tight"
                >
                  Selected Projects.
                </motion.h2>
             </div>
             <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 max-w-xs text-sm font-medium"
             >
                A collection of technical implementations in Urban AI, Geospatial Analysis, and Strategy.
             </motion.p>
          </div>

          {/* Vertical Stack with Alternating Layouts */}
          <div className="flex flex-col gap-20">
            {PROJECTS.map((project, index) => (
                <ProjectCard 
                    key={project.id}
                    project={project} 
                    index={index} 
                    onOpen={handleOpenModal}
                    featured={true}
                    align={index % 2 === 0 ? 'left' : 'right'}
                />
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default ExperienceSection;