import React, { useState } from 'react';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import ProjectDetail from '@/components/ProjectDetail';
import type { Project } from '@/components/ProjectCard';
import projects from '@/data/projects';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    // We keep the selected project in state to allow for exit animations
    // It will be cleaned up when the animation is complete in the ProjectDetail component
  };

  return (
    <div className="min-h-screen bg-background font-mono">
      <Header />
      
      <main className="pt-24 px-6 pb-16">
        <section id="projects" className="max-w-7xl mx-auto">
          <h2 className="text-xl font-medium text-steel-800 mb-8 tracking-tight">Featured Projects</h2>
          
          <div className="project-scroll-container md:pb-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleProjectClick}
              />
            ))}
          </div>
        </section>
        
        <section id="about" className="max-w-3xl mx-auto mt-32">
          <h2 className="text-xl font-medium text-steel-800 mb-6 tracking-tight">About</h2>
          <div className="space-y-4 text-steel-700">
            <p>
              I'm a full-stack developer specializing in building exceptional digital experiences. 
              With a focus on creating scalable, maintainable, and user-centered applications, 
              I combine technical expertise with a keen eye for design.
            </p>
            <p>
              My background spans web development, distributed systems, machine learning, and 
              blockchain technologies. I'm passionate about open-source contributions and 
              solving complex problems with elegant solutions.
            </p>
          </div>
        </section>
        
        <section id="contact" className="max-w-3xl mx-auto mt-32">
          <h2 className="text-xl font-medium text-steel-800 mb-6 tracking-tight">Contact</h2>
          <div className="space-y-4 text-steel-700">
            <p>
              I'm currently available for freelance work and interesting project collaborations. 
              If you have a project that needs some attention or just want to connect, feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a 
                href="mailto:hello@example.com" 
                className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium tracking-wide text-white bg-steel-800 rounded-sm hover:bg-steel-700 transition-colors"
              >
                Email Me
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium tracking-wide text-steel-800 border border-steel-200 rounded-sm hover:bg-steel-50 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={handleCloseDetail}
          isOpen={isDetailOpen}
        />
      )}
    </div>
  );
};

export default Index;
