import React from 'react';

function IconsPalate() {
  const logos = [
    'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=54087&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=108784&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=13679&format=png&color=000000',
  ];
  return (
    <div className='flex space-x-5 '>
      {logos.map((image) => (
        <>
          <img
            src={image}
            className='size-20'
          />
        </>
      ))}
    </div>
  );
}

export default IconsPalate;
