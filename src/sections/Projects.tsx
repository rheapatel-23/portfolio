import { useEffect, useRef, useState } from 'react';
import { Github, Cpu, Brain, Languages, Activity } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'ASHA Saathi',
    subtitle: 'Village Health Worker Digital Assistant',
    description:
      'Developed an offline-first healthcare platform enabling rural health workers (ASHA) to digitize patient records, conduct surveys, and manage follow-ups. Built a native Android app using Kotlin, Jetpack Compose, Room, Retrofit, and WorkManager for offline data collection and background sync. Designed a Node.js/Express backend with SQLite for secure cross-platform synchronization, and a web dashboard using HTML, CSS, and JS for doctors to monitor patient health data and track critical cases.',
    icon: Activity,
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Node.js', 'Express', 'SQLite', 'WorkManager'],
    links: {
      github: 'https://github.com/rheapatel-23/Village-Health-Worker-Digital-Assistant',
    },
    achievement: 'Hackathon Project',
  },
  {
    id: 2,
    title: 'Deepfake Detection Framework',
    subtitle: 'AI-Generated Multimedia Analysis',
    description:
      'Led a team in developing a hybrid machine learning model for audio-visual deepfake detection from input videos using LSTM and Transformer Encoder architectures. Implemented multimedia data preprocessing, feature extraction, deep learning model training, and evaluation.',
    icon: Cpu,
    tags: ['Python', 'LSTM', 'Transformer', 'TensorFlow', 'OpenCV'],
    links: {
      github: 'https://github.com/rheapatel-23/Deepfake-detection-framework-for-AI-generated-multimedia-data',
    },
  },
  {
    id: 3,
    title: 'InspireAI',
    subtitle: 'Inclusive AI Learning Hub',
    description:
      'Built an AI-powered accessibility-focused learning platform for neurodiverse and specially-abled students with features like personalized learning paths, text-to-speech, sign language recognition, and gamified modules. Developed frontend using HTML, CSS, JavaScript and integrated ML components using Python, TensorFlow, and OpenCV.',
    icon: Brain,
    tags: ['HTML/CSS', 'JavaScript', 'Python', 'TensorFlow', 'OpenCV'],
    links: {
      github: 'https://github.com/rheapatel-23/InspireAI',
    },
    achievement: '3rd Place - College Hackathon',
  },
  {
    id: 4,
    title: 'Multilingual Language Translator',
    subtitle: 'NLP-Based Translation System',
    description:
      'Created an NLP-based system for real-time language translation. Used API integration for multilingual support and improved usability through a simple, intuitive UI.',
    icon: Languages,
    tags: ['Python', 'NLP', 'API Integration', 'UI Design'],
    links: {
      github: 'https://github.com/rheapatel-23/Multilingual-Language-Translator',
    },
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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
      id="projects"
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
              My Work
            </span>
            <h2 className="mt-2 font-display text-5xl lg:text-6xl text-white tracking-wide">
              FEATURED PROJECTS
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className={`relative h-full bg-void-light rounded-2xl border transition-all duration-500 p-6 lg:p-8 flex flex-col justify-between ${
                    hoveredProject === project.id
                      ? 'border-neon/50 shadow-neon/20'
                      : 'border-white/5'
                  }`}
                >
                  <div>
                    {/* Header: Icon & Achievement Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-neon/30 transition-colors">
                        <project.icon size={24} className="text-neon" />
                      </div>
                      {project.achievement && (
                        <span className="px-3 py-1 bg-neon/10 text-neon text-xs font-semibold rounded-full border border-neon/20">
                          {project.achievement}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon transition-colors tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neon/80 font-medium tracking-wider uppercase mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-white/60 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs text-white/50 bg-white/5 rounded border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links - only Code button */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white text-sm rounded-lg hover:border-neon hover:text-neon transition-colors"
                      >
                        <Github size={14} />
                        Code
                      </a>
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
