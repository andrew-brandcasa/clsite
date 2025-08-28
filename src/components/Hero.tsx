import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  height?: 'small' | 'medium' | 'large' | 'full';
  overlay?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg",
  children,
  height = 'full',
  overlay = true 
}) => {
  const heightClasses = {
    small: 'h-64',
    medium: 'h-96',
    large: 'h-screen',
    full: 'h-screen-hero'
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center`}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {overlay && <div className="absolute inset-0 bg-black bg-opacity-40" />}
      
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        {subtitle && (
          <p className="hero-subtitle mb-4 text-gray-200">{subtitle}</p>
        )}
        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl mb-8">{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Hero;