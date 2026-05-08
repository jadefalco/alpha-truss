import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-headline', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      gsap.fromTo('.cta-sub', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, delay: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      gsap.fromTo('.cta-btn-wrap', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      gsap.fromTo('.cta-phone', { opacity: 0, y: 15 }, {
        opacity: 1, y: 0, duration: 0.5, delay: 0.45, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #2B211B 0%, #1F1712 50%, #2B211B 100%)',
      }}
    >
      {/* Subtle warm glow accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(196, 106, 58, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(196,106,58,0.4), transparent)' }}
      />

      <div className="section-container text-center relative z-10">
        <p
          className="text-[0.6875rem] uppercase tracking-[0.16em] font-semibold mb-4"
          style={{ color: 'rgba(196, 106, 58, 0.7)' }}
        >
          Start Your Project
        </p>
        <h2
          className="cta-headline font-display font-bold text-white"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', opacity: 0, lineHeight: 1.15 }}
        >
          Ready to Build?
        </h2>
        <p
          className="cta-sub mt-5 mx-auto max-w-lg text-base leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.7)', opacity: 0 }}
        >
          Get a free quote today. We'll review your plans, work out any issues, and suggest ways to save money before we get the go-ahead.
        </p>
        <div className="cta-btn-wrap mt-10" style={{ opacity: 0 }}>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center text-white text-xs font-semibold uppercase tracking-[0.08em] px-12 py-[18px] rounded-lg transition-all duration-300"
            style={{
              background: 'linear-gradient(180deg, #C46A3A 0%, #B85C2F 100%)',
              boxShadow: '0 6px 24px rgba(196, 106, 58, 0.35), 0 2px 6px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.background = 'linear-gradient(180deg, #D47644 0%, #C46A3A 100%)';
              el.style.transform = 'translateY(-3px)';
              el.style.boxShadow = '0 12px 36px rgba(196, 106, 58, 0.45), 0 4px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.background = 'linear-gradient(180deg, #C46A3A 0%, #B85C2F 100%)';
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = '0 6px 24px rgba(196, 106, 58, 0.35), 0 2px 6px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)';
            }}
          >
            Request Your Free Quote
          </a>
        </div>
        <p
          className="cta-phone mt-5 text-sm"
          style={{ color: 'rgba(255,255,255,0.45)', opacity: 0 }}
        >
          Or call us toll-free:{' '}
          <a href="tel:1-800-962-5530" className="underline hover:no-underline" style={{ color: 'rgba(255,255,255,0.6)' }}>
            1 (800) 962-5530
          </a>
        </p>
      </div>
    </section>
  );
}
