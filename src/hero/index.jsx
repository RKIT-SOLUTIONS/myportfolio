import React from 'react';
import Ruck from '../assets/images/Ruck.jpg';
import Typewriter from '../components/typing-text';
import IconsPalate from '../components/icons-palate';

function Hero() {
  return (
    <div className='flex flex-col-reverse gap-y-12 lg:flex-row justify-around py-16 '>
      <div className='ml-7 text-6xl lg:text-8xl flex flex-col  justify-center font-Tektur '>
        <span className='font-bold text-[#4ebbe6] text-6xl lg:text-5xl'>
          Hello
        </span>
        <span className='font-bold'>
          Im Ruck<span className='hidden xl:inline-block'>shanth</span>
        </span>
        <span className='text-5xl lg:text-6xl font-semibold text-[#5eead8]'>
          <Typewriter
            texts={['Software Developer', 'UI/UX Designer', 'Logo Creater']}
            delay={100}
          ></Typewriter>
        </span>
        <IconsPalate />
      </div>
      <div className='flex justify-center mt-10 rounded-full '>
        <img
          className='size-80 lg:h-[28rem] lg:w-[28rem] rounded-full shadow-flame '
          src={Ruck}
        />
      </div>
    </div>
  );
}

export default Hero;
