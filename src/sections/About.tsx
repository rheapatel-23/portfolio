import { useEffect, useRef, useState } from 'react';
import { Award, Lightbulb, BookOpen } from 'lucide-react';

const stats = [
  { value: '9.39', label: 'CGPA', icon: Award },
  { value: '1', label: 'Published Patent', icon: Lightbulb },
  { value: '2', label: 'IEEE Paper Acceptances', icon: BookOpen },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-neon text-sm font-medium tracking-widest uppercase">
              Who I Am
            </span>
            <h2 className="mt-2 font-display text-5xl lg:text-6xl text-white tracking-wide">
              ABOUT ME
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Column */}
            <div
              className={`relative transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                {/* Image Frame */}
                <div className="absolute inset-0 border-2 border-neon/30 rounded-lg transform translate-x-4 translate-y-4" />
                
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-lg bg-void-light animate-float">
                  <img
                    src="/rhea_patel.jpeg"
                    alt="Rhea Patel"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
                </div>

                {/* Floating Stats */}
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`absolute bg-void-light/90 backdrop-blur-sm border border-white/10 rounded-lg p-3 shadow-xl transition-all duration-500 hover:border-neon/50 hover:shadow-neon/20 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{
                      transitionDelay: `${400 + index * 100}ms`,
                      ...(index === 0 && { top: '10%', right: '-20px' }),
                      ...(index === 1 && { bottom: '10%', right: '10%' }),
                      ...(index === 2 && { bottom: '40%', left: '-30px' }),
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <stat.icon size={16} className="text-neon" />
                      <div>
                        <div className="font-display text-2xl text-white leading-none">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/50">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Text Column */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed">
                  I am a{' '}
                  <span className="text-neon font-medium">
                    Computer Science Engineering student
                  </span>{' '}
                  with a passion for AI and system design. My approach combines
                  rigorous algorithmic thinking with creative problem-solving.
                </p>

                <p className="text-white/60 leading-relaxed">
                  With strong fundamentals in Data Structures, Algorithms, and
                  Object-Oriented Programming, I have hands-on experience with
                  Python and Java through academic projects and coding practice.
                  I am familiar with Git, GitHub, and VS Code.
                </p>

                <p className="text-white/60 leading-relaxed">
                  My journey in tech has led me to explore Artificial Intelligence
                  and Natural Language Processing, where I have developed projects
                  ranging from deepfake detection systems to inclusive AI learning
                  platforms. I am a detail-oriented and adaptable individual
                  seeking opportunities to apply my technical skills and contribute
                  to team success.
                </p>

                {/* Quick Info */}
                <div className="pt-6 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-void-light rounded-lg border border-white/5">
                    <div className="text-neon text-sm font-medium mb-1">Location</div>
                    <div className="text-white">Bengaluru, India</div>
                  </div>
                  <div className="p-4 bg-void-light rounded-lg border border-white/5">
                    <div className="text-neon text-sm font-medium mb-1">Education</div>
                    <div className="text-white">B.E. CSE (Pursuing)</div>
                  </div>
                  <div className="p-4 bg-void-light rounded-lg border border-white/5">
                    <div className="text-neon text-sm font-medium mb-1">Interest</div>
                    <div className="text-white">AI / ML / NLP</div>
                  </div>
                  <div className="p-4 bg-void-light rounded-lg border border-white/5">
                    <div className="text-neon text-sm font-medium mb-1">Email</div>
                    <div className="text-white text-sm">rheapatel2307@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
