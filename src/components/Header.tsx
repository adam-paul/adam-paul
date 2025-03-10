
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const location = useLocation();
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-6 py-4 bg-background/80 backdrop-blur-sm",
      className
    )}>
      <Link to="/" className="font-mono text-lg font-medium tracking-tight text-steel-800">
        ¬Adam Paul
      </Link>
      <nav className="flex space-x-6">
        <Link 
          to="/" 
          className={cn(
            "text-steel-600 hover:text-steel-900 text-sm transition-colors",
            location.pathname === "/" && "text-steel-900"
          )}
        >
          Projects
        </Link>
        <Link 
          to="/about" 
          className={cn(
            "text-steel-600 hover:text-steel-900 text-sm transition-colors",
            location.pathname === "/about" && "text-steel-900"
          )}
        >
          About
        </Link>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-steel-600 hover:text-steel-900 text-sm transition-colors"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
};

export default Header;
