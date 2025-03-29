import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0); // New state to keep track of which text we're typing

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
        // When one text is finished, move on to the next text after a short delay
        const nextTextTimeout = setTimeout(() => {
          setCurrentText('');
          setCurrentIndex(0);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop back to the first text if needed
        }, 1000); // 1-second delay between texts (you can adjust this)

        return () => clearTimeout(nextTextTimeout);
      }
    }
  }, [currentIndex, textIndex, delay, texts]);

  return <span>{currentText}</span>;
};

export default Typewriter;
