import Javascript from '../assets/images/javascript.png';
import React from '../assets/images/react.png';
import Node from '../assets/images/node.png';
import Tailwind from '../assets/images/tailwind.png';
import Mysql from '../assets/images/mysql.png';
import Mongo from '../assets/images/mongo.png';
import Express from '../assets/images/express.png';
import Github from '../assets/images/github.png';
import Typescript from '../assets/images/typescript.png';

function index() {
  const icons = [
    {
      icon: Javascript,
      alignment: 'md:mt-0',
    },
    {
      icon: React,
      alignment: 'md:mt-12',
    },
    {
      icon: Node,
      alignment: 'md:mt-24',
    },
    {
      icon: Tailwind,
      alignment: 'md:mt-36',
    },
    {
      icon: Mysql,
      alignment: 'md:mt-0',
    },
    {
      icon: Mongo,
      alignment: 'md:mt-12',
    },
    {
      icon: Express,
      alignment: 'md:mt-24',
    },
    {
      icon: Github,
      alignment: 'md:mt-36',
    },
    {
      icon: Typescript,
      alignment: 'md:mt-0',
    },
    {
      icon: Typescript,
      alignment: 'md:mt-12',
    },
    {
      icon: Express,
      alignment: 'md:mt-24',
    },
    {
      icon: Github,
      alignment: 'md:mt-36',
    },
  ];
  return (
    <section className='bg-black text-white mx-auto  space-y-32 py-8 md:py-12 lg:py-20 '>
      <div class='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center my'>
        <h2 class='font-bold text-3xl leading-[1.1] sm:text-3xl md:text-4xl z-10'>
          Technical Skills
        </h2>

        <p class='max-w-[85%] text-zinc-400  sm:text-lg z-10'>
          Technologies and tools I work with
        </p>
      </div>

      <div className='mx-auto grid justify-items-center  gap-y-10 md:gap-0  grid-cols-3  md:max-w-[70rem]  md:grid-cols-4'>
        {icons.map((icons, key) => (
          <div
            key={key}
            className={`w-10 sm:w-14 mt-0 ${icons.alignment} h-10 sm:h-14`}
          >
            <img src={icons.icon} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default index;
