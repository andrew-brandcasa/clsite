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
      {overlay && <div className="hero-overlay absolute inset-0" />}
      
      <div className="relative z-10 text-center text-white container-custom">
        {subtitle && (
          <p className="hero-subtitle mb-4 text-white">{subtitle}</p>
        )}
        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl mb-8 text-shadow">{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Hero;