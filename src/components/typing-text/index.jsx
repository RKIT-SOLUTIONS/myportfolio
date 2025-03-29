import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < texts.length) {
      if (currentIndex < texts[textIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText(
            (prevText) => prevText + texts[textIndex][currentIndex]
          );
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
      } else {
        const nextTextTimeout = setTimeout(() => {
          setCurrentText('');
          setCurrentIndex(0);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000);

        return () => clearTimeout(nextTextTimeout);
      }
    }
  }, [currentIndex, textIndex, delay, texts]);

  return <span>{currentText}</span>;
};

export default Typewriter;
