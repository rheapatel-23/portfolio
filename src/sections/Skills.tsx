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
  Award,
  Sparkles,
  Network,
  Eye,
  Flame,
  Boxes,
  Scan,
  Bot,
  Palette,
  Server,
  HardDrive,
  Binary,
  Box,
  Share2,
  Table,
  Calendar,
  Search,
  CheckCircle,
} from 'lucide-react';

interface SkillItem {
  name: string;
  icon: any;
  category: string;
}

const technicalSkills: SkillItem[] = [
  // Languages
  { name: 'Java', icon: Code2, category: 'Languages' },
  { name: 'Python', icon: Terminal, category: 'Languages' },
  { name: 'SQL', icon: Database, category: 'Languages' },

  // AI/ML
  { name: 'Machine Learning', icon: Brain, category: 'AI/ML' },
  { name: 'Deep Learning', icon: Network, category: 'AI/ML' },
  { name: 'Generative AI', icon: Sparkles, category: 'AI/ML' },
  { name: 'NLP', icon: MessageSquare, category: 'AI/ML' },
  { name: 'Computer Vision', icon: Eye, category: 'AI/ML' },
  { name: 'Transformers', icon: Cpu, category: 'AI/ML' },
  { name: 'Multimodal Learning', icon: Layers, category: 'AI/ML' },

  // Libraries/Frameworks
  { name: 'PyTorch', icon: Flame, category: 'Libraries & Frameworks' },
  { name: 'TensorFlow', icon: Boxes, category: 'Libraries & Frameworks' },
  { name: 'OpenCV', icon: Scan, category: 'Libraries & Frameworks' },
  { name: 'Hugging Face', icon: Bot, category: 'Libraries & Frameworks' },

  // Web
  { name: 'HTML', icon: Globe, category: 'Web' },
  { name: 'CSS', icon: Palette, category: 'Web' },
  { name: 'JavaScript', icon: Code2, category: 'Web' },
  { name: 'React', icon: Globe, category: 'Web' },
  { name: 'Node.js', icon: Server, category: 'Web' },

  // Databases
  { name: 'MySQL', icon: Database, category: 'Databases' },
  { name: 'SQLite', icon: HardDrive, category: 'Databases' },

  // Tools
  { name: 'Git', icon: GitBranch, category: 'Tools' },
  { name: 'GitHub', icon: GitBranch, category: 'Tools' },
  { name: 'VS Code', icon: Terminal, category: 'Tools' },

  // Core CS
  { name: 'DSA', icon: Binary, category: 'Core CS' },
  { name: 'OOP', icon: Box, category: 'Core CS' },
  { name: 'DBMS', icon: Table, category: 'Core CS' },
  { name: 'Operating Systems', icon: Cpu, category: 'Core CS' },
  { name: 'Computer Networks', icon: Share2, category: 'Core CS' },
];

const certifications = [
  {
    title: 'Cloud Computing and Distributed Systems',
    issuer: 'NPTEL (IIT Kanpur)',
    period: 'Jan – Mar 2026',
    score: 'Score: 88%',
    badge: 'Elite + Top 5% Performer',
    badgeType: 'gold',
    highlights: ['Cloud Infrastructure', 'Distributed Consensus', 'Virtualization', 'Scalability'],
  },
  {
    title: 'GenAI for Code Generation for Python',
    issuer: 'Edureka (via Coursera)',
    period: 'Oct 2025',
    score: 'Verified Certificate',
    badge: 'Course Certificate',
    badgeType: 'neon',
    highlights: ['Generative AI', 'Python Code LLMs', 'Prompt Engineering', 'AI Assistance'],
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    period: 'Aug 2025',
    score: 'Credential ID',
    badge: 'IBM Verified',
    badgeType: 'cyan',
    highlights: ['AI Core Concepts', 'Neural Networks', 'Ethics in AI', 'Machine Learning'],
  },
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
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
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

  const allCategories = ['All', ...Array.from(new Set(technicalSkills.map((s) => s.category)))];

  const filteredSkills = technicalSkills.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const groupedCategories = Array.from(new Set(filteredSkills.map((s) => s.category)));

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/3 left-0 w-1/4 h-1/2 bg-gradient-to-r from-neon/5 to-transparent pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-0 w-1/4 h-1/2 bg-gradient-to-l from-neon/5 to-transparent pointer-events-none" />

      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`mb-12 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-neon text-sm font-medium tracking-widest uppercase">
              What I Know & Specialize In
            </span>
            <h2 className="mt-2 font-display text-5xl lg:text-6xl text-white tracking-wide">
              TECHNICAL ARSENAL
            </h2>
          </div>

          {/* Interactive Filter Pills & Search Bar */}
          <div
            className={`mb-12 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 max-w-3xl">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-neon text-void shadow-md shadow-neon/20 scale-105'
                      : 'bg-void-light border border-white/10 text-white/70 hover:text-white hover:border-neon/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-void-light border border-white/10 rounded-full text-xs text-white placeholder-white/40 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Technical Skills Display */}
          {groupedCategories.length === 0 ? (
            <div className="text-center py-16 text-white/40">
              No skills found matching "{searchQuery}"
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              {groupedCategories.map((category, catIndex) => {
                const categorySkills = filteredSkills.filter((s) => s.category === category);
                return (
                  <div
                    key={category}
                    className={`p-6 rounded-2xl bg-void-light border border-white/5 hover:border-neon/40 hover:shadow-xl hover:shadow-neon/5 transition-all duration-500 group ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${150 + catIndex * 80}ms` }}
                  >
                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                      <h3 className="text-lg font-semibold text-white group-hover:text-neon transition-colors flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                        {category}
                      </h3>
                      <span className="text-xs font-mono text-white/40 px-2 py-0.5 rounded bg-white/5">
                        {categorySkills.length} {categorySkills.length === 1 ? 'item' : 'items'}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {categorySkills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-sm font-medium transition-all duration-300 cursor-default ${
                            hoveredSkill === skill.name
                              ? 'bg-neon text-void border-neon shadow-md shadow-neon/20 scale-105'
                              : 'bg-void border-white/10 text-white/90 hover:border-neon/60 hover:text-white'
                          }`}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <skill.icon
                            size={15}
                            className={`transition-colors duration-300 ${
                              hoveredSkill === skill.name ? 'text-void' : 'text-neon'
                            }`}
                          />
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Certifications Showcase */}
          <div
            className={`mb-24 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="text-center mb-12">
              <span className="text-neon text-sm font-medium tracking-widest uppercase">
                Verified Credentials
              </span>
              <h3 className="mt-2 font-display text-3xl lg:text-4xl text-white tracking-wide">
                CERTIFICATIONS & LICENSES
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className={`relative p-6 rounded-2xl bg-void-light border border-white/10 hover:border-neon/50 transition-all duration-500 group flex flex-col justify-between hover:shadow-xl hover:shadow-neon/10 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  {/* Top Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center border border-neon/20 group-hover:bg-neon group-hover:text-void transition-colors">
                        <Award size={20} className="text-neon group-hover:text-void transition-colors" />
                      </div>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-semibold border ${
                          cert.badgeType === 'gold'
                            ? 'bg-amber-400/10 text-amber-300 border-amber-400/30'
                            : cert.badgeType === 'cyan'
                            ? 'bg-cyan-400/10 text-cyan-300 border-cyan-400/30'
                            : 'bg-neon/10 text-neon border-neon/30'
                        }`}
                      >
                        {cert.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-neon transition-colors leading-snug">
                      {cert.title}
                    </h4>

                    <div className="text-white/70 text-sm font-medium mb-2 flex items-center gap-1.5">
                      <span className="text-neon font-semibold">{cert.issuer}</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-white/40 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {cert.period}
                      </span>
                      {cert.score && (
                        <span className="px-2 py-0.5 rounded bg-neon/10 text-neon font-semibold border border-neon/20">
                          {cert.score}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Highlights / Skills Covered */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.highlights.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 text-white/60 border border-white/5 flex items-center gap-1"
                        >
                          <CheckCircle size={10} className="text-neon" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <h3 className="text-2xl font-display text-white mb-8 text-center tracking-wide">
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
                  style={{ transitionDelay: `${800 + index * 40}ms` }}
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
