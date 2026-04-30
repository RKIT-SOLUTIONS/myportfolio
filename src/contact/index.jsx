import React from 'react';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Contact() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.1 });

  const contactInfo = [
    {
      icon: <IoMail className='text-lg' />,
      label: 'Email',
      value: 'rkitsolutions.pvt@gmail.com',
      href: 'mailto:rkitsolutions.pvt@gmail.com',
    },
    {
      icon: <FaPhone className='text-base rotate-90' />,
      label: 'Phone',
      value: '+94 756 616 254',
      href: 'tel:+94756616254',
    },
    {
      icon: <FaMapMarkerAlt className='text-lg' />,
      label: 'Location',
      value: 'Periyakamam Eluthoor, Mannar',
      href: null,
    },
  ];

  return (
    <section className='py-20 md:py-28 lg:py-36 px-6 md:px-16'>
      {/* Title */}
      <div
        ref={titleRef}
        className={`mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center mb-16 reveal-fade-up ${titleVisible ? 'visible' : ''}`}
      >
        <span className='text-teal-400 text-sm uppercase tracking-[0.3em] font-semibold'>
          Contact
        </span>
        <h2 className='font-bold text-3xl leading-tight sm:text-4xl md:text-5xl'>
          Get In Touch
        </h2>
        <p className='text-zinc-400 text-base sm:text-lg max-w-[85%]'>
          Let's discuss your next project
        </p>
      </div>

      {/* Contact Grid */}
      <div
        ref={contentRef}
        className={`mx-auto grid gap-12 md:gap-16 md:grid-cols-2 max-w-5xl reveal-fade-up ${contentVisible ? 'visible' : ''}`}
      >
        {/* Contact Info */}
        <div className='flex flex-col gap-y-8'>
          <h4 className='text-2xl md:text-3xl font-bold'>
            Contact Information
          </h4>
          <p className='text-zinc-400 text-sm leading-relaxed'>
            Feel free to reach out. I'm always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </p>
          <div className='flex flex-col gap-y-5'>
            {contactInfo.map((item, i) => {
              const Wrapper = item.href ? 'a' : 'div';
              return (
                <Wrapper
                  key={i}
                  href={item.href}
                  className='group flex items-center gap-x-4 p-4 rounded-xl glass-card transition-all duration-300 hover:-translate-x-1'
                >
                  <div className='flex justify-center items-center w-11 h-11 rounded-lg bg-gradient-to-br from-teal-500/20 to-blue-500/20 text-teal-400 group-hover:from-teal-500/30 group-hover:to-blue-500/30 transition-all duration-300'>
                    {item.icon}
                  </div>
                  <div>
                    <p className='text-xs text-zinc-500 uppercase tracking-wider font-medium'>
                      {item.label}
                    </p>
                    <p className='text-zinc-300 text-sm sm:text-base group-hover:text-white transition-colors'>
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <form className='flex flex-col gap-y-5 w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-1.5'>
              <label className='text-xs text-zinc-500 uppercase tracking-wider font-medium'>
                Name
              </label>
              <input
                type='text'
                placeholder='John Doe'
                name='name'
                className='rounded-xl h-12 bg-white/[0.03] border border-white/10 px-4 text-white placeholder:text-zinc-600 focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all duration-300'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='text-xs text-zinc-500 uppercase tracking-wider font-medium'>
                Contact
              </label>
              <input
                type='text'
                placeholder='+94 XXX XXX XXX'
                name='contact'
                className='rounded-xl h-12 bg-white/[0.03] border border-white/10 px-4 text-white placeholder:text-zinc-600 focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all duration-300'
              />
            </div>
          </div>
          <div className='flex flex-col gap-1.5'>
            <label className='text-xs text-zinc-500 uppercase tracking-wider font-medium'>
              Message
            </label>
            <textarea
              placeholder='Tell me about your project...'
              name='message'
              rows='5'
              className='rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all duration-300 resize-none'
            />
          </div>
          <button
            type='submit'
            className='h-13 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 mt-2'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
