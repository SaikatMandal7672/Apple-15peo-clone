import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

function Highlights() {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: -20,
      delay: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".titile",
        scrub: 1,
        start: "775x 65%",
        end: "960 65%",
        markers: true,
       
      },
    });
    gsap.to(".link", {
      opacity: 1,
      stagger: .2,
      y: -15,
      ease: "power1.inOut",
      scrollTrigger:{
        trigger: ".link",
        start: "10 65%",
        end: "110px 65%",
        scrub:1,
        markers: true,
      }
      
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-y-hidden h-full bg-zinc common-padding"
    >
      <div className="screen-max-width">
        <div className="w-full mb-12 md:flex items-center justify-between ">
          <h1 id="title" className="a section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film.
              <img className="ml-2 " src={watchImg} alt="" />
            </p>
            <p className="link">
              Watch the event.
              <img className="ml-2 " src={rightImg} alt="" />
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  );
}

export default Highlights;
