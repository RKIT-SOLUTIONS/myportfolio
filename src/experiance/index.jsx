import React from 'react';
import { FaReact } from 'react-icons/fa6';

function index() {
  const experiances = [
    {
      icon: 'https://img.icons8.com/?size=100&id=11260&format=png&color=000000',
      title: 'Frontend Development',
      border: 'from-black to-red-500',
      description:
        'Expert in React, Vue.js, and modern CSS frameworks for creating responsive user interfaces',
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=9936&format=png&color=000000',
      title: 'Backend Development',
      border: 'from-black to-green-500',
      description:
        'Expert in Node.js, Express, and modern database systems like MongoDB and MySQL for building scalable and secure backend services.',
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=2897&format=png&color=000000',
      title: 'Api Integrations',
      border: 'from-black to-[#f6339a]',
      description:
        'Skilled in RESTful API integrations, ensuring seamless communication between frontend and backend with swagger & postman',
    },
  ];
  return (
    <>
      <section class='bg-black text-white mx-auto  space-y-32 py-8 md:py-12 lg:py-20'>
        <div class='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 class='font-bold text-3xl  sm:text-3xl md:text-4xl'>About Me</h2>

          <p class='max-w-[85%] text-zinc-400  sm:text-lg '>
            Passionate software developer with 1+ years of experience building
            scalable web applications
          </p>
        </div>

        <div class='mx-auto grid justify-items-center gap-x-12 gap-y-6 grid-cols-1 sm:grid-cols-2 md:max-w-[70rem] md:grid-cols-3 px-5 md:px-2'>
          {experiances.map((data, key) => (
            <div
              className={`relative p-[0.4px] rounded-xl bg-gradient-to-t ${data.border}`}
              key={key}
            >
              <div className='bg-black  rounded-xl shadow-2xl overflow-hidden cursor-pointer py-4 px-4'>
                <div className='flex gap-y-4 h-auto flex-col justify-between rounded-md'>
                  <div className='flex justify-center items-center w-16 h-16 bg-gray-300 rounded-md '>
                    <img
                      src={data?.icon}
                      className='w-12 h-12'
                    />
                  </div>

                  <div className='space-y-9'>
                    <h3 className='font-bold text-md'>{data.title}</h3>
                    <p className='text-[13px] text-zinc-400 font-comfortaa'>
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default index;
