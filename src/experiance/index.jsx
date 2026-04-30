import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Experiance() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 });

  const experiances = [
    {
      icon: 'https://img.icons8.com/?size=100&id=11260&format=png&color=000000',
      title: 'Frontend Development',
      accent: '#ef4444',
      description:
        'Expert in React, Vue.js, and modern CSS frameworks for creating responsive user interfaces',
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=9936&format=png&color=000000',
      title: 'Backend Development',
      accent: '#22c55e',
      description:
        'Expert in Node.js, Express, and modern database systems like MongoDB and MySQL for building scalable and secure backend services.',
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=2897&format=png&color=000000',
      title: 'API Integrations',
      accent: '#ec4899',
      description:
        'Skilled in RESTful API integrations, ensuring seamless communication between frontend and backend with Swagger & Postman',
    },
  ];

  return (
    <section className='py-20 md:py-28 lg:py-36 px-6 md:px-16'>
      <div
        ref={titleRef}
        className={`mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center mb-16 reveal-fade-up ${titleVisible ? 'visible' : ''}`}
      >
        <span className='text-teal-400 text-sm uppercase tracking-[0.3em] font-semibold'>What I Do</span>
        <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl'>About Me</h2>
        <p className='max-w-[85%] text-zinc-400 sm:text-lg'>
          Passionate software developer with 3+ years of experience building
          scalable web applications
        </p>
      </div>

      <div
        ref={cardsRef}
        className='mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:max-w-5xl lg:grid-cols-3'
      >
        {experiances.map((data, key) => (
          <div
            className={`glass-card rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] group reveal-fade-up stagger-${key + 1} ${cardsVisible ? 'visible' : ''}`}
            key={key}
            style={{ '--accent': data.accent }}
          >
            <div className='flex gap-y-5 flex-col'>
              <div className='flex justify-center items-center w-14 h-14 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all duration-300 group-hover:shadow-[0_0_20px_var(--accent,rgba(255,255,255,0.1))]'
                   style={{ boxShadow: `0 0 0px ${data.accent}00` }}>
                <img
                  src={data?.icon}
                  className='w-9 h-9'
                  alt={data.title}
                />
              </div>

              <div className='space-y-3'>
                <h3 className='font-bold text-lg group-hover:text-teal-400 transition-colors duration-300'>
                  {data.title}
                </h3>
                <p className='text-sm text-zinc-400 leading-relaxed font-comfortaa'>
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiance;
