
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export interface MediaItem {
  type: 'image' | 'video';
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  thumbnail: string;
  images: MediaItem[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, className }) => {
  return (
    <div 
      className={cn(
        "project-card md:w-[350px] w-full md:h-[450px] h-auto p-3 md:mx-4 my-4 cursor-pointer group transition-all duration-300",
        className
      )}
      onClick={() => onClick(project)}
    >
      <div className="flex flex-col h-full overflow-hidden">
        <div className="relative overflow-hidden rounded-sm">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="object-cover w-full h-[220px] transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-steel-800/70 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight size={16} className="text-steel-50" />
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-steel-800 text-lg font-medium tracking-tight">{project.title}</h3>
          <p className="text-steel-600 text-sm mt-1 line-clamp-3">{project.summary}</p>
          <div className="flex flex-wrap gap-1 mt-3">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-steel-100 text-steel-700 rounded-sm">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 bg-steel-100 text-steel-700 rounded-sm">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
