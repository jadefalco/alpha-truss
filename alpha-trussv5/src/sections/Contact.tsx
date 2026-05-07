import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Printer, MapPin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
      });

      if (leftRef.current) {
        gsap.fromTo(leftRef.current.children, { opacity: 0, x: -30 }, {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 80%' },
        });
      }

      gsap.fromTo(rightRef.current, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: rightRef.current, start: 'top 80%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 lg:py-28 relative"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      {/* Subtle gradient top */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(43,33,27,0.03) 0%, transparent 100%)' }}
      />

      <div className="section-container relative">
        <div ref={headingRef} style={{ opacity: 0 }}>
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Contact Alpha Truss</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mt-10 lg:mt-14">
          {/* Left: Contact Cards */}
          <div ref={leftRef} className="w-full lg:w-1/2 space-y-4">
            {/* Phone */}
            <div
              className="p-6 rounded-xl flex items-start gap-4"
              style={{
                background: 'linear-gradient(145deg, #FAF7F0 0%, #F5F1E8 100%)',
                border: '1px solid rgba(42,32,24,0.07)',
                boxShadow: '0 8px 28px rgba(42,32,24,0.07), 0 2px 8px rgba(42,32,24,0.04), inset 0 1px 0 rgba(255,255,255,0.4)',
                opacity: 0,
              }}
            >
              <div
                className="p-2.5 rounded-lg shrink-0"
                style={{ backgroundColor: 'rgba(196, 106, 58, 0.1)' }}
              >
                <Phone size={18} style={{ color: 'var(--color-accent)' }} />
              </div>
              <div>
                <p className="text-[0.625rem] uppercase tracking-[0.12em] font-semibold" style={{ color: 'var(--color-text-muted)' }}>
                  Phone
                </p>
                <a
                  href="tel:250-498-0064"
                  className="text-lg font-bold mt-1 block hover:underline"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  250-498-0064
                </a>
                <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                  Toll Free:{' '}
                  <a href="tel:1-800-962-5530" className="hover:underline font-medium" style={{ color: 'var(--color-accent)' }}>
                    1 (800) 962-5530
                  </a>
                </p>
              </div>
            </div>

            {/* Fax */}
            <div
              className="p-6 rounded-xl flex items-start gap-4"
              style={{
                background: 'linear-gradient(145deg, #FAF7F0 0%, #F5F1E8 100%)',
                border: '1px solid rgba(42,32,24,0.07)',
                boxShadow: '0 8px 28px rgba(42,32,24,0.07), 0 2px 8px rgba(42,32,24,0.04), inset 0 1px 0 rgba(255,255,255,0.4)',
                opacity: 0,
              }}
            >
              <div
                className="p-2.5 rounded-lg shrink-0"
                style={{ backgroundColor: 'rgba(196, 106, 58, 0.1)' }}
              >
                <Printer size={18} style={{ color: 'var(--color-accent)' }} />
              </div>
              <div>
                <p className="text-[0.625rem] uppercase tracking-[0.12em] font-semibold" style={{ color: 'var(--color-text-muted)' }}>
                  Fax
                </p>
                <p className="text-lg font-bold mt-1" style={{ color: 'var(--color-text-primary)' }}>
                  250-498-6912
                </p>
              </div>
            </div>

            {/* Address + Map */}
            <div
              className="p-6 rounded-xl"
              style={{
                background: 'linear-gradient(145deg, #FAF7F0 0%, #F5F1E8 100%)',
                border: '1px solid rgba(42,32,24,0.07)',
                boxShadow: '0 8px 28px rgba(42,32,24,0.07), 0 2px 8px rgba(42,32,24,0.04), inset 0 1px 0 rgba(255,255,255,0.4)',
                opacity: 0,
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="p-2.5 rounded-lg shrink-0"
                  style={{ backgroundColor: 'rgba(196, 106, 58, 0.1)' }}
                >
                  <MapPin size={18} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div>
                  <p className="text-[0.625rem] uppercase tracking-[0.12em] font-semibold" style={{ color: 'var(--color-text-muted)' }}>
                    Visit Us
                  </p>
                  <p className="text-base font-bold mt-1" style={{ color: 'var(--color-text-primary)' }}>
                    5224 Paintbrush Rd, Oliver, B.C. V0H 1T1
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg overflow-hidden"
                style={{
                  height: '200px',
                  boxShadow: '0 4px 12px rgba(42,32,24,0.06) inset',
                }}
              >
                <iframe
                  title="Alpha Truss Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668.123456789!2d-119.55!3d49.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEwJzQ4LjAiTiAxMTnCsDMzJzAwLjAiVw!5e0!3m2!1sen!2sca!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.15) contrast(1.05)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Email */}
            <div
              className="p-6 rounded-xl flex items-start gap-4"
              style={{
                background: 'linear-gradient(145deg, #FAF7F0 0%, #F5F1E8 100%)',
                border: '1px solid rgba(42,32,24,0.07)',
                boxShadow: '0 8px 28px rgba(42,32,24,0.07), 0 2px 8px rgba(42,32,24,0.04), inset 0 1px 0 rgba(255,255,255,0.4)',
                opacity: 0,
              }}
            >
              <div
                className="p-2.5 rounded-lg shrink-0"
                style={{ backgroundColor: 'rgba(196, 106, 58, 0.1)' }}
              >
                <Mail size={18} style={{ color: 'var(--color-accent)' }} />
              </div>
              <div>
                <p className="text-[0.625rem] uppercase tracking-[0.12em] font-semibold" style={{ color: 'var(--color-text-muted)' }}>
                  Email
                </p>
                <div className="mt-1 space-y-1">
                  <a
                    href="mailto:steve@alphatruss.ca"
                    className="block text-base font-bold hover:underline"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Steve Gerrard
                  </a>
                  <a
                    href="mailto:ken@alphatruss.ca"
                    className="block text-base font-bold hover:underline"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Ken Moore
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Service Area + Badge */}
          <div ref={rightRef} className="w-full lg:w-1/2" style={{ opacity: 0 }}>
            <div
              className="p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(145deg, #FAF7F0 0%, #F5F1E8 100%)',
                border: '1px solid rgba(42,32,24,0.07)',
                boxShadow: '0 8px 28px rgba(42,32,24,0.06), 0 2px 8px rgba(42,32,24,0.04), inset 0 1px 0 rgba(255,255,255,0.3)',
              }}
            >
              <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                Service Area
              </h3>
              <p className="text-sm leading-[1.75] mt-3" style={{ color: 'var(--color-text-secondary)' }}>
                We serve builders and contractors throughout the Okanagan Valley, including Kelowna, Penticton, Osoyoos, Oliver, Grand Forks, Princeton, and surrounding areas.
              </p>
            </div>

            {/* Hours */}
            <div
              className="mt-6 p-6 rounded-xl"
              style={{
                background: 'linear-gradient(145deg, #FAF7F0 0%, #F5F1E8 100%)',
                border: '1px solid rgba(42,32,24,0.07)',
                boxShadow: '0 8px 28px rgba(42,32,24,0.06), 0 2px 8px rgba(42,32,24,0.04), inset 0 1px 0 rgba(255,255,255,0.3)',
              }}
            >
              <p className="text-[0.625rem] uppercase tracking-[0.12em] font-semibold" style={{ color: 'var(--color-text-muted)' }}>
                Business Hours
              </p>
              <p className="text-sm mt-2 font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                Monday to Friday — Call for current hours
              </p>
            </div>

            {/* Proud Supplier Badge */}
            <div
              className="mt-6 p-6 rounded-xl"
              style={{
                background: 'linear-gradient(145deg, #FAF7F0 0%, #F5F1E8 100%)',
                border: '1px solid rgba(42,32,24,0.07)',
                boxShadow: '0 8px 28px rgba(42,32,24,0.06), 0 2px 8px rgba(42,32,24,0.04), inset 0 1px 0 rgba(255,255,255,0.3)',
              }}
            >
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                Proud Supplier of the
              </p>
              <a
                href="http://osoyooscottages.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold hover:underline mt-1 inline-block"
                style={{ color: 'var(--color-accent)' }}
              >
                Osoyoos Cottages
              </a>
            </div>

            {/* Workshop Image */}
            <div
              className="mt-8 rounded-xl overflow-hidden"
              style={{
                boxShadow: '0 12px 40px rgba(42,32,24,0.1), 0 4px 12px rgba(42,32,24,0.06)',
              }}
            >
              <img
                src="/images/about-workshop.jpg"
                alt="Truss manufacturing workshop showing precision-built trusses"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
