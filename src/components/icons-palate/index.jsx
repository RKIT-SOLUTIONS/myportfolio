import React from 'react';

function IconsPalate() {
  const logos = [
    {
      icons:
        'https://img.icons8.com/?size=100&id=118467&format=png&color=000000',
      href: '',
      label: 'GitHub',
    },
    {
      icons:
        'https://img.icons8.com/?size=100&id=60444&format=png&color=000000',
      href: 'https://www.linkedin.com/in/mathiyaseelan-ruckshanth/',
      label: 'LinkedIn',
    },
    {
      icons:
        'https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=0000000',
      href: '',
      label: 'GitHub',
    },
    {
      icons:
        'https://img.icons8.com/?size=100&id=RhYNENh5cxlS&format=png&color=000000',
      href: '',
      label: 'Dribbble',
    },
    {
      icons:
        'https://img.icons8.com/?size=100&id=Vnz4A9DdDXEL&format=png&color=000000',
      href: '',
      label: 'Behance',
    },
  ];
  return (
    <div className='flex items-center gap-3'>
      {logos.map((image, key) => (
        <a
          key={key}
          href={image.href}
          target='_blank'
          rel='noopener noreferrer'
          className='group'
        >
          <img
            src={image.icons}
            alt={image.label}
            className='size-9 rounded-full bg-white/10 p-1.5 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]'
          />
        </a>
      ))}
    </div>
  );
}

export default IconsPalate;
