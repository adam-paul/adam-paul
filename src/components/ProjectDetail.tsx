
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import type { Project } from './ProjectCard';
import { cn } from '@/lib/utils';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
  isOpen: boolean;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose, isOpen }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  if (!isOpen) return null;

  return (
    <div 
      className={cn(
        "project-expanded-overlay",
        isClosing ? "opacity-0" : "opacity-100"
      )}
      onClick={handleClose}
    >
      <div 
        className="max-w-6xl mx-auto p-6 md:p-10 h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-steel-100 hover:bg-steel-200 transition-colors text-steel-800 z-50"
          onClick={handleClose}
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          {/* Slideshow on left (top in mobile) */}
          <div className="md:w-1/2 w-full">
            <div className="relative aspect-video bg-steel-100 rounded-sm overflow-hidden">
              <img 
                src={project.images[currentSlide]} 
                alt={`${project.title} - slide ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-steel-800/50 hover:bg-steel-800/70 transition-colors text-white"
                    onClick={prevSlide}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-steel-800/50 hover:bg-steel-800/70 transition-colors text-white"
                    onClick={nextSlide}
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-colors",
                        index === currentSlide ? "bg-white" : "bg-white/40"
                      )}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlide(index);
                      }}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Description/info on right (bottom in mobile) */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl font-medium text-steel-900 tracking-tight">{project.title}</h2>
            
            <div className="mt-3 flex flex-wrap gap-1">
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-steel-100 text-steel-700 rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mt-6 space-y-4 text-steel-700">
              <p>{project.description}</p>
            </div>
            
            <div className="mt-8 flex space-x-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 border border-steel-200 rounded-sm hover:bg-steel-50 transition-colors text-steel-800"
                >
                  <Github size={18} />
                  <span>Repository</span>
                </a>
              )}
              
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-steel-800 text-white rounded-sm hover:bg-steel-700 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
