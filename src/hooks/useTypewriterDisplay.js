import { useState, useEffect } from 'react';

const useTypewriterDisplay = (value) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayText('');
    let i = 0;
    const typeText = () => {
      if (i < value.length) {
        setDisplayText(value.substring(0, i + 1));
        i++;
        setTimeout(typeText, 50);
      }
    };
    typeText();
  }, [value]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return { displayText, showCursor };
};

export default useTypewriterDisplay;
