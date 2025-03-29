import { FaCode } from 'react-icons/fa6';
import { FaFigma } from 'react-icons/fa';
import { TbDeviceMobileCode } from 'react-icons/tb';
import { SiHostinger } from 'react-icons/si';

function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: 'Development',
      description:
        'Coding is the process of writing instructions for computers to follow, using programming languages like Python, JavaScript,C++. These instructions tell the computer how to perform specific tasks',
    },
    {
      icon: <FaFigma />,
      title: 'UI/UX Design',
      description:
        'UI/UX design aims to create products that are both aesthetically pleasing (UI) and user-friendly (UX), enhancing the overall experience for the people using them',
    },
    {
      icon: <TbDeviceMobileCode />,
      title: 'Mobile Application',
      description:
        'A mobile application (or mobile app) is a software program designed to run on mobile devices such as smartphones and tablets.',
    },
    {
      icon: <SiHostinger />,
      title: 'Hosting',
      description:
        'Hosting refers to the service of storing, managing, and making websites or applications accessible on the internet.',
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-9 px-3 gap-4'>
      {services?.map((data, index) => (
        <div
          className='px-4 py-2 bg-white border border-b-[#3debf4] border-b-4 border-gray-200 rounded-lg shadow-2xl cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:shadow-sm hover:shadow-teal-200 duration-700'
          key={index}
        >
          <div className='text-3xl'>{data?.icon}</div>

          <a href='#'>
            <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
              {data?.title}
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
            {data?.description}
          </p>
          <a
            href='#'
            class='inline-flex font-medium items-center text-blue-600 hover:underline'
          >
            See our guideline
            <svg
              class='w-3 h-3 ms-2.5 rtl:rotate-[270deg]'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 18'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
              />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
}
export default Services;
