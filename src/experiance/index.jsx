import React from 'react';
import { FaReact } from 'react-icons/fa6';

function index() {
  const experiances = [
    {
      icon: 'https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000',
      title: 'React',
      persentage: 80,
      description:
        'A JavaScript library for building dynamic UIs using reusable components.',
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000',
      title: 'Figma',
      persentage: 80,
      description:
        'A collaborative, web-based design tool for creating UI/UX prototypes in real time.',
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000',
      title: 'Tailwind CSS',
      persentage:'full',
      description:
        'A utility-first CSS framework for fast and customizable UI design.',
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000',
      title: 'Node JS',
      persentage: 52,
      description:
        'A JavaScript runtime for building scalable server-side applications.',
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000',
      title: 'My SQL',
      persentage: 72,
      description:
        'An open-source relational database system for managing structured application data.',
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000',
      title: 'Express JS',
      persentage: 48,
      description:
        'A lightweight Node.js framework for building APIs and web servers efficiently.',
    },
  ];
  return (
    <>
      <section class=' mx-auto  space-y-6 py-8 md:py-12 lg:py-20'>
        <div class='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 class='font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
            Skills
          </h2>

          <p class='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            The product can personalize user experiences by understanding
            individual preferences and tailoring recommendations or content
            based on user behavior and historical data.
          </p>
        </div>

        <div class='mx-auto grid justify-center gap-x-7 gap-y-6 sm:grid-cols-2 md:max-w-[70rem] md:grid-cols-3'>
          {experiances.map((data, key) => (
            <div
              class='relative overflow-hidden cursor-pointer  border-gray-200 rounded-lg shadow-2xl hover:shadow-sm hover:shadow-teal-200 duration-700 py-2 px-4 '
              key={key}
            >
              <div class='flex gap-y-4 h-[180px] flex-col justify-between rounded-md'>
                <img
                  src={data?.icon}
                  className='size-16'
                />

                <div class='space-y-2 '>
                  <h3 class='font-bold text-md'>{data.title}</h3>
                  <p class='text-[13px] text-zinc-400 font-comfortaa'>
                    {data.description}
                  </p>
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-0  border border-b-[#3debf4] border-b-4 w-${data.persentage}`}
              ></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default index;
