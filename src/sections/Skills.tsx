import { useEffect, useRef, useState } from 'react';
import {
  Code2,
  Globe,
  Database,
  GitBranch,
  Brain,
  Terminal,
  Cpu,
  Layers,
  MessageSquare,
  Users,
  Zap,
  Target,
  Lightbulb,
  Puzzle,
  Linkedin,
} from 'lucide-react';

const technicalSkills = [
  { name: 'Python', icon: Terminal, category: 'Programming' },
  { name: 'Java', icon: Code2, category: 'Programming' },
  { name: 'HTML/CSS', icon: Globe, category: 'Web' },
  { name: 'JavaScript', icon: Code2, category: 'Web' },
  { name: 'Data Structures', icon: Database, category: 'Core' },
  { name: 'Algorithms', icon: Cpu, category: 'Core' },
  { name: 'OOP', icon: Layers, category: 'Core' },
  { name: 'Git', icon: GitBranch, category: 'Tools' },
  { name: 'GitHub', icon: GitBranch, category: 'Tools' },
  { name: 'VS Code', icon: Terminal, category: 'Tools' },
  { name: 'AI/ML', icon: Brain, category: 'Domain' },
  { name: 'NLP', icon: MessageSquare, category: 'Domain' },
];

const professionalSkills = [
  { name: 'Communication', icon: MessageSquare },
  { name: 'Team Collaboration', icon: Users },
  { name: 'Quick Learner', icon: Zap },
  { name: 'Leadership', icon: Target },
  { name: 'Problem Solving', icon: Puzzle },
  { name: 'Analytical Thinking', icon: Lightbulb },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [...new Set(technicalSkills.map((s) => s.category))];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-1/4 h-1/2 bg-gradient-to-r from-neon/5 to-transparent pointer-events-none -translate-y-1/2" />

      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`mb-16 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-neon text-sm font-medium tracking-widest uppercase">
              What I Know
            </span>
            <h2 className="mt-2 font-display text-5xl lg:text-6xl text-white tracking-wide">
              TECHNICAL ARSENAL
            </h2>
          </div>

          {/* Technical Skills by Category */}
          <div className="mb-20">
            {categories.map((category, catIndex) => (
              <div
                key={category}
                className={`mb-10 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + catIndex * 100}ms` }}
              >
                <h3 className="text-lg font-medium text-white/50 mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-neon/50" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {technicalSkills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <div
                        key={skill.name}
                        className={`group relative transition-all duration-500 ${
                          isVisible
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-90'
                        }`}
                        style={{
                          transitionDelay: `${300 + catIndex * 100 + index * 50}ms`,
                        }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div
                          className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 cursor-default ${
                            hoveredSkill === skill.name
                              ? 'bg-neon border-neon text-void'
                              : 'bg-void-light border-white/10 text-white hover:border-neon/50'
                          }`}
                        >
                          <skill.icon
                            size={18}
                            className={`transition-colors duration-300 ${
                              hoveredSkill === skill.name
                                ? 'text-void'
                                : 'text-neon'
                            }`}
                          />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Professional Skills */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <h3 className="text-2xl font-display text-white mb-8 text-center">
              PROFESSIONAL SKILLS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {professionalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group p-4 bg-void-light rounded-xl border border-white/5 text-center transition-all duration-500 hover:border-neon/50 hover:bg-neon/5 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${700 + index * 50}ms` }}
                >
                  <skill.icon
                    size={24}
                    className="mx-auto mb-3 text-neon/70 group-hover:text-neon transition-colors"
                  />
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div
            className={`mt-12 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            <span className="text-white/40 text-sm">Active on</span>
            <div className="mt-3 flex items-center justify-center gap-6">
              <a
                href="https://github.com/rheapatel-23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-void-light rounded-lg border border-white/10 text-white/60 hover:text-neon hover:border-neon/50 transition-all"
              >
                <GitBranch size={16} />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rhea-patel-460a1b378"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-void-light rounded-lg border border-white/10 text-white/60 hover:text-neon hover:border-neon/50 transition-all"
              >
                <Linkedin size={16} />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
