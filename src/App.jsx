import Hero from './hero';
import Navbar from './components/nav';
import ParallaxBackground from './components/parallax-background';
import AnimatedVectors from './components/animated-vectors';
import Experiance from './experiance';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';

function App() {
  return (
    <>
      {/* Fixed parallax background with floating orbs */}
      <ParallaxBackground />

      {/* Animated geometric vectors floating across the page */}
      <AnimatedVectors />

      {/* Main content sits above the parallax bg */}
      <div className='relative z-10'>
        <Navbar />

        <section id='hero'>
          <Hero />
        </section>

        <hr className='section-divider' />

        <section id='about'>
          <Experiance />
        </section>

        <hr className='section-divider' />

        <section id='projects'>
          <Projects />
        </section>

        <hr className='section-divider' />

        <section id='skills'>
          <Skills />
        </section>

        <hr className='section-divider' />

        <section id='contact'>
          <Contact />
        </section>

        {/* Footer */}
        <footer className='relative z-10 py-8 text-center text-zinc-500 text-sm border-t border-white/5'>
          <p>© {new Date().getFullYear()} Ruckshanth. Crafted with ❤️</p>
        </footer>
      </div>
    </>
  );
}

export default App;
