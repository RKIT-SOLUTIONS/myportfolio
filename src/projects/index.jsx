import git from '../assets/images/git.png';
import azure from '../assets/images/azure.png';
import MTM from '../assets/images/mtm.png';
import EMY from '../assets/images/emy.png';
import CFC from '../assets/images/cfc.png';
import RollingBarel from '../assets/images/The rolling barrel.png';
// import Aayush from '../assets/images/Aayush QR.png';
import Torentoblue from '../assets/images/torento blue.png';
import mastermobile from '../assets/images/masterphone.png';
import mission from '../assets/images/mission.png';
import dashboard from '../assets/images/dashboard.png';
import Aayush from '../assets/images/Aayush.png';

function index() {
  const projects = [
    {
      image: EMY,
      title: 'Socila-media Platform',
      description: 'wonder full app for manage social connection in srilanka',
      badge: ['React', '.Net', 'Mysql'],
      icons: [git, azure],
      border: 'border-[#dd3f3f] ',
    },
    {
      image: MTM,

      title: 'Multi Tenant E-commerce Webapplication',
      description:
        'Full-stack marketplace with payment integration and admin dashboard',
      badge: ['React', '.Net', 'Mysql'],
      icons: [git, azure],
      border: ' border-[#22c25c] ',
    },
    {
      image: CFC,
      title: 'Crazy fried chicken',

      description: 'best food ordering website system in UK',
      badge: ['React', 'Node'],
      icons: [git, azure],
      border: ' border-[#f13298] ',
    },
    {
      image: mission,
      title: 'Mission Website',
      description: 'Agape Mission',
      badge: ['React', 'Node'],
      icons: [git],
      border: ' border-[#dd3f3f] ',
    },
    {
      image: Aayush,
      title: 'Aayush Website',
      description: 'Pharmacy Website',
      badge: ['React', 'Node'],
      icons: [git, azure],
      border: ' border-[#22c25c] ',
    },
    {
      image: dashboard,
      title: ' Admin Dashboard',
      description: 'admin dashboard',
      badge: ['React', 'Node'],
      icons: [git, azure],
      border: ' border-[#f13298] ',
    },
  ];

  const Graphics = [
    {
      image: RollingBarel,
    },
    {
      image: Torentoblue,
    },
    {
      image: mastermobile,
    },
    {
      image: Aayush,
    },
  ];
  return (
    <>
      <section class='bg-black text-white mx-auto space-y-32 py-8 md:py-12 md:px-5 lg:py-20'>
        <div class='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 class='font-bold text-3xl  sm:text-3xl md:text-4xl z-10'>
            Featured Projects
          </h2>

          <p class='max-w-[85%] text-zinc-400 sm:text-lg z-10'>
            A showcase of my recent development work
          </p>
        </div>

        <div className='mx-auto grid justify-items-center  lg:gap-x-8 gap-y-14  md:grid-cols-2 md:max-w-[70rem] lg:grid-cols-3 '>
          {projects?.map((data, id) => (
            <a href={data.href}>
              <div
                className='flex flex-col gap-y-2 '
                key={id}
              >
                <div className=' z-10'>
                  <img
                    src={data?.image}
                    className='rounded-tr-xl rounded-tl-xl h-56 w-80'
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
border-opacity-35 ${data.border}  rounded-2xl text-xs font-semibold w-24 h-8`}
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
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default index;
