import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const trustRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(headlineRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9 })
      .fromTo(subRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, 0.2)
      .fromTo(trustRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.35)
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.5)
      .fromTo(pillsRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, 0.65)
      .fromTo(imageContainerRef.current, { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 1.2 }, 0.2);

    return () => { tl.kill(); };
  }, []);

  // Parallax for image
  useEffect(() => {
    const container = imageContainerRef.current;
    const img = imageRef.current;
    if (!container || !img) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rate = scrollY * 0.08;
      img.style.transform = `translateY(${rate}px) scale(1.05)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
      id="home"
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center overflow-visible"
      style={{
        background: 'linear-gradient(160deg, #F5F1E8 0%, #EDE7DA 50%, #F5F1E8 100%)',
        paddingTop: 'var(--nav-height)',
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div className="section-container relative z-10 w-full py-10 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-24">
          {/* Left: Text — positioned slightly higher for editorial offset */}
          <div className="w-full lg:w-[38%] text-center lg:text-left shrink-0 lg:-mt-6">
            <h1
              ref={headlineRef}
              className="font-display font-bold tracking-tight"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4.7rem)',
                lineHeight: 0.92,
                color: 'var(--color-text-primary)',
                opacity: 0,
              }}
            >
              In Touch<br className="hidden sm:block" /> and On Time
            </h1>
            <p
              ref={subRef}
              className="mt-5 text-base lg:text-[1.0625rem] leading-[1.65] max-w-md mx-auto lg:mx-0"
              style={{ color: 'var(--color-text-secondary)', opacity: 0 }}
            >
              Serving the Okanagan Valley with precision-engineered roof trusses, open web floor trusses, and metal roofing for over 20 years.
            </p>
            <p
              ref={trustRef}
              className="mt-4 text-[0.6875rem] uppercase tracking-[0.12em] font-medium"
              style={{ color: 'var(--color-text-muted)', opacity: 0 }}
            >
              Proud member of the Western Wood Truss Association of BC
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start" style={{ opacity: 0 }}>
              <a href="#contact" onClick={scrollToContact} className="btn-primary">
                Request a Free Quote
              </a>
              <a
                href="tel:250-498-0064"
                className="btn-secondary whitespace-nowrap"
                style={{ padding: '15px 28px', fontSize: '0.75rem' }}
              >
                Call 250-498-0064
              </a>
            </div>

            {/* Service Pills */}
            <div ref={pillsRef} className="mt-5 flex flex-wrap gap-2 justify-center lg:justify-start" style={{ opacity: 0 }}>
              {['Roof Trusses', 'Floor Trusses', 'Metal Roofing'].map(pill => (
                <span
                  key={pill}
                  className="text-[0.6875rem] font-semibold uppercase tracking-[0.06em] px-4 py-1.5 rounded-full"
                  style={{
                    backgroundColor: 'rgba(42, 32, 24, 0.05)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Image — positioned slightly lower for editorial offset */}
          <div className="w-full lg:w-[62%] relative lg:mt-8" style={{ opacity: 0 }} ref={imageContainerRef}>
            <div
              className="relative rounded-xl lg:rounded-2xl overflow-hidden lg:mb-[-60px]"
              style={{
                boxShadow: '0 32px 80px rgba(42,32,24,0.22), 0 12px 28px rgba(42,32,24,0.12)',
              }}
            >
              <img
                ref={imageRef}
                src="/images/hero-trusses.jpg"
                alt="Engineered wooden roof trusses with dramatic architectural perspective"
                className="w-full object-cover"
                style={{ 
                  minHeight: '520px',
                  height: 'clamp(520px, 78vh, 720px)',
                }}
                loading="eager"
              />
              {/* Subtle bottom gradient for depth */}
              <div
                className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(42,32,24,0.2) 0%, transparent 100%)',
                }}
              />
            </div>
            {/* Decorative accent block behind image */}
            <div
              className="absolute -bottom-4 -left-4 w-28 h-28 hidden lg:block rounded-xl -z-10"
              style={{
                background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
                opacity: 0.12,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
