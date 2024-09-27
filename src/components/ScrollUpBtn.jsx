import React, { useState, useEffect } from 'react';
import '../styles/components/ScrollUpBtn.scss';
import { ChevronUp } from 'lucide-react';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button type='button' onClick={scrollToTop} className="scroll-up-button">
          <ChevronUp />
        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;
