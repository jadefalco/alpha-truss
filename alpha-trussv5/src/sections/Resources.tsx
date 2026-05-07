import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const resources = [
  {
    title: 'Long Span Trusses Video',
    description: 'Watch how long span trusses are manufactured and installed.',
    url: 'http://www.youtube.com/watch?v=IALpipSsRQk',
  },
  {
    title: 'Simpson Strong-Tie Hangers',
    description: 'Explore the full catalog of structural connectors and hangers.',
    url: 'http://www.strongtie.com/products/category_list.html?source=hppromo',
  },
  {
    title: 'Encyclopedia of Trusses',
    description: 'Comprehensive reference guide — see P12-Gables, P14-Cantilevers, P47-Truss Terms.',
    url: 'http://www.alpeng.com/images/stories/pdfs/EOT.pdf',
  },
  {
    title: 'Basic Truss Info',
    description: 'Essential truss information and terminology from Hi-Tec Industries.',
    url: 'http://www.hitec.ca/trusses.html',
  },
  {
    title: 'Handling & Bracing Guide',
    description: 'Proper procedures for truss handling, storage, and temporary bracing.',
    url: 'https://tpic.ca/wood-trusses',
  },
  {
    title: 'Western Wood Truss Association',
    description: "WWTABC — our industry's quality assurance and advocacy body in BC.",
    url: 'http://wwtabc.com/index.php',
  },
];

export default function Resources() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
      });

      if (gridRef.current) {
        gsap.fromTo(gridRef.current.children, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="resources"
      ref={sectionRef}
      className="py-20 lg:py-28 relative"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      {/* Section separation shadow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(42,32,24,0.08) 50%, transparent 100%)' }}
      />

      <div className="section-container relative">
        <div ref={headingRef} style={{ opacity: 0 }}>
          <p className="section-label">Helpful Resources</p>
          <h2 className="section-title">Industry Links & References</h2>
          <p
            className="mt-3 max-w-xl leading-[1.7] text-[0.9375rem]"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            A curated collection of industry resources to help you plan, estimate, and execute your building projects.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 lg:mt-14"
        >
          {resources.map(r => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-xl transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg, #F5F1E8 0%, #EDE7DA 100%)',
                border: '1px solid rgba(42,32,24,0.08)',
                boxShadow: '0 4px 16px rgba(42,32,24,0.03), 0 1px 4px rgba(42,32,24,0.02)',
                opacity: 0,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(184, 92, 47, 0.25)';
                el.style.transform = 'translateY(-3px)';
                el.style.boxShadow = '0 12px 32px rgba(42,32,24,0.08), 0 4px 12px rgba(42,32,24,0.04)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(42,32,24,0.08)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 4px 16px rgba(42,32,24,0.03), 0 1px 4px rgba(42,32,24,0.02)';
              }}
            >
              <ExternalLink
                size={16}
                className="absolute top-5 right-5 transition-colors duration-200"
                style={{ color: 'var(--color-text-muted)' }}
              />
              <h3
                className="font-body text-[0.9375rem] font-bold pr-6"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {r.title}
              </h3>
              <p
                className="text-sm mt-2 leading-[1.7]"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {r.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
