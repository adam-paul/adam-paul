
import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-6 py-4 bg-background/80 backdrop-blur-sm",
      className
    )}>
      <div className="font-mono text-lg font-medium tracking-tight text-steel-800">
        John Doe
      </div>
      <nav className="flex space-x-6">
        <a href="#projects" className="text-steel-600 hover:text-steel-900 text-sm transition-colors">Projects</a>
        <a href="#about" className="text-steel-600 hover:text-steel-900 text-sm transition-colors">About</a>
        <a href="#contact" className="text-steel-600 hover:text-steel-900 text-sm transition-colors">Contact</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-steel-600 hover:text-steel-900 text-sm transition-colors">GitHub</a>
      </nav>
    </header>
  );
};

export default Header;
