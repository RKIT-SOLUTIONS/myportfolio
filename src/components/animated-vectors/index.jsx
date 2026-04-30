/**
 * Animated geometric vector shapes that float across the page.
 * Creates a helium-style abstract geometric atmosphere.
 */
function AnimatedVectors() {
  return (
    <div className='animated-vectors'>
      {/* ===== FLOATING TRIANGLES ===== */}
      <svg className='vector vector-tri-1' viewBox='0 0 100 100' fill='none'>
        <polygon
          points='50,5 95,95 5,95'
          stroke='rgba(20,184,166,0.15)'
          strokeWidth='1.5'
        />
      </svg>

      <svg className='vector vector-tri-2' viewBox='0 0 80 80' fill='none'>
        <polygon
          points='40,5 75,70 5,70'
          stroke='rgba(139,92,246,0.12)'
          strokeWidth='1'
          fill='rgba(139,92,246,0.02)'
        />
      </svg>

      <svg className='vector vector-tri-3' viewBox='0 0 60 60' fill='none'>
        <polygon
          points='30,5 55,55 5,55'
          stroke='rgba(236,72,153,0.1)'
          strokeWidth='1'
        />
      </svg>

      {/* ===== FLOATING HEXAGONS ===== */}
      <svg className='vector vector-hex-1' viewBox='0 0 100 100' fill='none'>
        <polygon
          points='50,3 93,25 93,75 50,97 7,75 7,25'
          stroke='rgba(20,184,166,0.1)'
          strokeWidth='1'
          fill='rgba(20,184,166,0.01)'
        />
      </svg>

      <svg className='vector vector-hex-2' viewBox='0 0 70 70' fill='none'>
        <polygon
          points='35,2 65,18 65,52 35,68 5,52 5,18'
          stroke='rgba(59,130,246,0.12)'
          strokeWidth='1'
        />
      </svg>

      {/* ===== FLOATING CIRCLES ===== */}
      <svg className='vector vector-circle-1' viewBox='0 0 80 80' fill='none'>
        <circle
          cx='40'
          cy='40'
          r='35'
          stroke='rgba(139,92,246,0.08)'
          strokeWidth='1'
          strokeDasharray='8 4'
        />
      </svg>

      <svg className='vector vector-circle-2' viewBox='0 0 50 50' fill='none'>
        <circle
          cx='25'
          cy='25'
          r='20'
          stroke='rgba(20,184,166,0.1)'
          strokeWidth='0.8'
        />
        <circle
          cx='25'
          cy='25'
          r='12'
          stroke='rgba(20,184,166,0.06)'
          strokeWidth='0.5'
        />
      </svg>

      {/* ===== FLOATING DIAMONDS ===== */}
      <svg className='vector vector-diamond-1' viewBox='0 0 60 60' fill='none'>
        <rect
          x='10'
          y='10'
          width='40'
          height='40'
          rx='2'
          stroke='rgba(236,72,153,0.08)'
          strokeWidth='1'
          transform='rotate(45 30 30)'
        />
      </svg>

      <svg className='vector vector-diamond-2' viewBox='0 0 40 40' fill='none'>
        <rect
          x='7'
          y='7'
          width='26'
          height='26'
          stroke='rgba(59,130,246,0.1)'
          strokeWidth='0.8'
          transform='rotate(45 20 20)'
        />
      </svg>

      {/* ===== FLOATING DOTS / PARTICLES ===== */}
      <div className='vector vector-dot-1' />
      <div className='vector vector-dot-2' />
      <div className='vector vector-dot-3' />
      <div className='vector vector-dot-4' />
      <div className='vector vector-dot-5' />
      <div className='vector vector-dot-6' />

      {/* ===== FLOATING LINES ===== */}
      <svg className='vector vector-line-1' viewBox='0 0 200 2' fill='none'>
        <line x1='0' y1='1' x2='200' y2='1' stroke='rgba(20,184,166,0.08)' strokeWidth='1' />
      </svg>

      <svg className='vector vector-line-2' viewBox='0 0 150 2' fill='none'>
        <line x1='0' y1='1' x2='150' y2='1' stroke='rgba(139,92,246,0.06)' strokeWidth='1' />
      </svg>

      {/* ===== CROSS / PLUS SIGNS ===== */}
      <svg className='vector vector-cross-1' viewBox='0 0 30 30' fill='none'>
        <line x1='15' y1='5' x2='15' y2='25' stroke='rgba(20,184,166,0.15)' strokeWidth='1.5' />
        <line x1='5' y1='15' x2='25' y2='15' stroke='rgba(20,184,166,0.15)' strokeWidth='1.5' />
      </svg>

      <svg className='vector vector-cross-2' viewBox='0 0 20 20' fill='none'>
        <line x1='10' y1='3' x2='10' y2='17' stroke='rgba(236,72,153,0.12)' strokeWidth='1' />
        <line x1='3' y1='10' x2='17' y2='10' stroke='rgba(236,72,153,0.12)' strokeWidth='1' />
      </svg>

      <svg className='vector vector-cross-3' viewBox='0 0 24 24' fill='none'>
        <line x1='12' y1='4' x2='12' y2='20' stroke='rgba(59,130,246,0.1)' strokeWidth='1' />
        <line x1='4' y1='12' x2='20' y2='12' stroke='rgba(59,130,246,0.1)' strokeWidth='1' />
      </svg>
    </div>
  );
}

export default AnimatedVectors;
