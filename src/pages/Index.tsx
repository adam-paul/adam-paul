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
          <h2 className="text-xl font-medium text-steel-800 mb-8 tracking-tight">Projects</h2>
          
          <div className="project-scroll-container md:pb-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleProjectClick}
              />
            ))}
          </div>

          <div className="text-center font-mono text-steel-800 mt-16 mb-8 tracking-tight">
            Now they are many, but of one body.
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
