import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

import { MediaItem } from './ProjectCard';

interface PhotoExpandProps {
  images: MediaItem[];
  currentIndex: number;
  onClose: () => void;
  isOpen: boolean;
}

const PhotoExpand: React.FC<PhotoExpandProps> = ({
  images,
  currentIndex,
  onClose,
  isOpen
}) => {
  const [currentImg, setCurrentImg] = useState(currentIndex);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setCurrentImg(currentIndex);
  }, [currentIndex]);

  const handleClose = React.useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  }, [onClose]);
  
  const nextSlide = React.useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e && 'stopPropagation' in e) {
      e.stopPropagation();
    }
    setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = React.useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e && 'stopPropagation' in e) {
      e.stopPropagation();
    }
    setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          handleClose();
        } else if (event.key === 'ArrowRight') {
          nextSlide(event);
        } else if (event.key === 'ArrowLeft') {
          prevSlide(event);
        }
      };
      
      window.addEventListener('keydown', handleKeyDown);
      
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, handleClose, nextSlide, prevSlide]);

  if (!isOpen) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 bg-black/90 z-50 flex items-center justify-center",
        isClosing ? "opacity-0" : "opacity-100",
        "transition-opacity duration-300"
      )}
      onClick={handleClose}
    >
      <div 
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors z-50"
          onClick={handleClose}
        >
          <X size={24} />
        </button>

        <div className="relative w-[90%] h-[90%] flex items-center justify-center">
          {images[currentImg].type === 'image' ? (
            <img 
              src={images[currentImg].url} 
              alt={`Expanded view ${currentImg + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          ) : (
            <video 
              src={images[currentImg].url} 
              controls
              autoPlay
              className="max-w-full max-h-full object-contain"
            />
          )}

          {images.length > 1 && (
            <>
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
                onClick={prevSlide}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
                onClick={nextSlide}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    index === currentImg ? "bg-white" : "bg-white/40"
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImg(index);
                  }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoExpand;