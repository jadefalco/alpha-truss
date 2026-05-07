const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #2B211B 0%, #1F1712 50%, #2B211B 100%)',
      }}
    >
      {/* Top accent line */}
      <div
        className="h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(196,106,58,0.3), transparent)' }}
      />

      {/* Subtle warm glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(196, 106, 58, 0.05) 0%, transparent 70%)',
        }}
      />

      <div className="section-container py-14 lg:py-18 relative z-10">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          {/* Left: Logo + Tagline */}
          <div className="text-center lg:text-left">
            <img
              src="/images/logo.png"
              alt="Alpha Truss Logo"
              className="h-12 w-auto mx-auto lg:mx-0"
              style={{ filter: 'brightness(1.15) drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
            />
            <p
              className="text-sm mt-3 font-medium"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              In Touch and On Time
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              Proud member of WWTABC
            </p>
          </div>

          {/* Right: Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {quickLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[0.6875rem] uppercase tracking-[0.1em] font-medium transition-colors duration-200 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10"
          style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Alpha Truss &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Designed for builders in the Okanagan.
          </p>
        </div>
      </div>
    </footer>
  );
}
