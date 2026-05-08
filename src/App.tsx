import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import TrustSection from './sections/TrustSection';
import About from './sections/About';
import Services from './sections/Services';
import CTABanner from './sections/CTABanner';
import Resources from './sections/Resources';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-[100dvh]">
      <Navigation />
      <main>
        <Hero />
        <TrustSection />
        <About />
        <Services />
        <CTABanner />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
