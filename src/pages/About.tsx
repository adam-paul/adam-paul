
import React from 'react';
import Header from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-background font-mono">
      <Header />
      
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <section id="about" className="mb-20">
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
          
          <section id="contact">
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
        </div>
      </main>
    </div>
  );
};

export default About;
