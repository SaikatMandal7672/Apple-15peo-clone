import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useGSAP } from "@gsap/react";

function Hero() {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  useGSAP(() => {
    if (window.innerWidth < 760) {
      gsap.to(".hero", {
        opacity: 1,
        color: "#d6d6d6",
        delay: 2.5,
        duration: 0.5,
      });
      gsap.to(".cta", {
        opacity: 1,
        delay: 2.5,
        y: -10,
        stagger: 0.1,
        duration: 0.5,
      });
    } else {
      gsap.to(".hero", {
        opacity: 1,
        color: "#d6d6d6",
        delay: 1,
        duration: 0.5,
      });
      gsap.to(".cta", {
        opacity: 1,
        delay: 1,
        y: -10,
        stagger: 0.1,
        duration: 0.5,
      });
    }
  }, []);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 700) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  return (
    <section className="w-full relative bg-back nav-height">
      <div className="md:h-5/6 w-full flex-center flex-col">
        <p className=" hero hero-title">iPhun 15 Pro</p>
        <div className="md:w-10/12 w-9/12 ">
          <video className="heroVID pointer-events-none" autoPlay muted playsInline={true} key={videoSrc} >
            <source src={videoSrc} type="video/mp4"/>
          </video>
        </div>
        <div className="cta flex flex-col items-center opacity-0 translate-y-5">
          <a href="#highlights" className="cta btn">
            Buy
          </a>
          <p className="cta font-normal text-xl">From $999 or dost ki kidney</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
