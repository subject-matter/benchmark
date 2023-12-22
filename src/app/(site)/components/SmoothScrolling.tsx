'use client';
import { ReactNode, useEffect, useRef } from 'react';
import { Lenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollingProps {
  children: ReactNode;
}

const SmoothScrolling = ({ children }: SmoothScrollingProps) => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time: any) {
      lenisRef.current?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <Lenis root options={{}}>
      {children}
    </Lenis>
  );
};

export default SmoothScrolling;
