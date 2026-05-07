import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, MapPin, HeartHandshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    num: '01',
    title: 'Engineered Precision',
    description: 'Every joint tight. Every piece fits. Manufactured to exacting standards for flawless jobsite assembly.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M5 20v-8l7-7 7 7v8" />
        <path d="M9 20v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Quality Certified',
    description: 'Proud WWTABC member. Twice-annual engineer inspections and weekly in-plant quality checks.',
    icon: <Award size={28} strokeWidth={1.5} />,
  },
  {
    num: '03',
    title: 'Local & Responsive',
    description: 'Based in Oliver, BC. Close enough to jump in the truck when the framer calls. Personal service, every time.',
    icon: <MapPin size={28} strokeWidth={1.5} />,
  },
  {
    num: '04',
    title: 'Framer-First Mindset',
    description: "The framer is our most important customer. On-time delivery and perfect fit — that's the job.",
    icon: <HeartHandshake size={28} strokeWidth={1.5} />,
  },
];

export default function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      });

      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 85%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(165deg, #2B211B 0%, #241C16 50%, #2B211B 100%)',
      }}
    >
      {/* Warm ambient glow from top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(196, 106, 58, 0.07) 0%, transparent 70%)',
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(196,106,58,0.35) 50%, transparent 95%)' }}
      />

      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div className="section-container relative z-10">
        <div ref={headingRef} className="text-center mb-14 lg:mb-16" style={{ opacity: 0 }}>
          <p
            className="text-[0.6875rem] uppercase tracking-[0.18em] font-semibold"
            style={{ color: 'rgba(196, 106, 58, 0.7)' }}
          >
            Why Builders Choose Us
          </p>
          <h2
            className="font-display font-bold text-white mt-4"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.15 }}
          >
            Engineered for Performance.<br className="hidden sm:block" /> Built for Trust.
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5"
        >
          {pillars.map(p => (
            <div
              key={p.num}
              className="group relative p-7 rounded-xl"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.04)',
                opacity: 0,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(196, 106, 58, 0.2)';
                el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(255,255,255,0.06)';
                el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.04)';
                el.style.transform = 'translateY(0)';
              }}
            >
              {/* Large numeral */}
              <div
                className="font-display text-5xl font-bold leading-none select-none"
                style={{ color: 'rgba(196, 106, 58, 0.18)' }}
              >
                {p.num}
              </div>

              {/* Icon */}
              <div className="mt-4" style={{ color: 'rgba(196, 106, 58, 0.7)' }}>
                {p.icon}
              </div>

              {/* Title */}
              <h3
                className="font-display text-lg font-semibold mt-4"
                style={{ color: 'rgba(255,255,255,0.9)' }}
              >
                {p.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm mt-2 leading-[1.7]"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
