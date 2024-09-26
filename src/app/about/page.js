"use client";

import { useEffect, useRef, useState } from 'react';
import '../about/about.css';
import Image from 'next/image';
import Image1 from '../about/images/10.webp';
import Image2 from '../about/images/7.webp';
import Image3 from '../about/images/3.webp';
import Image4 from '../about/images/4.webp';
import Image5 from '../about/images/5.webp';
import Image6 from '../about/images/6.webp';
import Image7 from '../about/images/2.webp';
import Image8 from '../about/images/8.webp';
import Image9 from '../about/images/9.webp';
import Image10 from '../about/images/1.webp';
import Spline from '@splinetool/react-spline';
import { gsap } from 'gsap';

export default function AboutPage() {
  
  const sliderRef = useRef(null);
  const sliderWrapperRef = useRef(null);
  const markerWrapperRef = useRef(null);
  const activeSlideRef = useRef(null);

  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const ease = 0.075;

  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const sliderWrapper = sliderWrapperRef.current;
    const markerWrapper = markerWrapperRef.current;
    const activeSlide = activeSlideRef.current;

    if (!sliderWrapper || !markerWrapper || !activeSlide) return;

    const updateMaxScroll = () => {
      setMaxScroll(sliderWrapper.offsetWidth - window.innerWidth);
    };

    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    const updateActiveSliderNumber = (markerMove, markerMoveMax) => {
      const partWidth = markerMoveMax / 10;
      let currentPart = Math.round((markerMove - 70) / partWidth) + 1;
      currentPart = Math.min(10, Math.max(1, currentPart));
      activeSlide.textContent = `${currentPart}/10`;
    };

    const update = () => {
      currentRef.current = lerp(currentRef.current, targetRef.current, ease);
      
      gsap.set(sliderWrapper, {
        x: -currentRef.current,
      });

      const moveRatio = currentRef.current / maxScroll;
      const markerMoveMax = window.innerWidth - markerWrapper.offsetWidth - 170;
      const markerMove = 70 + moveRatio * markerMoveMax;
      
      gsap.set(markerWrapper, {
        x: markerMove,
      });
      
      updateActiveSliderNumber(markerMove, markerMoveMax);
      requestAnimationFrame(update);
    };

    const handleWheel = (e) => {
      targetRef.current += e.deltaY;
      targetRef.current = Math.max(0, Math.min(maxScroll, targetRef.current));
    };

    updateMaxScroll();
    update();

    window.addEventListener('resize', updateMaxScroll);
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('resize', updateMaxScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [maxScroll]);

  return (
    <div className="background-wrapper">
      <Spline
        scene="https://prod.spline.design/tlbc6o8eic5clyWn/scene.splinecode"
        className="spline-background"
      />
      <h1 className="background-title">
      Cinefirm <br></br> A Photography & <br></br> Videography company.
      </h1>
      <div className="content-overlay">
        <div className="marker-wrapper" ref={markerWrapperRef}>
          <div className="marker">
            <div className="grab"></div>
          </div>
          <div className="active-slide" ref={activeSlideRef}>1/10</div>
        </div>

        <div className="slider" ref={sliderRef}>
          <div className="slider-wrapper" ref={sliderWrapperRef}>
            {[Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10].map((imgSrc, idx) => (
              <div className="slide" key={idx}>
                <Image className="Image" src={imgSrc} alt={`Slide ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}