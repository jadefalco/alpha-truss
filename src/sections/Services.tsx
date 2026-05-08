import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Roof Trusses',
    description:
      'Custom-engineered roof trusses built to your exact specifications. Our precision manufacturing ensures every joint is tight and every piece fits like a glove.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 40L24 8L44 40H4Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="24" y1="8" x2="24" y2="40" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="28" x2="36" y2="28" stroke="currentColor" strokeWidth="1.5" />
        <line x1="7" y1="36" x2="41" y2="36" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: 'Open Web Floor Trusses',
    description:
      'Open web floor trusses that provide superior strength while allowing easy passage of plumbing, electrical, and HVAC. Engineered for maximum span and minimal deflection.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="12" width="40" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="4" y="33" width="40" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="10" y1="15" x2="7" y2="33" stroke="currentColor" strokeWidth="1.5" />
        <line x1="20" y1="15" x2="17" y2="33" stroke="currentColor" strokeWidth="1.5" />
        <line x1="30" y1="15" x2="27" y2="33" stroke="currentColor" strokeWidth="1.5" />
        <line x1="40" y1="15" x2="37" y2="33" stroke="currentColor" strokeWidth="1.5" />
        <line x1="15" y1="15" x2="12" y2="33" stroke="currentColor" strokeWidth="1" />
        <line x1="25" y1="15" x2="22" y2="33" stroke="currentColor" strokeWidth="1" />
        <line x1="35" y1="15" x2="32" y2="33" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: 'Metal Roofing',
    description:
      'Durable metal roofing and siding in a variety of colours and profiles. We supply quality steel products that stand up to the Okanagan climate.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 40L24 8L44 40" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="10" y1="32" x2="10" y2="40" stroke="currentColor" strokeWidth="1.5" />
        <line x1="20" y1="24" x2="20" y2="40" stroke="currentColor" strokeWidth="1.5" />
        <line x1="30" y1="24" x2="30" y2="40" stroke="currentColor" strokeWidth="1.5" />
        <line x1="40" y1="32" x2="40" y2="40" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 36H12M18 28H22M28 28H32M38 36H42" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
      });

      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 lg:py-28 relative"
      style={{
        background: 'linear-gradient(170deg, #F5F1E8 0%, #F0EBE0 50%, #F5F1E8 100%)',
      }}
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div className="section-container relative">
        <div ref={headingRef} className="text-center" style={{ opacity: 0 }}>
          <p className="section-label">What We Do</p>
          <h2 className="section-title">One Stop for Three Solutions</h2>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16"
        >
          {services.map(s => (
            <div
              key={s.title}
              className="p-8 rounded-2xl transition-all duration-300 cursor-default group relative"
              style={{
                background: 'linear-gradient(145deg, #FAF7F0 0%, #F5F1E8 100%)',
                border: '1px solid rgba(42,32,24,0.08)',
                boxShadow: '0 4px 20px rgba(42,32,24,0.04), 0 1px 4px rgba(42,32,24,0.03)',
                opacity: 0,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(184, 92, 47, 0.25)';
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = '0 20px 50px rgba(42,32,24,0.1), 0 8px 20px rgba(42,32,24,0.06)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(42,32,24,0.08)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 4px 20px rgba(42,32,24,0.04), 0 1px 4px rgba(42,32,24,0.03)';
              }}
            >
              {/* Accent top line */}
              <div
                className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)' }}
              />
              <div style={{ color: 'var(--color-accent)' }}>{s.icon}</div>
              <h3
                className="font-display text-xl font-semibold mt-6"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-[1.75] mt-3"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Services Image — large, dramatic */}
        <div
          className="mt-14 rounded-xl overflow-hidden"
          style={{
            boxShadow: '0 16px 48px rgba(42,32,24,0.12), 0 4px 16px rgba(42,32,24,0.06)',
          }}
        >
          <img
            src="/images/services-roof.jpg"
            alt="Dramatic architectural view of precision-engineered roof trusses"
            className="w-full h-60 lg:h-80 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
