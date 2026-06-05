import { useEffect, useRef, useState } from 'react';
import { Trophy, FileText, Award, Star, Calendar, Hash, BookOpen } from 'lucide-react';

const achievements = [
  {
    id: 1,
    type: 'patent',
    title: 'Adaptive Hybrid Spatio-Temporal Learning System',
    subtitle: 'For Deepfake Content Detection',
    description:
      'Developed hybrid AI framework combining visual and audio feature analysis for deepfake detection. The system uses advanced LSTM and Transformer architectures to analyze both spatial and temporal features in multimedia content.',
    date: '05 Dec 2025',
    number: '202541112604',
    icon: FileText,
    highlight: true,
  },
  {
    id: 2,
    type: 'paper',
    title: 'Accepted Paper – IEEE AISIIS 2026',
    subtitle: 'Hyb-Detect: A Hybrid CNN–Transformer–LSTM Framework for Robust Multimodal Deepfake Detection',
    description:
      'Accepted at the IEEE International Conference on AI and Security for Industrial IoT Systems (AISIIS 2026), Hyderabad, India. Proposed a multimodal deepfake detection framework using cross-modal fusion of audio and visual representations for robust forgery detection.',
    date: '2026',
    icon: BookOpen,
    highlight: false,
  },
  {
    id: 3,
    type: 'paper',
    title: 'Accepted Paper – IEEE ICDSCNC 2026',
    subtitle: 'Hyb-Detect: A Hybrid CNN–BiLSTM–Transformer Framework for Robust Multimodal Deepfake Detection',
    description:
      'Accepted at the 2nd International Conference on Distributed Systems, Computer Networks and Cybersecurity (ICDSCNC 2026), Bengaluru, India. Developed a hybrid deep learning framework for multimodal deepfake detection integrating spatial, temporal, and acoustic feature analysis.',
    date: '2026',
    icon: BookOpen,
    highlight: false,
  },
  {
    id: 4,
    type: 'hackathon',
    title: '3rd Place - Smart Education Hackathon',
    subtitle: 'Department of CSE, Sai Vidya Institute of Technology',
    description:
      'Secured 3rd place in the college hackathon with the project "InspireAI – Inclusive AI Learning Hub". Competed against multiple teams and presented an innovative solution for accessible education.',
    date: 'Nov 2024',
    project: 'InspireAI',
    icon: Trophy,
    highlight: false,
  },
];

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(
    null
  );
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
      id="achievements"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/5 to-transparent pointer-events-none" />

      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`mb-16 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-neon text-sm font-medium tracking-widest uppercase">
              Milestones
            </span>
            <h2 className="mt-2 font-display text-5xl lg:text-6xl text-white tracking-wide">
              RECOGNITION
            </h2>
          </div>

          {/* Achievements Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`relative group transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
                onMouseEnter={() => setHoveredAchievement(achievement.id)}
                onMouseLeave={() => setHoveredAchievement(null)}
              >
                <div
                  className={`relative h-full p-8 rounded-2xl border transition-all duration-500 ${
                    achievement.highlight
                      ? 'bg-gradient-to-br from-neon/10 to-transparent border-neon/30'
                      : 'bg-void-light border-white/5'
                  } ${
                    hoveredAchievement === achievement.id
                      ? 'border-neon/50 shadow-neon/20'
                      : ''
                  }`}
                >
                  {/* Highlight Badge */}
                  {achievement.highlight && (
                    <div className="absolute -top-3 left-8 px-4 py-1 bg-neon text-void text-xs font-bold rounded-full flex items-center gap-1">
                      <Star size={12} fill="currentColor" />
                      PATENT PUBLISHED
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      achievement.highlight
                        ? 'bg-neon/20'
                        : 'bg-white/5 group-hover:bg-neon/10'
                    }`}
                  >
                    <achievement.icon
                      size={32}
                      className={`transition-colors duration-300 ${
                        achievement.highlight
                          ? 'text-neon'
                          : 'text-white/50 group-hover:text-neon'
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-neon transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-neon/80 text-sm mb-4">{achievement.subtitle}</p>
                  <p className="text-white/60 leading-relaxed mb-6">
                    {achievement.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-white/50">
                      <Calendar size={14} />
                      <span className="text-sm">{achievement.date}</span>
                    </div>
                    {achievement.number && (
                      <div className="flex items-center gap-2 text-neon">
                        <Hash size={14} />
                        <span className="text-sm font-medium">
                          {achievement.number}
                        </span>
                      </div>
                    )}
                    {achievement.project && (
                      <div className="flex items-center gap-2 text-white/50">
                        <Award size={14} />
                        <span className="text-sm">{achievement.project}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            {[
              { value: '1', label: 'Patent Published' },
              { value: '4', label: 'Major Projects' },
              { value: '3rd', label: 'Hackathon Place' },
              { value: '9.39', label: 'Current CGPA' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-void-light rounded-xl border border-white/5 hover:border-neon/30 transition-colors"
                style={{ transitionDelay: `${600 + index * 50}ms` }}
              >
                <div className="font-display text-4xl text-neon mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
