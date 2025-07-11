import Ruck from '../assets/images/Ruck.jpg';
import Mypic from '../assets/images/mypic.png';
import IconsPalate from '../components/icons-palate';
import Typewriter from '../components/typing-text';

function Hero() {
  return (
    <div className='flex flex-col-reverse gap-y-12 lg:flex-row justify-around sm:py-16 '>
      <div className=' text-6xl lg:text-8xl flex flex-col  justify-center font-Tektur sm:pt-20'>
        <div className='flex flex-col ml-7'>
          <span className='font-bold text-white text-4xl md:text-5xl lg:text-6xl'>
            Hello
          </span>
          <span className='font-bold cursor-pointer text-white'>
            Im Ruck
            <span className='hidden sm:inline-block lg:hidden xl:inline-block'>
              shanth
            </span>
          </span>
          <span className='text-4xl md:text-5xl lg:text-6xl font-semibold w-full lg:w-auto h-20 bg-gradient-to-r from-pink-600 to-orange-500 text-transparent bg-clip-text'>
            <Typewriter
              texts={['Software Developer', 'UI/UX Designer', 'Logo Creater']}
              delay={100}
            ></Typewriter>
          </span>
          <p className='text-zinc-400  text-sm md:text-lg w-auto'>
            Crafting innovative digital solutions with modern technologies.
            <span className='flex flex-col'>
              Specialized in React, Node.js, and cloud architecture.
            </span>
          </p>
        </div>
      </div>

      <div className='hidden relative md:flex justify-center mt-10 rounded-full animate-bounceSmall'>
        <img
          className=' z-0 size-60 sm:size-96  lg:h-[25rem] lg:w-[25rem] xl:h-[28rem] xl:w-[28rem] rounded-full  shadow-flame '
          src={Ruck}
          alt='ruck'
        />
      </div>
      <div className={`md:hidden flex justify-center mt-10`}>
        <a
          href='/Ruckshanth CV.pdf'
          download='Ruckshanth CV.pdf'
        >
          <img
            className=' size-72 sm:size-80 md:size-96  lg:h-[30rem] lg:w-[30rem]'
            src={Mypic}
            alt='ruck'
          />
        </a>
      </div>
    </div>
  );
}

export default Hero;
