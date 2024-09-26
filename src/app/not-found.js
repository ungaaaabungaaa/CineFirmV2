"use client";

import '../app/not-found.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image2 from '../app/about/images/7.webp';
import Image5 from '../app/about/images/5.webp';
import Image6 from '../app/about/images/6.webp';
import Image10 from '../app/about/images/1.webp';
import Spline from '@splinetool/react-spline';

gsap.registerPlugin(ScrollTrigger);

export default function NotFound() {
    
  const wrapperRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = [
                { id: "card-1", endTranslateX: -2500, rotate: 48 },
                { id: "card-2", endTranslateX: -1500, rotate: -35 },
                { id: "card-3", endTranslateX: -2500, rotate: 48 },
                { id: "card-4", endTranslateX: -1500, rotate: -35 },
            ];

            ScrollTrigger.create({
                trigger: ".wrapper-404",
                start: "top top",
                end: "+=1200vh",
                scrub: 1,
                pin: true,
                onUpdate: (self) => {
                    gsap.to(".wrapper-404", {
                        x: `${-7000 * self.progress}px`,
                        duration: 0.5,
                        ease: "power3.out",
                    });
                }
            });

            cards.forEach((card) => {
                ScrollTrigger.create({
                    trigger: `#${card.id}`,
                    start: "top top",
                    end: "+=1200vh",
                    scrub: 1,
                    onUpdate: (self) => {
                        gsap.to(`#${card.id}`, {
                            x: `${card.endTranslateX * self.progress}px`,
                            rotate: `${card.rotate * self.progress * 2}`,
                            duration: 0.5,
                            ease: "power3.out",
                        });
                    }
                });
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
        <div className="container" ref={wrapperRef}>
            <section className="wrapper-404">
                <h1 className="h1_404">404 Page Not Found</h1>
                <div className="card" id="card-1">
                    <Image className="img_404" src={Image2} alt="Not Found Image" />
                </div>
                <div className="card" id="card-2">
                    <Image className="img_404" src={Image5} alt="Not Found Image" />
                </div>
                <div className="card" id="card-3">
                    <Image className="img_404" src={Image6} alt="Not Found Image" />
                </div>
                <div className="card" id="card-4">
                    <Image className="img_404" src={Image10} alt="Not Found Image" />
                </div>
            </section>
            <section className="outro">
                <h1>This Page Does Not Exist.....but that's Okay
                    <br />
                    we'll Get You Right Back On Track!
                    <br></br>
                    <Link href="/">Let's Go Home</Link>
                </h1>
            </section>
        </div>
        <div className="background-spline">
            <Spline
                scene="https://prod.spline.design/9tOboOaPbjCN6WgL/scene.splinecode" 
            />
        </div>
        <div className="background-spline-2">
            <Spline
               scene="https://prod.spline.design/NDhYt0ylqSXzInrA/scene.splinecode" 
            />
        </div>

        </>
    );
}