import React from 'react';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

function index() {
  return (
    <section className='bg-black text-white mx-auto space-y-16 py-8 md:py-12 lg:py-20 px-4'>
      {/* Title */}
      <div className='mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center'>
        <h2 className='font-bold text-3xl leading-tight sm:text-4xl md:text-5xl'>
          Get In Touch
        </h2>
        <p className='text-zinc-400 text-base sm:text-lg max-w-[85%]'>
          Let's discuss your next project
        </p>
      </div>

      {/* Contact Grid */}
      <div className='mx-auto grid gap-y-20 md:gap-20 md:grid-cols-2 max-w-6xl'>
        {/* Contact Info */}
        <div className='flex flex-col gap-y-8'>
          <h4 className='text-2xl md:text-3xl font-bold'>
            Contact Information
          </h4>
          <div className='flex flex-col gap-y-5'>
            <div className='flex items-center gap-x-4'>
              <IoMail className='bg-white text-black rounded-sm size-8 p-1' />
              <span className='text-zinc-400 text-base sm:text-lg'>
                rkitsolutions.pvt@gmail.com
              </span>
            </div>
            <div className='flex items-center gap-x-4'>
              <FaPhone className='bg-white text-black rounded-sm size-8 p-1 rotate-90' />
              <span className='text-zinc-400 text-base sm:text-lg'>
                +94 756 616 254
              </span>
            </div>
            <div className='flex items-center gap-x-4'>
              <FaMapMarkerAlt className='bg-white text-black rounded-sm size-8 p-1' />
              <span className='text-zinc-400 text-base sm:text-lg'>
                Periyakamam Eluthoor Mannar
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className='flex flex-col gap-y-4 w-full max-w-md mx-auto'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            className='rounded-md h-10 bg-black border border-white border-opacity-35 ring-1 ring-white px-3 opacity-60'
          />
          <input
            type='text'
            placeholder='Contact'
            name='contact'
            className='rounded-md h-10 bg-black border border-white border-opacity-35 ring-1 ring-white px-3 opacity-60'
          />
          <textarea
            placeholder='Message'
            name='message'
            rows='4'
            className='rounded-md bg-black border border-white border-opacity-35 ring-1 ring-white px-3 opacity-60 resize-none'
          />
          <button
            type='submit'
            className='h-12 rounded-md bg-white text-black font-bold'
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default index;
