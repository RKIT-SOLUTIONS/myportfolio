import Ruck from '../assets/images/NewRK.png';
import Mypic from '../assets/images/mypic.png';
import IconsPalate from '../components/icons-palate';
import Typewriter from '../components/typing-text';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Hero() {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={heroRef}
      className='min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-20 pt-24 pb-16'
    >
      <div className='max-w-7xl w-full flex flex-col-reverse gap-y-12 lg:flex-row items-center justify-between'>
        {/* Text content */}
        <div className={`flex flex-col gap-y-6 max-w-2xl reveal-fade-left ${heroVisible ? 'visible' : ''}`}>
          {/* Greeting badge */}
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit'>
            <span className='w-2 h-2 rounded-full bg-teal-400 animate-pulse' />
            <span className='text-sm text-zinc-400 font-medium'>Available for work</span>
          </div>

          <div className='font-Tektur'>
            <span className='block font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight'>
              Hello
            </span>
            <span className='block font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-tight mt-1'>
              I'm Ruck
              <span className='hidden sm:inline-block lg:hidden xl:inline-block'>
                shanth
              </span>
            </span>
          </div>

          <div className='text-3xl md:text-4xl lg:text-5xl font-semibold h-16 md:h-20'>
            <span className='gradient-text'>
              <Typewriter
                texts={[
                  'Software Developer',
                  'UI/UX Designer',
                  'Logo Creator',
                  'Graphics Designer',
                ]}
                delay={100}
              />
            </span>
          </div>

          <p className='text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg'>
            Crafting innovative digital solutions with modern technologies.
            Specialized in React, Node.js, and cloud architecture.
          </p>

          {/* CTA buttons */}
          <div className='flex flex-wrap gap-4 mt-4'>
            <a href='#projects'>
              <button className='px-8 py-3.5 rounded-full font-semibold bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:shadow-[0_0_35px_rgba(20,184,166,0.4)] transition-all duration-300 transform hover:-translate-y-1'>
                View My Work
              </button>
            </a>
            <a href='#contact'>
              <button className='px-8 py-3.5 rounded-full font-semibold border border-white/15 text-white/80 hover:text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300'>
                Get In Touch
              </button>
            </a>
          </div>

          {/* Social icons - visible on mobile too */}
          <div className='lg:hidden mt-4'>
            <IconsPalate />
          </div>
        </div>

        {/* Profile image - Desktop — Trending 3D Glass Card Design */}
        <div className={`hidden md:flex justify-center reveal-scale ${heroVisible ? 'visible' : ''}`}>
          <div className='hero-card-wrapper animate-float'>
            {/* Rotating gradient mesh border */}
            <div className='hero-card-gradient-border' />

            {/* Glass card container */}
            <div className='hero-card-glass'>
              {/* Image */}
              <img
                className='hero-card-img'
                src={Ruck}
                alt='Ruckshanth - Software Developer'
              />

              {/* Overlay gradient */}
              <div className='hero-card-overlay' />

              {/* Corner decorations */}
              <div className='hero-card-corner hero-card-corner-tl' />
              <div className='hero-card-corner hero-card-corner-br' />

              {/* Floating status badge on card */}
              <div className='hero-card-badge'>
                <span className='hero-card-badge-dot' />
                <span>Every day cooking to make best web recipes</span>
              </div>

              {/* Dot grid decoration */}
              <div className='hero-card-dots'>
                {[...Array(9)].map((_, i) => (
                  <div key={i} className='hero-dot' />
                ))}
              </div>
            </div>

            {/* Floating accent shapes */}
            <div className='hero-accent hero-accent-1'>
              <svg viewBox='0 0 40 40' fill='none' width='40' height='40'>
                <rect x='5' y='5' width='30' height='30' rx='6' stroke='rgba(20,184,166,0.3)' strokeWidth='1.5' />
              </svg>
            </div>
            <div className='hero-accent hero-accent-2'>
              <svg viewBox='0 0 30 30' fill='none' width='30' height='30'>
                <circle cx='15' cy='15' r='12' stroke='rgba(139,92,246,0.25)' strokeWidth='1' strokeDasharray='4 3' />
              </svg>
            </div>
            <div className='hero-accent hero-accent-3'>
              <svg viewBox='0 0 24 24' fill='none' width='24' height='24'>
                <polygon points='12,2 22,22 2,22' stroke='rgba(236,72,153,0.3)' strokeWidth='1' />
              </svg>
            </div>
          </div>
        </div>

        {/* Profile image - Mobile — Compact glass card */}
        <div className={`md:hidden flex justify-center reveal-scale ${heroVisible ? 'visible' : ''}`}>
          <div className='relative'>
            <div className='hero-card-gradient-border' style={{ borderRadius: '20px' }} />
             <div className='hero-card-glass'>
              {/* Image */}
              <img
                className='hero-card-img'
                src={Ruck}
                alt='Ruckshanth - Software Developer'
              />

              {/* Overlay gradient */}
              <div className='hero-card-overlay' />

              {/* Corner decorations */}
              <div className='hero-card-corner hero-card-corner-tl' />
              <div className='hero-card-corner hero-card-corner-br' />

              {/* Floating status badge on card */}
              <div className='hero-card-badge'>
                <span className='hero-card-badge-dot' />
                <span>Every day cooking to make best web recipes</span>
              </div>

              {/* Dot grid decoration */}
              <div className='hero-card-dots'>
                {[...Array(9)].map((_, i) => (
                  <div key={i} className='hero-dot' />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
