import React, { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { IoPricetagsOutline } from 'react-icons/io5';
import { IoBagAddOutline } from 'react-icons/io5';
import { PiPhoneCallLight } from 'react-icons/pi';
import { GrCircleAlert } from 'react-icons/gr';

function Navbar() {
  const [Toggle, setToggle] = useState(false);

  const handletoggle = () => {
    setToggle(!Toggle);
  };

  const list = ['Home', 'About', 'Pricing', 'Services', 'Contact'];

  return (
    <div className=''>
      <div className=' flex justify-between items-center px-20 bg-gray-900  text-white  py-4'>
        <div className='text-3xl'>LOGO</div>
        <div
          id='nav-bar'
          className='hidden lg:flex space-x-16 cursor-pointer font-semibold text-xl'
        >
          {list.map((item, index) => (
            <div className=''>{item}</div>
          ))}
        </div>
        <button
          className='block lg:hidden text-4xl'
          onClick={handletoggle}
        >
          {Toggle ? <IoMdClose /> : <IoMenuOutline />}
        </button>
        <div className='hidden lg:block'>
          <a
            href='/Ruckshanth CV.pdf'
            download='Ruckshanth CV.pdf'
          >
            <button className=' h-auto w-auto p-4 rounded rounded-se-2xl font-bold rounded-bl-2xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ...'>
              DownloadResume
            </button>
          </a>
        </div>
      </div>
      {Toggle && (
        <div className='flex justify-end '>
          <div className=' lg:hidden flex flex-col  text-2xl p-4 gap-y-10  bg-black w-1/2 '>
            <div className='text-gray-300 flex items-center gap-9'>
              <IoHomeOutline />
              Home
            </div>
            <div className='text-gray-300 flex items-center gap-9'>
              <GrCircleAlert />
              About
            </div>
            <div className='text-gray-300 flex items-center gap-9'>
              <IoPricetagsOutline />
              Pricing
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
        </div>
      )}
    </div>
  );
}

export default Navbar;
