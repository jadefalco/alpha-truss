import { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 64;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: 'var(--nav-height)',
          backgroundColor: scrolled ? 'rgba(245, 241, 232, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px) saturate(1.2)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(42,32,24,0.08)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 20px rgba(42,32,24,0.06)' : 'none',
        }}
      >
        <div className="section-container flex items-center justify-between h-full">
          {/* Logo — larger and more prominent */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src="/images/logo.png"
              alt="Alpha Truss"
              className="h-[52px] w-auto"
              style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.06))' }}
            />
            <span
              className="hidden sm:inline text-sm font-bold uppercase tracking-[0.14em]"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Alpha Truss
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] transition-colors duration-200 relative pb-1"
                style={{
                  color: activeSection === link.href.replace('#', '')
                    ? 'var(--color-accent)'
                    : 'var(--color-text-primary)',
                  borderBottom: activeSection === link.href.replace('#', '')
                    ? '2px solid var(--color-accent)'
                    : '2px solid transparent',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary text-[0.6875rem] py-2.5 px-5 hidden sm:inline-flex"
            >
              Get a Quote
            </a>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={24} style={{ color: 'var(--color-text-primary)' }} />
              ) : (
                <Menu size={24} style={{ color: 'var(--color-text-primary)' }} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-8"
          style={{
            background: 'linear-gradient(160deg, #F5F1E8 0%, #EDE7DA 100%)',
            paddingTop: 'var(--nav-height)',
          }}
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-display text-2xl font-semibold transition-colors duration-200"
              style={{
                color: activeSection === link.href.replace('#', '')
                  ? 'var(--color-accent)'
                  : 'var(--color-text-primary)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="btn-primary mt-4">
            Get a Quote
          </a>
        </div>
      )}
    </>
  );
}
