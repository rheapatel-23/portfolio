import { useEffect, useRef, useState } from 'react';
import { Send, Github, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID || "xwvjpgnk";

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        console.error("Formspree submission failed:", data);
        alert("Something went wrong. Please check your Formspree configuration.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-neon/5 to-transparent pointer-events-none" />

      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`mb-16 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-neon text-sm font-medium tracking-widest uppercase">
              Let&apos;s Connect
            </span>
            <h2 className="mt-2 font-display text-5xl lg:text-6xl text-white tracking-wide">
              INITIATE CONTACT
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let&apos;s build something amazing together
              </h3>
              <p className="text-white/60 leading-relaxed mb-8">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:rheapatel2307@gmail.com"
                  className="flex items-center gap-4 p-4 bg-void-light rounded-xl border border-white/5 hover:border-neon/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                    <Mail size={20} className="text-neon" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Email</div>
                    <div className="text-white group-hover:text-neon transition-colors">
                      rheapatel2307@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+917022317704"
                  className="flex items-center gap-4 p-4 bg-void-light rounded-xl border border-white/5 hover:border-neon/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                    <Phone size={20} className="text-neon" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Phone</div>
                    <div className="text-white group-hover:text-neon transition-colors">
                      +91 7022317704
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-void-light rounded-xl border border-white/5">
                  <div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-neon" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Location</div>
                    <div className="text-white">Bengaluru, India</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <div className="text-sm text-white/50 mb-4">Connect on</div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/rheapatel-23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-void-light rounded-xl border border-white/5 flex items-center justify-center text-white/60 hover:text-neon hover:border-neon/50 transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rhea-patel-460a1b378"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-void-light rounded-xl border border-white/5 flex items-center justify-center text-white/60 hover:text-neon hover:border-neon/50 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:rheapatel2307@gmail.com"
                    className="w-12 h-12 bg-void-light rounded-xl border border-white/5 flex items-center justify-center text-white/60 hover:text-neon hover:border-neon/50 transition-all"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm text-white/50 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-void-light border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/50 transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm text-white/50 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-void-light border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-sm text-white/50 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-void-light border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-neon text-void hover:bg-white'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-void/30 border-t-void rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      Message Sent!
                      <ArrowRight size={18} />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
