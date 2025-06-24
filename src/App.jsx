import Hero from './hero';
import Navbar from './components/nav';
import Services from './services';
import Projects from './projects';
import Experiance from './experiance';

function App() {
  return (
    <>
      <div className='px-3'>
        <div className='relative bg-gradient-to-r  from-black to-blue-950 h-full gap-y-12 overflow-hidden'>
          <div className='absolute bottom-10 left-0 size-96 bg-blue-500 rounded-full blur-3xl opacity-50'></div>

          <div className='absolute top-20 right-0 w-48 h-48 bg-blue-600 rounded-full blur-2xl opacity-70'></div>

          <section id='header'>
            <Navbar />
          </section>

          <section id='hero'>
            <Hero />
          </section>
        </div>

        <section id='Projets'>
          <Experiance />
        </section>
        {/* <section id='Services'>
          <Projects />
        </section> */}
      </div>
    </>
  );
}

export default App;
