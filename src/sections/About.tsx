import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLParagraphElement[]>([]);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
      });

      textRefs.current.forEach((p, i) => {
        if (p) {
          gsap.fromTo(p, { opacity: 0, y: 25 }, {
            opacity: 1, y: 0, duration: 0.6, delay: i * 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: p, start: 'top 85%' },
          });
        }
      });

      if (testimonialRef.current) {
        gsap.fromTo(testimonialRef.current, { opacity: 0, x: 40 }, {
          opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: testimonialRef.current, start: 'top 80%' },
        });
      }

      if (imageRef.current) {
        gsap.fromTo(imageRef.current, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 85%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-28 relative"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      {/* Subtle bottom shadow for section separation */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(42,32,24,0.08) 50%, transparent 100%)' }}
      />

      {/* Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div className="section-container relative">
        <div ref={headingRef} style={{ opacity: 0 }}>
          <p className="section-label">About Us</p>
          <h2 className="section-title max-w-2xl">
            Built on Quality,<br />Trusted by Framers
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mt-10">
          {/* Left: Text */}
          <div className="w-full lg:w-[55%] space-y-5">
            <p
              ref={el => { if (el) textRefs.current[0] = el; }}
              className="leading-[1.75] text-[0.9375rem]"
              style={{ color: 'var(--color-text-secondary)', opacity: 0 }}
            >
              Alpha Truss has been serving the Okanagan Valley for over twenty years from our location in Oliver, BC. Most of our customers are in an area bounded by Kelowna, Grand Forks, Wenatchee, and Princeton. We like the jobsite to be close enough that if the framer calls with a problem, we can jump in the truck and have a look.
            </p>
            <p
              ref={el => { if (el) textRefs.current[1] = el; }}
              className="leading-[1.75] text-[0.9375rem]"
              style={{ color: 'var(--color-text-secondary)', opacity: 0 }}
            >
              We are members of the{' '}
              <a
                href="http://wwtabc.com/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline font-semibold"
                style={{ color: 'var(--color-accent)' }}
              >
                Western Wood Truss Association of British Columbia (WWTABC)
              </a>
              . This means we take part in a quality control program that includes twice-annual spot inspections by an engineer and weekly in-plant checkups by our own staff.
            </p>
            <p
              ref={el => { if (el) textRefs.current[2] = el; }}
              className="leading-[1.75] text-[0.9375rem]"
              style={{ color: 'var(--color-text-secondary)', opacity: 0 }}
            >
              We have one guiding idea: the framer is the most important person. If he gets what he needs on time and it all fits together well, we have done our job. The recommendation of a good framer is the best advertising we can have.
            </p>
          </div>

          {/* Right: Testimonial + Image */}
          <div className="w-full lg:w-[45%]">
            {/* Testimonial Card */}
            <div
              ref={testimonialRef}
              className="p-7 rounded-xl relative"
              style={{
                background: 'linear-gradient(145deg, #F5F1E8 0%, #EDE7DA 100%)',
                border: '1px solid rgba(42,32,24,0.08)',
                boxShadow: '0 12px 40px rgba(42,32,24,0.08), 0 4px 12px rgba(42,32,24,0.05), inset 0 1px 0 rgba(255,255,255,0.4)',
                opacity: 0,
              }}
            >
              <div
                className="absolute top-5 left-6 font-display text-7xl leading-none select-none"
                style={{ color: 'var(--color-accent)', opacity: 0.2 }}
              >
                "
              </div>
              <p
                className="text-sm italic leading-[1.75] relative z-10 pt-8"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                To our very pleasant surprise after years of fighting truss problems I want to tell you that this roof came together in the most perfect way. All truss joints were tight, gang nails fully sunk and every piece fit like a glove.
              </p>
              <p
                className="text-xs font-semibold mt-5 uppercase tracking-[0.08em]"
                style={{ color: 'var(--color-text-muted)' }}
              >
                — Hart Buckendahl, Ellcar Construction
              </p>
            </div>

            {/* Workshop Image */}
            <div
              ref={imageRef}
              className="mt-8 rounded-xl overflow-hidden"
              style={{
                boxShadow: '0 16px 48px rgba(42,32,24,0.12), 0 6px 16px rgba(42,32,24,0.08), inset 0 1px 0 rgba(255,255,255,0.3)',
                opacity: 0,
              }}
            >
              <img
                src="/images/about-workshop.jpg"
                alt="Alpha Truss manufacturing facility with precision-built trusses"
                className="w-full h-52 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
