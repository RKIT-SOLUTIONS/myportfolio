import git from '../assets/images/git.png';
import azure from '../assets/images/azure.png';
import MTM from '../assets/images/mtm.png';
import EMY from '../assets/images/emy.png';
import CFC from '../assets/images/cfc.png';
import mission from '../assets/images/mission.png';
import dashboard from '../assets/images/dashboard.png';
import Aayush from '../assets/images/Aayush.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Projects() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  const projects = [
    {
      image: EMY,
      title: 'Social Media Platform',
      description: 'Wonderful app for managing social connections in Sri Lanka',
      badge: ['React', '.Net', 'MySQL'],
      icons: [git, azure],
      accent: '#ef4444',
    },
    {
      image: MTM,
      title: 'Multi Tenant E-commerce Web Application',
      description:
        'Full-stack marketplace with payment integration and admin dashboard',
      badge: ['React', '.Net', 'MySQL'],
      icons: [git, azure],
      accent: '#22c55e',
    },
    {
      image: CFC,
      title: 'Crazy Fried Chicken',
      description: 'Best food ordering website system in UK',
      badge: ['React', 'Node'],
      icons: [git, azure],
      accent: '#ec4899',
    },
    {
      image: mission,
      title: 'Mission Website',
      description: 'Agape Mission community platform',
      badge: ['React', 'Node'],
      icons: [git],
      accent: '#f59e0b',
    },
    {
      image: Aayush,
      title: 'Aayush Website',
      description: 'Modern pharmacy e-commerce website',
      badge: ['React', 'Node'],
      icons: [git, azure],
      accent: '#14b8a6',
    },
    {
      image: dashboard,
      title: 'Admin Dashboard',
      description: 'Analytics and management admin dashboard',
      badge: ['React', 'Node'],
      icons: [git, azure],
      accent: '#8b5cf6',
    },
  ];

  return (
    <section className='py-20 md:py-28 lg:py-36 px-6 md:px-16'>
      <div
        ref={titleRef}
        className={`mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center mb-16 reveal-fade-up ${titleVisible ? 'visible' : ''}`}
      >
        <span className='text-teal-400 text-sm uppercase tracking-[0.3em] font-semibold'>Portfolio</span>
        <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl'>
          Featured Projects
        </h2>
        <p className='max-w-[85%] text-zinc-400 sm:text-lg'>
          A showcase of my recent development work
        </p>
      </div>

      <div
        ref={gridRef}
        className='mx-auto grid justify-items-center gap-8 md:grid-cols-2 md:max-w-6xl lg:grid-cols-3'
      >
        {projects?.map((data, id) => (
          <a
            href={data.href}
            key={id}
            className={`group h-full w-full reveal-fade-up stagger-${(id % 3) + 1} ${gridVisible ? 'visible' : ''}`}
          >
            <div className='glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]'>
              {/* Image */}
              <div className='relative overflow-hidden'>
                <img
                  src={data?.image}
                  className='h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110'
                  alt={data?.title}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              </div>

              {/* Content */}
              <div className='flex flex-col flex-grow p-5 gap-y-3'>
                <h3 className='font-bold text-lg text-white group-hover:text-teal-400 transition-colors duration-300'>
                  {data?.title}
                </h3>
                <p className='text-sm text-zinc-400 flex-grow leading-relaxed'>
                  {data?.description}
                </p>

                {/* Badges */}
                <div className='flex flex-wrap gap-2 pt-3 border-t border-white/5'>
                  {data?.badge?.map((badge, i) => (
                    <span
                      key={i}
                      className='text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-zinc-300 border border-white/5'
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Icons */}
                <div className='flex gap-3 mt-2'>
                  {data?.icons.map((icon, i) => (
                    <img
                      key={i}
                      src={icon}
                      className='w-7 h-7 opacity-50 group-hover:opacity-100 transition-all duration-300'
                      alt='tech'
                    />
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
