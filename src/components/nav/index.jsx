import React, { useState, useEffect, useCallback } from 'react';
import { HiMiniSquares2X2 } from "react-icons/hi2";
import logo from '../../assets/images/rk logo white.png';
import { IoMdClose } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { IoBagAddOutline } from 'react-icons/io5';
import { PiPhoneCallLight } from 'react-icons/pi';
import { GrCircleAlert } from 'react-icons/gr';
import IconsPalate from '../icons-palate';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navLinks = [
    { href: '#hero', icon: <IoHomeOutline />, label: 'Home' },
    { href: '#about', icon: <GrCircleAlert />, label: 'About' },
    { href: '#projects', icon: <IoBagAddOutline />, label: 'Projects' },
    { href: '#contact', icon: <PiPhoneCallLight />, label: 'Contact' },
  ];

  return (
    <>
      {/* Main navbar bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-black/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'py-5 bg-transparent'
      }`}>
        <div className='flex justify-between items-center px-6 md:px-16 lg:px-20 max-w-7xl mx-auto'>
          {/* Logo */}
          <a href="#hero"className='text-3xl font-bold font-Tektur gradient-text tracking-wider hover:opacity-80 transition-opacity'>
           <img className='size-14 sm:size-16 md:size-20 lg:size-24' src={logo} alt="" />
          </a>

          {/* Desktop nav links */}
          <div className='hidden lg:flex items-center gap-8'>
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className='text-sm text-zinc-400 hover:text-white transition-colors duration-300 uppercase tracking-widest font-medium'
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop social + CTA */}
          <div className='hidden lg:flex items-center gap-6'>
            <IconsPalate />
            <a
              href='https://raw.githubusercontent.com/RKIT-SOLUTIONS/myportfolio/main/public/RuckResume.pdf'
              download='RuckResume.pdf'
            >
              <button className='glow-btn px-6 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] transition-all duration-300 transform hover:-translate-y-0.5'>
                Download Resume
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className='relative z-[60] block lg:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-white/10'
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <IoMdClose className='text-3xl text-white' />
            ) : (
              <HiMiniSquares2X2 className='text-3xl text-white/80' />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay — rendered as sibling so z-index is independent */}
      <div
        className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Background */}
        <div
          className='absolute inset-0 bg-[#030014]/98 backdrop-blur-2xl'
          onClick={closeMenu}
        />

        {/* Menu content */}
        <div className='relative flex flex-col h-full'>
          {/* Header spacer — keeps nav links below the navbar */}
          <div className='h-24 flex-shrink-0' />

          {/* Nav links */}
          <div className='flex flex-col px-8 gap-2'>
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={closeMenu}
                className='mobile-nav-link group flex items-center gap-5 px-4 py-4 rounded-2xl text-xl text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-300'
                style={{ transitionDelay: isOpen ? `${(i + 1) * 80}ms` : '0ms' }}
              >
                <span className='flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-teal-400 group-hover:bg-teal-500/15 group-hover:text-teal-300 transition-all duration-300 text-lg'>
                  {link.icon}
                </span>
                <span className='font-medium tracking-wide'>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className='px-12 mt-10'>
            <p className='text-xs text-zinc-600 uppercase tracking-widest font-semibold mb-4'>Connect</p>
            <IconsPalate />
          </div>

          {/* Download Resume — pinned to bottom */}
          <div className='mt-auto px-8 pb-10'>
            <a
              href='https://raw.githubusercontent.com/RKIT-SOLUTIONS/myportfolio/main/public/RuckResume.pdf'
              download='RuckResume.pdf'
              className='block'
              onClick={closeMenu}
            >
              <button className='w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 text-white text-lg hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all duration-300 active:scale-[0.98]'>
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
