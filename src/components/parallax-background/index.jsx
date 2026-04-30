import { useParallax } from '../../hooks/useParallax';

/**
 * Floating parallax orbs that move at different speeds as you scroll,
 * creating a beautiful depth effect across the page.
 */
function ParallaxBackground() {
  const scrollY = useParallax();

  return (
    <div className='parallax-bg'>
      {/* Large teal orb - top left */}
      <div
        className='parallax-orb orb-1'
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />
      {/* Purple orb - top right */}
      <div
        className='parallax-orb orb-2'
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      />
      {/* Pink orb - mid left */}
      <div
        className='parallax-orb orb-3'
        style={{ transform: `translateY(${scrollY * -0.06}px)` }}
      />
      {/* Blue orb - bottom right */}
      <div
        className='parallax-orb orb-4'
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      {/* Small teal orb - center */}
      <div
        className='parallax-orb orb-5'
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      />
      {/* Noise overlay for texture */}
      <div className='noise-overlay' />
    </div>
  );
}

export default ParallaxBackground;
