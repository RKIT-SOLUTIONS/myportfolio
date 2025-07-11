import git from '../assets/images/git.png';
import azure from '../assets/images/azure.png';

function index() {
  const projects = [
    {
      image:
        'https://images.unsplash.com/photo-1750365866509-8e1f1cac473e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
      title: 'Socila-media Platform',
      description:
        'Full-stack marketplace with payment integration and admin dashboard',
      badge: ['React', '.Net', 'Mysql'],
      icons: [git, azure],
      border: 'border-[#dd3f3f] ',
    },
    {
      image:
        'https://images.unsplash.com/photo-1750365866509-8e1f1cac473e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
      title: 'Multi Tenant E-commerce Webapplication',
      description:
        'Full-stack marketplace with payment integration and admin dashboard',
      badge: ['React', '.Net', 'Mysql'],
      icons: [git, azure],
      border: ' border-[#22c25c] ',
    },
    {
      image:
        'https://images.unsplash.com/photo-1750365866509-8e1f1cac473e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
      title: 'E-commerce Platform',
      description:
        'Full-stack marketplace with payment integration and admin dashboard',
      badge: ['React', 'Node'],
      icons: [git, azure],
      border: ' border-[#f13298] ',
    },
    {
      image:
        'https://images.unsplash.com/photo-1750365866509-8e1f1cac473e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
      title: 'E-commerce Platform',
      description:
        'Full-stack marketplace with payment integration and admin dashboard',
      badge: ['React', 'Node'],
      icons: [git, azure],
      border: ' border-[#dd3f3f] ',
    },
    {
      image:
        'https://images.unsplash.com/photo-1750365866509-8e1f1cac473e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
      title: 'E-commerce Platform',
      description:
        'Full-stack marketplace with payment integration and admin dashboard',
      badge: ['React', 'Node'],
      icons: [git, azure],
      border: ' border-[#22c25c] ',
    },
    {
      image:
        'https://images.unsplash.com/photo-1750365866509-8e1f1cac473e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
      title: 'E-commerce Platform',
      description:
        'Full-stack marketplace with payment integration and admin dashboard',
      badge: ['React', 'Node'],
      icons: [git, azure],
      border: ' border-[#f13298] ',
    },
  ];
  return (
    <section class='bg-black text-white mx-auto space-y-32 py-8 md:py-12 md:px-5 lg:py-20'>
      <div class='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 class='font-bold text-3xl  sm:text-3xl md:text-4xl z-10'>
          Featured Projects
        </h2>

        <p class='max-w-[85%] text-zinc-400 sm:text-lg z-10'>
          A showcase of my recent development work
        </p>
      </div>

      <div className='mx-auto grid justify-items-center  lg:gap-x-8 gap-y-10  md:grid-cols-2 md:max-w-[70rem] lg:grid-cols-3 '>
        {projects?.map((data, id) => (
          <div
            className='flex flex-col gap-y-2'
            key={id}
          >
            <div className='h-56 w-80 z-10'>
              <img
                src={data?.image}
                className='rounded-tr-xl rounded-tl-xl'
                alt='image'
              />
            </div>
            <div className='font-bold text-md'>{data?.title}</div>
            <div className='text-sm text-zinc-400 w-80'>
              {data?.description}
            </div>
            <div className='flex flex-row gap-x-3'>
              {data?.badge?.map((badge) => (
                <div
                  className={`flex justify-center items-center border
border-opacity-35 ${data.border}  rounded-2xl text-lg font-semibold w-24 h-8`}
                >
                  {badge}
                </div>
              ))}
            </div>

            <div className='flex gap-4'>
              {data?.icons.map((icons) => (
                <img
                  src={icons}
                  className='w-8 h-8'
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default index;
