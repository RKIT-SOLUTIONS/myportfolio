import Hero from './hero/index';
import Navbar from './components/nav';
import Services from './services';

function App() {
  return (
    <>
      <div className='relative bg-gradient-to-r from-gray-800 to-blue-900 h-full gap-y-12 overflow-hidden'>
        <div className='absolute bottom-10 left-0 size-96 bg-blue-500 rounded-full blur-3xl opacity-50'></div>

        <div className='absolute top-20 right-0 w-48 h-48 bg-blue-600 rounded-full blur-2xl opacity-70'></div>

        <section id='header'>
          <Navbar />
        </section>

        <section id='hero'>
          <Hero />
        </section>
      </div>
      <div className='services'>
        <Services />
      </div>
    </>
  );
}

export default App;
