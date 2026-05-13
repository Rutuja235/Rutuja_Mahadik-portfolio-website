'use client';

import { useEffect, useState } from 'react';

interface TypedTextProps {
  texts: string[];
  speed?: number;
  delayBetweenTexts?: number;
  cursorBlinkSpeed?: number;
}

export function TypedText({ texts, speed = 50, delayBetweenTexts = 2000, cursorBlinkSpeed = 500 }: TypedTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex(charIndex - 1);
          setDisplayText(currentText.substring(0, charIndex - 1));
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    } else {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setCharIndex(charIndex + 1);
          setDisplayText(currentText.substring(0, charIndex + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenTexts);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTextIndex, texts, speed, delayBetweenTexts]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(interval);
  }, [cursorBlinkSpeed]);

  return (
    <span>
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity ml-1`}>|</span>
    </span>
  );
}
