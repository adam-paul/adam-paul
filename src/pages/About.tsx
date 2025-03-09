
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
                I'm a full-stack developer with a background in scientific computing. 
                I focus on creating interesting, scalable, and maintainable applications,
                taking an AI-first approach that wrangles LLM output into useful — and 
                perhaps one day even elegant — code (em dashes mine).
              </p>
              <p>
                I am attempting to create a world in which the breathtaking and terrifying speed 
                of slop can be reconciled with the Universal Aesthetic.
              </p>
            </div>
          </section>
          
          <section id="contact">
            <h2 className="text-xl font-medium text-steel-800 mb-6 tracking-tight">Contact</h2>
            <div className="space-y-4 text-steel-700">
              <p>
                I'm currently available for interesting conversations and project collaboration. 
                If you want to connect, feel free to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a 
                  href="mailto:adam.paul@gauntletai.com" 
                  className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium tracking-wide text-white bg-steel-800 rounded-sm hover:bg-steel-700 transition-colors"
                >
                  Email Me
                </a>
                <a 
                  href="https://x.com/notadampaul" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium tracking-wide text-steel-800 border border-steel-200 rounded-sm hover:bg-steel-50 transition-colors"
                >
                  Xitter
                </a>
                <a 
                  href="https://www.chess.com/member/notadampaul" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium tracking-wide text-steel-800 border border-steel-200 rounded-sm hover:bg-steel-50 transition-colors"
                >
                  Chess.com
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
