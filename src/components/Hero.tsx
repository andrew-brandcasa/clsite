import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  height?: 'small' | 'medium' | 'large';
  overlay?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg",
  children,
  height = 'medium',
  overlay = true 
}) => {
  const heightClasses = {
    small: 'h-64',
    medium: 'h-96',
    large: 'h-screen'
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center`}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {overlay && <div className="absolute inset-0 bg-black bg-opacity-40" />}
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-serif mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 text-gray-200">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Hero;