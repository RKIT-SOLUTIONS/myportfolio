import Javascript from '../assets/images/javascript.png';
import ReactImg from '../assets/images/react.png';
import Node from '../assets/images/node.png';
import Tailwind from '../assets/images/tailwind.png';
import Mysql from '../assets/images/mysql.png';
import Mongo from '../assets/images/mongo.png';
import Express from '../assets/images/express.png';
import Github from '../assets/images/github.png';
import Typescript from '../assets/images/typescript.png';
import Figma from '../assets/images/figma.png';
import Nextjs from '../assets/images/nextjs.png';
import Blender from '../assets/images/blender.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Skills() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  const icons = [
    { icon: Javascript, label: 'JavaScript' },
    { icon: ReactImg, label: 'React' },
    { icon: Node, label: 'Node.js' },
    { icon: Tailwind, label: 'Tailwind' },
    { icon: Mysql, label: 'MySQL' },
    { icon: Mongo, label: 'MongoDB' },
    { icon: Express, label: 'Express' },
    { icon: Github, label: 'GitHub' },
    { icon: Figma, label: 'Figma' },
    { icon: Typescript, label: 'TypeScript' },
    { icon: Blender, label: 'Blender' },
    { icon: Nextjs, label: 'Next.js' },
  ];

  return (
    <section className='py-20 md:py-28 lg:py-36 px-6 md:px-16'>
      <div
        ref={titleRef}
        className={`mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center mb-16 reveal-fade-up ${titleVisible ? 'visible' : ''}`}
      >
        <span className='text-teal-400 text-sm uppercase tracking-[0.3em] font-semibold'>Tech Stack</span>
        <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl'>
          Technical Skills
        </h2>
        <p className='max-w-[85%] text-zinc-400 sm:text-lg'>
          Technologies and tools I work with
        </p>
      </div>

      <div
        ref={gridRef}
        className='mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-4xl'
      >
        {icons.map((item, key) => (
          <div
            key={key}
            className={`group flex flex-col items-center gap-3 p-5 rounded-2xl glass-card cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] reveal-scale stagger-${(key % 6) + 1} ${gridVisible ? 'visible' : ''}`}
          >
            <div className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_12px_rgba(20,184,166,0.4)]'>
              <img
                src={item.icon}
                alt={item.label}
                className='w-full h-full object-contain'
              />
            </div>
            <span className='text-[10px] sm:text-xs font-medium text-zinc-500 group-hover:text-white transition-colors duration-300 text-center'>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
