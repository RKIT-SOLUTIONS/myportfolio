import Hero from './hero';
import Navbar from './components/nav';
import Experiance from './experiance';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';
import defaltvetor from './assets/images/defaltvetor.svg';
import vector_2 from './assets/images/vector_2.svg';
import vector_3 from './assets/images/vector_3.svg';
import vector_1 from './assets/images/vector_1.svg';

function App() {
  return (
    <>
      <div className='overflow-hidden relative'>
        <div className=' bg-black h-full gap-y-12 overflow-hidden'>
          <section id='header'>
            <Navbar />
          </section>
          <section id='hero'>
            <Hero />
          </section>
          <div className='absolute hidden md:block top-[55rem] -left-48 lg:top-[32rem] lg:-left-50 xl:top-[35rem] xl:-left-56'>
            <img
              src={defaltvetor}
              alt=''
              className='md:w-[23rem] md:h-[23rem] lg:w-[30rem] lg:h-[30rem] xl:w-[32rem] xl:h-[32rem] '
            />
          </div>
          <hr className='absolute hidden md:block top-[62rem] right-[0rem] lg:top-[42rem] lg:-right-[1rem] xl:top-[46rem] xl:right-[1rem] border-gray-400 border border-opacity-30 w-[83%]' />
        </div>

        <section id='about'>
          <Experiance />
        </section>
        <section id='projects'>
          <div className='absolute top-[108rem] -right-36 md:top-[90rem] md:-right-32 lg:top-[70rem] lg:-right-48 z-0'>
            <img
              src={vector_2}
              alt=''
              className=' w-[20rem] h-[20rem] md:w-[23rem] md:h-[23rem] lg:w-[33rem] lg:h-[33rem] '
            />
          </div>
          <Projects />
        </section>
        <hr className='absolute  md:top-[194rem] lg:top-[158rem]  border-gray-400 border-dashed border-opacity-50 w-full rotate-6' />
        <section id='skils'>
          <div className='absolute md:top-[190rem] lg:top-[151rem] left-0 z-0'>
            <img
              src={vector_1}
              alt=''
              className='md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem]'
            />
          </div>
          <Skills />
          <div className='absolute hidden md:block top-[204rem] -right-10 z-0'>
            <img
              src={vector_3}
              alt=''
              className='w-[15rem] h-[15rem]'
            />
          </div>
        </section>
        <hr className='absolute md:top-[248rem] lg:top-[215rem] border-gray-400 border-dashed  border-opacity-50 w-full rotate-6' />
        <section id='contact'>
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
