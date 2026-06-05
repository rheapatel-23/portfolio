import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/50 via-transparent to-void" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Name Title */}
        <h1
          ref={titleRef}
          className={`font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-wider transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block hover:text-neon transition-colors duration-300 cursor-default">
            R
          </span>
          <span className="inline-block hover:text-neon transition-colors duration-300 cursor-default">
            H
          </span>
          <span className="inline-block hover:text-neon transition-colors duration-300 cursor-default">
            E
          </span>
          <span className="inline-block hover:text-neon transition-colors duration-300 cursor-default">
            A
          </span>
          <span className="mx-2 md:mx-4" />
          <span className="inline-block hover:text-neon transition-colors duration-300 cursor-default">
            P
          </span>
          <span className="inline-block hover:text-neon transition-colors duration-300 cursor-default">
            A
          </span>
          <span className="inline-block hover:text-neon transition-colors duration-300 cursor-default">
            T
          </span>
          <span className="inline-block hover:text-neon transition-colors duration-300 cursor-default">
            E
          </span>
          <span className="inline-block hover:text-neon transition-colors duration-300 cursor-default">
            L
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-4 text-lg sm:text-xl md:text-2xl text-white/80 font-light tracking-wide transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Computer Science Engineer <span className="text-neon">&</span> AI Innovator
        </p>

        {/* Description */}
        <p
          className={`mt-6 text-sm sm:text-base text-white/60 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Building the future with code, algorithms, and intelligent systems.
          Passionate about AI, deep learning, and creating impactful solutions.
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            onClick={scrollToAbout}
            className="group relative px-8 py-3 bg-neon text-void font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-neon-lg"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 border border-white/30 text-white rounded-full hover:border-neon hover:text-neon transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div
          className={`mt-12 flex items-center justify-center gap-6 transition-all duration-1000 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://github.com/rheapatel-23"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/20 text-white/60 hover:border-neon hover:text-neon hover:shadow-neon transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rhea-patel-460a1b378"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/20 text-white/60 hover:border-neon hover:text-neon hover:shadow-neon transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:rheapatel2307@gmail.com"
            className="p-3 rounded-full border border-white/20 text-white/60 hover:border-neon hover:text-neon hover:shadow-neon transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-neon transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>

      {/* Side Decorative Lines */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 z-10">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-neon/50 to-transparent" />
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 z-10">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-neon/50 to-transparent" />
      </div>
    </section>
  );
}
