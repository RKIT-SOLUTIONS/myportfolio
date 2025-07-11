import React from 'react';

function IconsPalate() {
  const logos = [
    'https://img.icons8.com/?size=100&id=118467&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=60444&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=0000000',
    'https://img.icons8.com/?size=100&id=RhYNENh5cxlS&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=Vnz4A9DdDXEL&format=png&color=000000',
  ];
  return (
    <div className=' whitespace-nowrap max-w-screen-md '>
      <div className='flex my-3 space-x-6  justify-center cursor-pointer'>
        {logos.map((image, key) => (
          <>
            <img
              key={key}
              src={image}
              className='size-12 inline-block rounded-full bg-[#a1a1aa] p-1 z-10 hover:bg-gradient-to-r from-pink-500 hover:to-orange-500 ...  '
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default IconsPalate;
