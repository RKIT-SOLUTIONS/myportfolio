import React, { useState } from 'react';
import menu from '../../assets/images/menu.png';
import { IoMdClose } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { IoBagAddOutline } from 'react-icons/io5';
import { PiPhoneCallLight } from 'react-icons/pi';
import { GrCircleAlert } from 'react-icons/gr';
import IconsPalate from '../icons-palate';

function Navbar() {
  const [Toggle, setToggle] = useState(false);

  const handletoggle = () => {
    setToggle(!Toggle);
  };

  return (
    <div>
      <div className=' flex justify-between items-center px-8 md:px-20 bg-black-900  text-white  py-4'>
        <div className='text-3xl'>RKIT</div>

        <div className='hidden lg:block'>
          <IconsPalate />
        </div>

        <button
          className='block lg:hidden text-4xl'
          onClick={handletoggle}
        >
          <img
            src={menu}
            className='size-8'
          />
        </button>
        <div className='hidden lg:block'>
          <a
            href='https://github.com/RKIT-SOLUTIONS/myportfolio/blob/db1cab271c0a7dc49438ad26aceb7c78cb98b08a/public/Ruckshanth%20CV.pdf'
            download='Ruckshanth CV.pdf'
          >
            <button className=' h-auto w-auto p-4 rounded rounded-ss-2xl font-bold rounded-br-2xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ...'>
              DownloadResume
            </button>
          </a>
        </div>
      </div>
      {Toggle && (
        <div className='fixed z-30 top-0 left-0 lg:hidden flex flex-col  text-2xl p-4 gap-y-10 w-full bg-black h-full '>
          <div
            className='flex justify-end text-gray-300 px-3'
            onClick={handletoggle}
          >
            <IoMdClose className='text-[2.8rem]' />
          </div>
          <div className='text-gray-300 flex items-center gap-9'>
            <IoHomeOutline />
            Home
          </div>
          <div className='text-gray-300 flex items-center gap-9'>
            <GrCircleAlert />
            About
          </div>
          <div className='text-gray-300 flex items-center gap-9'>
            <IoBagAddOutline />
            Services
          </div>
          <div className='text-gray-300 flex items-center gap-9'>
            <PiPhoneCallLight />
            Contact
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
