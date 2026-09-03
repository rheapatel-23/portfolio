import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Trophy, ArrowRight, Award, FileText, GraduationCap } from 'lucide-react';

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

  const scrollToAchievements = () => {
    const achievementsSection = document.querySelector('#achievements');
    if (achievementsSection) {
      achievementsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-neon/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-2/3 left-1/4 w-[400px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-amber-400/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-void" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon/40 rounded-full animate-float"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              animationDelay: `${(i * 0.4) % 4}s`,
              animationDuration: `${3 + ((i * 0.7) % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Highlight Badge: Best Paper Award Winner */}
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-6 scale-95'
          }`}
        >
          <button
            onClick={scrollToAchievements}
            className="group relative inline-flex items-center gap-2.5 px-5 py-2 mb-8 rounded-full bg-void-light/90 border border-neon/40 backdrop-blur-xl shadow-xl shadow-neon/10 hover:border-neon hover:shadow-neon/25 transition-all duration-300 cursor-pointer"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon/50 via-cyan-400/30 to-amber-300/50 rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-2.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-neon/20 text-neon group-hover:scale-110 transition-transform">
                <Trophy size={13} className="text-neon" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-neon transition-colors tracking-wide">
                🏆 Best Paper Award Winner & Presenting Author @ IEEE ICDSCNC 2026
              </span>
              <span className="text-neon text-xs font-mono group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </button>
        </div>

        {/* Name Title with Modern Glow & Stagger */}
        <h1
          ref={titleRef}
          className={`font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-wider transition-all duration-1000 delay-150 select-none ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {['R', 'H', 'E', 'A'].map((char, index) => (
            <span
              key={index}
              className="inline-block hover:text-neon hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {char}
            </span>
          ))}
          <span className="mx-2 md:mx-4" />
          {['P', 'A', 'T', 'E', 'L'].map((char, index) => (
            <span
              key={index}
              className="inline-block hover:text-neon hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <div
          className={`mt-4 flex items-center justify-center flex-wrap gap-2 text-lg sm:text-xl md:text-2xl text-white/90 font-light tracking-wide transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span>Computer Science Engineer</span>
          <span className="text-neon font-mono font-bold">&bull;</span>
          <span className="text-neon font-medium">AI & Deep Learning Researcher</span>
          <span className="text-neon font-mono font-bold">&bull;</span>
          <span>7th Sem CSE (9.35 CGPA)</span>
        </div>

        {/* Highlight Pills Row */}
        <div
          className={`mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-1.5 px-3 py-1 bg-void-light/80 border border-white/10 rounded-full text-xs text-white/70 backdrop-blur-sm">
            <GraduationCap size={13} className="text-neon" />
            <span>Sai Vidya Institute of Technology</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-void-light/80 border border-white/10 rounded-full text-xs text-white/70 backdrop-blur-sm">
            <FileText size={13} className="text-neon" />
            <span>1 Published Patent</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-void-light/80 border border-white/10 rounded-full text-xs text-white/70 backdrop-blur-sm">
            <Award size={13} className="text-amber-400" />
            <span>NPTEL Elite + Top 5% Performer</span>
          </div>
        </div>

        {/* Description */}
        <p
          className={`mt-6 text-sm sm:text-base text-white/60 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Building robust multimodal intelligent systems and scalable software.
          Pioneering spatio-temporal deepfake detection architectures with CNNs, Transformers, and BiLSTMs.
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            onClick={scrollToAchievements}
            className="group relative px-8 py-3.5 bg-neon text-void font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-neon-lg flex items-center gap-2"
          >
            <span className="relative z-10">View Award-Winning Research</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 border border-white/20 text-white rounded-full hover:border-neon hover:text-neon hover:bg-neon/5 transition-all duration-300 font-medium"
          >
            Explore Projects
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
            className="p-3 rounded-full border border-white/10 bg-void-light/50 text-white/70 hover:border-neon hover:text-neon hover:shadow-neon hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/rhea-patel-460a1b378"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 bg-void-light/50 text-white/70 hover:border-neon hover:text-neon hover:shadow-neon hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={19} />
          </a>
          <a
            href="mailto:rheapatel2307@gmail.com"
            className="p-3 rounded-full border border-white/10 bg-void-light/50 text-white/70 hover:border-neon hover:text-neon hover:shadow-neon hover:scale-110 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={19} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-neon transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </button>
      </div>

      {/* Side Decorative Lines */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 z-10">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-neon/50 to-transparent" />
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 z-10">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-neon/50 to-transparent" />
      </div>
    </section>
  );
}
