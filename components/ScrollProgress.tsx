'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollProgressProps {
  color?: string;
}

export function ScrollProgress({ color = 'from-cyan-400 to-purple-500' }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={progressRef}
      className={`fixed top-0 left-0 h-1 bg-gradient-to-r ${color} z-50 transition-all duration-300`}
      style={{ width: `${progress}%` }}
    />
  );
}
