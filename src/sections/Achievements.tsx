import { useEffect, useRef, useState } from 'react';
import {
  Trophy,
  FileText,
  Award,
  Star,
  Calendar,
  Hash,
  BookOpen,
  X,
  Maximize2,
  ChevronRight,
} from 'lucide-react';

const achievements = [
  {
    id: 1,
    type: 'best-paper',
    title: 'Best Paper Award — IEEE ICDSCNC 2026',
    subtitle:
      'Presenting Author | "Hyb-Detect: A Hybrid CNN–BiLSTM–Transformer Framework for Robust Multimodal Deepfake Detection"',
    description:
      'Presented as the presenting author at the 2nd IEEE International Conference on Distributed Systems, Computer Networks and Cybersecurity (ICDSCNC 2026), Bengaluru, India on August 28, 2026. The research was honored with the prestigious Best Paper Award for proposing a state-of-the-art hybrid deep learning architecture that combines CNNs for visual artifact extraction, BiLSTMs for temporal modeling, and Transformers for cross-modal audio-visual attention to detect sophisticated multimedia deepfakes. Currently in the IEEE publication process.',
    date: '28 Aug 2026',
    location: 'Bengaluru, India',
    tag: '🏆 BEST PAPER AWARD',
    ieeeHighlight: 'IEEE Conference Presentation',
    status: 'Under IEEE Publication Process',
    image: '/ICDSCNC_presentation.jpeg',
    imageAlt: 'Rhea Patel presenting paper at IEEE ICDSCNC 2026 conference',
    techBadges: ['CNN Feature Extractor', 'BiLSTM Temporal Modeling', 'Transformer Cross-Attention', 'Multimodal Audio-Visual Fusion'],
    icon: Trophy,
    highlight: true,
    featured: true,
  },
  {
    id: 2,
    type: 'patent',
    title: 'Adaptive Hybrid Spatio-Temporal Learning System',
    subtitle: 'For Deepfake Content Detection',
    description:
      'Developed hybrid AI framework combining visual and audio feature analysis for deepfake detection. The system uses advanced LSTM and Transformer architectures to analyze both spatial and temporal features in multimedia content.',
    date: '05 Dec 2025',
    number: '202541112604',
    tag: 'PATENT PUBLISHED',
    techBadges: ['Spatio-Temporal Learning', 'LSTM & Transformer', 'Multimedia Analysis'],
    icon: FileText,
    highlight: true,
    featured: false,
  },
  {
    id: 3,
    type: 'paper',
    title: 'Accepted Paper – IEEE AISIIS 2026',
    subtitle:
      'Hyb-Detect: A Hybrid CNN–Transformer–LSTM Framework for Robust Multimodal Deepfake Detection',
    description:
      'Accepted at the IEEE International Conference on AI and Security for Industrial IoT Systems (AISIIS 2026), Hyderabad, India. Proposed a multimodal deepfake detection framework using cross-modal fusion of audio and visual representations for robust forgery detection.',
    date: '2026',
    location: 'Hyderabad, India',
    ieeeHighlight: 'IEEE AISIIS 2026',
    techBadges: ['IEEE Accepted', 'Cross-modal Fusion', 'Deepfake Detection'],
    icon: BookOpen,
    highlight: false,
    featured: false,
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
    techBadges: ['Inclusive EdTech', 'Accessibility AI', 'TensorFlow'],
    icon: Award,
    highlight: false,
    featured: false,
  },
];

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`mb-16 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-neon text-sm font-medium tracking-widest uppercase">
              Milestones & Honors
            </span>
            <h2 className="mt-2 font-display text-5xl lg:text-6xl text-white tracking-wide">
              RECOGNITION & AWARDS
            </h2>
          </div>

          {/* Achievements Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`relative group transition-all duration-700 ${
                  achievement.featured ? 'lg:col-span-2' : ''
                } ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
                onMouseEnter={() => setHoveredAchievement(achievement.id)}
                onMouseLeave={() => setHoveredAchievement(null)}
              >
                <div
                  className={`relative h-full p-8 lg:p-10 rounded-2xl border transition-all duration-500 overflow-hidden ${
                    achievement.featured
                      ? 'bg-gradient-to-br from-amber-500/10 via-neon/10 to-void-light border-neon/60 shadow-2xl shadow-neon/10'
                      : achievement.highlight
                      ? 'bg-gradient-to-br from-neon/10 to-transparent border-neon/30'
                      : 'bg-void-light border-white/5'
                  } ${
                    hoveredAchievement === achievement.id
                      ? 'border-neon shadow-neon/25 scale-[1.01]'
                      : ''
                  }`}
                >
                  {/* Glowing Aura Effect on Featured */}
                  {achievement.featured && (
                    <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-400/10 via-neon/10 to-transparent rounded-full blur-2xl pointer-events-none" />
                  )}

                  {/* Badges Container */}
                  <div className="flex flex-wrap items-center gap-2 mb-6 relative z-10">
                    {achievement.tag && (
                      <span className="px-4 py-1.5 bg-gradient-to-r from-amber-400 to-neon text-void text-xs font-black tracking-wider uppercase rounded-full flex items-center gap-1.5 shadow-lg shadow-neon/20">
                        <Star size={13} fill="currentColor" />
                        {achievement.tag}
                      </span>
                    )}

                    {achievement.ieeeHighlight && (
                      <span className="px-3.5 py-1 bg-cyan-500/15 text-cyan-300 text-xs font-bold tracking-wide uppercase rounded-full border border-cyan-400/40 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        ⚡ {achievement.ieeeHighlight}
                      </span>
                    )}

                    {achievement.status && (
                      <span className="px-3 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full border border-white/10 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                        {achievement.status}
                      </span>
                    )}
                  </div>

                  <div className={`${achievement.featured ? 'grid lg:grid-cols-12 gap-8 items-center relative z-10' : 'relative z-10'}`}>
                    <div className={achievement.featured ? 'lg:col-span-7' : ''}>
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                          achievement.featured
                            ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30 shadow-md'
                            : achievement.highlight
                            ? 'bg-neon/20 text-neon border border-neon/30'
                            : 'bg-white/5 group-hover:bg-neon/10 text-white/50 group-hover:text-neon'
                        }`}
                      >
                        <achievement.icon size={28} />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-neon transition-colors leading-tight">
                        {achievement.title}
                      </h3>
                      <p className="text-neon font-medium text-sm lg:text-base mb-4 leading-relaxed">
                        {achievement.subtitle}
                      </p>
                      <p className="text-white/70 leading-relaxed mb-6 text-sm lg:text-base">
                        {achievement.description}
                      </p>

                      {/* Tech Pills */}
                      {achievement.techBadges && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {achievement.techBadges.map((badge) => (
                            <span
                              key={badge}
                              className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 group-hover:border-neon/30 group-hover:text-white transition-colors"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2 text-white/60 font-medium">
                          <Calendar size={14} className="text-neon" />
                          <span className="text-sm">{achievement.date}</span>
                        </div>
                        {achievement.number && (
                          <div className="flex items-center gap-2 text-neon font-mono">
                            <Hash size={14} />
                            <span className="text-sm font-semibold">
                              Patent: {achievement.number}
                            </span>
                          </div>
                        )}
                        {achievement.project && (
                          <div className="flex items-center gap-2 text-white/60">
                            <Award size={14} className="text-neon" />
                            <span className="text-sm">{achievement.project}</span>
                          </div>
                        )}
                        {achievement.location && (
                          <div className="text-xs text-white/40">
                            📍 {achievement.location}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Presentation Photo showcase */}
                    {achievement.image && (
                      <div className="lg:col-span-5 mt-6 lg:mt-0">
                        <div
                          className="relative rounded-2xl overflow-hidden border-2 border-neon/50 group/photo cursor-pointer shadow-2xl bg-void transition-all duration-300 hover:border-neon hover:shadow-neon/30"
                          onClick={() => setSelectedImage(achievement.image)}
                        >
                          <img
                            src={achievement.image}
                            alt={achievement.imageAlt}
                            className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover/photo:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent opacity-80 group-hover/photo:opacity-40 transition-opacity" />
                          
                          <div className="absolute top-3 right-3 p-2.5 bg-void/85 backdrop-blur-md rounded-xl text-neon border border-neon/40 group-hover/photo:bg-neon group-hover/photo:text-void transition-colors shadow-lg">
                            <Maximize2 size={16} />
                          </div>

                          <div className="absolute bottom-3 left-3 right-3 p-3.5 bg-void/90 backdrop-blur-md rounded-xl border border-white/10 shadow-lg">
                            <div className="text-xs font-bold text-neon flex items-center gap-1.5">
                              <Trophy size={14} className="text-amber-400" />
                              IEEE ICDSCNC 2026 Presentation
                            </div>
                            <div className="text-[11px] text-white/70 mt-1 flex items-center justify-between">
                              <span>Presenting Author • 28th Aug 2026</span>
                              <span className="text-neon font-medium flex items-center gap-0.5">
                                Click to zoom <ChevronRight size={12} />
                              </span>
                            </div>
                          </div>
                        </div>
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
              { value: '🏆 1', label: 'Best Paper Award (IEEE)' },
              { value: '1', label: 'Patent Published' },
              { value: '2', label: 'IEEE Research Papers' },
              { value: '9.35', label: 'Current CGPA (Till 6th Sem)' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-void-light rounded-2xl border border-white/5 hover:border-neon/40 hover:shadow-lg hover:shadow-neon/5 transition-all duration-300"
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

      {/* Image Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-void/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-reveal-up"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-void-light border border-neon/50 rounded-2xl overflow-hidden p-3 sm:p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-void/90 hover:bg-neon hover:text-void rounded-full text-white border border-white/20 transition-colors shadow-lg"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <img
              src={selectedImage}
              alt="IEEE Conference Presentation"
              className="w-full max-h-[75vh] object-contain rounded-xl bg-void"
            />
            <div className="p-4 sm:p-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-bold mb-2">
                🏆 Best Paper Award Recipient
              </div>
              <h4 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                Presenting Author at IEEE ICDSCNC 2026 Conference
              </h4>
              <p className="text-sm text-neon font-medium mt-1">
                "Hyb-Detect: A Hybrid CNN–BiLSTM–Transformer Framework for Robust Multimodal Deepfake Detection"
              </p>
              <p className="text-xs text-white/60 mt-2">
                Presented on 28th August 2026 at the 2nd IEEE ICDSCNC Conference, Bengaluru, India
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
