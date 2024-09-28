"use client";

import '../portfolio/portfolio.css';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { createRoot } from 'react-dom/client';
import Image1 from '../portfolio/Images/1.webp';
import Image2 from '../portfolio/Images/2.webp';
import Image3 from '../portfolio/Images/3.webp';
import Image4 from '../portfolio/Images/4.webp';
import Image5 from '../portfolio/Images/5.webp';
import Image6 from '../portfolio/Images/6.webp';
import Image7 from '../portfolio/Images/7.webp';
import Image8 from '../portfolio/Images/8.webp';
import Image9 from '../portfolio/Images/9.webp';
import Image10 from '../portfolio/Images/10.webp';

const sliderContent = [
  "LuminaPad",
  "PulseEar",
  "ZenithWatch",
  "AeroCharge",
  "NimbusCam",
  "EclipseDrive",
  "TerraHub",
  "QuantumKey",
  "MeshRouter",
  "AuraBeam",
];

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10];

export default function PortfolioPage() {
  const totalImages = 10;
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);

  useEffect(() => {
    // Initialize the first two images
    if (firstImageRef.current) {
      const root = createRoot(firstImageRef.current);
      root.render(
        <Image
          src={images[0]}
          alt="Portfolio First Image"
          layout="fill"
          objectFit="cover"
        />
      );
    }
    if (secondImageRef.current) {
      const root = createRoot(secondImageRef.current);
      root.render(
        <Image
          src={images[1]}
          alt="Portfolio Second Image"
          layout="fill"
          objectFit="cover"
        />
      );
    }

    function splitTextIntoSpans(selector) {
      let elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        let text = element.innerText;
        let splitText = text
          .split("")
          .map(function (char) {
            return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
          })
          .join("");
        element.innerHTML = splitText;
      });
    }

    gsap.to(".slide-next-img", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.5,
      ease: "power3.out",
      delay: 1,
    });

    function handleClick() {
      if (isAnimating) return;
      setIsAnimating(true);

      splitTextIntoSpans(".slider-content-active h4");

      gsap.to(".slide-active img", {
        scale: 2,
        duration: 2,
        ease: "power3.out",
      });

      gsap.to(".slider-content-active h4 span", {
        top: "-175px",
        stagger: 0.05,
        ease: "power3.out",
        duration: 0.5,
        onComplete: () => {
          gsap.to(".slider-content-active", {
            top: "-175px",
            duration: 0.25,
            ease: "power3.out",
          });
        },
      });

      splitTextIntoSpans(".slider-content-next h4");
      gsap.set(".slider-content-next h4 span", { top: "200px" });

      gsap.to(".slider-content-next", {
        top: "0",
        duration: 1.125,
        ease: "power3.out",
        onComplete: function () {
          document.querySelector(".slider-content-active")?.remove();
          gsap.to(".slider-content-next h4 span", {
            top: 0,
            stagger: 0.05,
            ease: "power3.out",
            duration: 0.5,
          });

          const nextContent = document.querySelector(".slider-content-next");
          if (nextContent) {
            nextContent.classList.remove("slider-content-next");
            nextContent.classList.add("slider-content-active");
            nextContent.style.top = "0";
          }

          setCurrentContentIndex((prevIndex) => (prevIndex + 1) % totalImages);

          const nextContentText = sliderContent[(currentContentIndex + 1) % totalImages];
          const newContentHTML = `<div class="slider-content-next" style="top: 200px;"><h4>${nextContentText}</h4></div>`;
          document
            .querySelector(".slider-content")
            ?.insertAdjacentHTML("beforeend", newContentHTML);
        },
      });

      setCurrentImageIndex((prevIndex) => (prevIndex % totalImages) + 1);

      const newSlideHTML = `
      <div class="slide-next">
        <div class="slide-next-img">
          <div id="next-image-container-${currentImageIndex}"></div>
        </div>
      </div>
    `;

      document
        .querySelector(".slider")
        ?.insertAdjacentHTML("beforeend", newSlideHTML);

      // Use createRoot to render the Next.js Image component
      const nextImageContainer = document.getElementById(`next-image-container-${currentImageIndex}`);
      if (nextImageContainer) {
        const root = createRoot(nextImageContainer);
        root.render(
          <Image
            src={images[currentImageIndex]}
            alt={`Portfolio Image ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="cover"
          />
        );
      }

      gsap.to(".slider .slide-next:last-child .slide-next-img", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      });

      const slideNextImg = document.querySelector(".slide-next-img");
      if (slideNextImg) {
        gsap.to(slideNextImg, {
          width: "100vw",
          height: "100vh",
          duration: 2,
          ease: "power3.out",
          onComplete: function () {
            const currentActiveSlide = document.querySelector(".slide-active");
            if (currentActiveSlide) {
              currentActiveSlide.remove();
            }

            const nextSlide = document.querySelector(".slide-next");
            if (nextSlide) {
              nextSlide.classList.remove("slide-next");
              nextSlide.classList.add("slide-active");

              const nextSlideImg = nextSlide.querySelector(".slide-next-img");
              if (nextSlideImg) {
                nextSlideImg.classList.remove("slide-next-img");
              }
            }

            setTimeout(() => {
              setIsAnimating(false);
            }, 500);
          },
        });
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isAnimating, currentContentIndex, currentImageIndex]);

  return (
    <>
      <div className="slider">
        <div className="slide-active">
          <div ref={firstImageRef}></div>
        </div>

        <div className="slide-next">
          <div className="slide-next-img">
            <div ref={secondImageRef}></div>
          </div>
        </div>
      </div>

      <div className="slider-content">
        <div className="slider-content-active">
          <h4>{sliderContent[0]}</h4>
        </div>
        <div className="slider-content-next">
          <h4>{sliderContent[1]}</h4>
        </div>
      </div>
    </>
  );
}