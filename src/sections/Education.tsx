import { useEffect, useRef, useState } from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Engineering',
    field: 'Computer Science Engineering',
    institution: 'Sai Vidya Institute of Technology',
    location: 'Rajankunte, Bengaluru',
    period: '2023 – Present',
    grade: 'CGPA: 9.39 (Till 5th Semester)',
    icon: GraduationCap,
    highlights: ['Data Structures & Algorithms', 'OOP', 'AI/ML', 'Database Management'],
  },
  {
    id: 2,
    degree: 'Class XII (Senior Secondary)',
    field: 'Science (PCMB)',
    institution: 'Kendriya Vidyalaya No. 2 Jalahalli East',
    location: 'Bengaluru',
    period: '2022 – 2023',
    grade: '89.6%',
    icon: School,
    highlights: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
  },
  {
    id: 3,
    degree: 'Class X (Secondary)',
    field: 'General Education',
    institution: 'Kendriya Vidyalaya No. 2 Jalahalli East',
    location: 'Bengaluru',
    period: '2020 – 2021',
    grade: '93.8%',
    icon: BookOpen,
    highlights: ['Science', 'Mathematics', 'English', 'Social Science'],
  },
];

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon/5 to-transparent pointer-events-none" />

      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-neon text-sm font-medium tracking-widest uppercase">
              Academic Journey
            </span>
            <h2 className="mt-2 font-display text-5xl lg:text-6xl text-white tracking-wide">
              EDUCATION
            </h2>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative group transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(edu.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative p-6 lg:p-8 bg-void-light rounded-xl border transition-all duration-500 ${
                    hoveredCard === edu.id
                      ? 'border-neon/50 shadow-neon/20'
                      : 'border-white/5'
                  }`}
                >
                  {/* Circuit Pattern Overlay */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-xl`}
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern
                          id={`circuit-${edu.id}`}
                          x="0"
                          y="0"
                          width="40"
                          height="40"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M0 20 H20 V0 M20 20 H40 M20 20 V40"
                            fill="none"
                            stroke="rgba(212, 255, 0, 0.1)"
                            strokeWidth="1"
                          />
                          <circle cx="20" cy="20" r="2" fill="rgba(212, 255, 0, 0.2)" />
                        </pattern>
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        fill={`url(#circuit-${edu.id})`}
                      />
                    </svg>
                  </div>

                  <div className="relative flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-xl bg-neon/10 flex items-center justify-center transition-all duration-300 ${
                        hoveredCard === edu.id ? 'bg-neon/20 scale-110' : ''
                      }`}
                    >
                      <edu.icon
                        size={28}
                        className={`transition-colors duration-300 ${
                          hoveredCard === edu.id ? 'text-neon' : 'text-neon/70'
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl lg:text-2xl font-semibold text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-neon">{edu.field}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 bg-neon/10 text-neon text-sm rounded-full">
                            {edu.period}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col lg:flex-row lg:items-center gap-2 mb-4 text-white/60">
                        <span>{edu.institution}</span>
                        <span className="hidden lg:inline text-white/30">•</span>
                        <span>{edu.location}</span>
                      </div>

                      {/* Grade */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg mb-4">
                        <span className="text-white/50 text-sm">Grade:</span>
                        <span className="text-neon font-semibold">{edu.grade}</span>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 text-xs text-white/50 bg-white/5 rounded-full border border-white/5"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
