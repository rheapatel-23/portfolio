import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/rheapatel-23',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rhea-patel-460a1b378',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:rheapatel2307@gmail.com',
    icon: Mail,
  },
];

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 overflow-hidden border-t border-white/5">
      {/* Marquee */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden py-4 opacity-10 pointer-events-none">
        <div className="marquee whitespace-nowrap flex">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="font-display text-8xl text-white mx-8"
            >
              RHEA PATEL • SOFTWARE ENGINEER • AI INNOVATOR •
            </span>
          ))}
        </div>
      </div>

      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a
                href="#"
                className="font-display text-4xl text-white tracking-wider hover:text-neon transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                RHEA<span className="text-neon">.</span>
              </a>
              <p className="mt-4 text-white/50 max-w-md leading-relaxed">
                Computer Science Engineering student passionate about AI, deep
                learning, and creating impactful solutions through code.
              </p>
              <div className="mt-6 flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-void-light rounded-lg border border-white/5 flex items-center justify-center text-white/50 hover:text-neon hover:border-neon/50 transition-all"
                    aria-label={link.name}
                  >
                    <link.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-white/50 hover:text-neon transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:rheapatel2307@gmail.com"
                    className="text-white/50 hover:text-neon transition-colors"
                  >
                    rheapatel2307@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917022317704"
                    className="text-white/50 hover:text-neon transition-colors"
                  >
                    +91 7022317704
                  </a>
                </li>
                <li className="text-white/50">Bengaluru, India</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Rhea Patel
            </p>
            <p className="text-white/40 text-sm">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
