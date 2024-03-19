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
  return (
    <Lenis root options={{}}>
      {children}
    </Lenis>
  );
};

export default SmoothScrolling;
