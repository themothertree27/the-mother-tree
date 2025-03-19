
import React, { useEffect, useRef } from 'react';
import { TreeDeciduous, Leaf, Cloud } from 'lucide-react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrollTop * 0.4}px)`;
      }
    };
    
    // Animation for elements entering the view
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.animate-scroll-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.8) {
          element.classList.add('in-view');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Trigger once on load
    handleScrollAnimation();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden pt-20">
      {/* Decorative elements (background) */}
      <div 
        ref={parallaxRef} 
        className="absolute inset-0 z-0 opacity-10"
      >
        <Cloud className="absolute text-nature-sky top-1/4 left-1/4 h-64 w-64 animate-float" style={{ animationDelay: '0s' }}/>
        <Cloud className="absolute text-nature-sky top-1/3 right-1/4 h-40 w-40 animate-float" style={{ animationDelay: '1s' }}/>
        <Leaf className="absolute text-nature-leaf bottom-1/4 left-1/3 h-32 w-32 animate-float" style={{ animationDelay: '2s' }}/>
        <Leaf className="absolute text-nature-leaf top-1/2 right-1/3 h-24 w-24 animate-float" style={{ animationDelay: '3s' }}/>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center relative z-10">
        <div ref={elementsRef} className="stagger-animation max-w-4xl">
          <div className="inline-flex items-center justify-center rounded-full bg-nature-leaf/10 px-3 py-1 text-sm font-medium text-nature-leaf mb-6">
            <span>Nature's Membership Community</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight mb-6">
            Join <span className="text-nature-leaf">The Mother Tree</span> Community
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Connect with a thriving community rooted in nature, sustainability, and conscious growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#membership"
              className="px-8 py-4 rounded-full bg-nature-leaf text-white font-medium button-effect transform transition duration-300 hover:shadow-xl hover:scale-105"
            >
              Explore Memberships
            </a>
            
            <a
              href="#about"
              className="px-8 py-4 rounded-full border border-gray-200 hover:border-nature-leaf hover:text-nature-leaf transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center items-start p-1">
            <div className="w-1 h-2 bg-gray-300 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
