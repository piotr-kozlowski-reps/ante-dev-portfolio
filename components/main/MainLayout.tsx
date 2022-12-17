import Image from "next/image";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";

import ImageRevealing from "./ImageRevealing";
import { gsap } from "gsap/dist/gsap";
import Navigation from "../Navigation";
import useDeviceSize from "../../hooks/useDeviceSize";

interface Props {
  // children: React.ReactNode;
}
const MainLayout: FunctionComponent<Props> = (props: Props) => {
  const mouseRef = useRef(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const footerBackgroundRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [width, height] = useDeviceSize();
  const [tl, setTl] = useState(() => gsap.timeline());

  /** Main timeline */
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.fromTo(
        mainContainerRef.current!,
        { alpha: 0, x: "-10%" },
        { alpha: 1, x: 0, duration: 0.5 }
      ).to(
        footerBackgroundRef.current!,
        {
          clipPath: "polygon(65% 50%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)",
          duration: 0.3,
        },
        "-=0.3"
      );
    });
    return () => {
      ctx.revert();
    };
  }, [mouseRef, tl]);

  /** Mouse teasing animation */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(mouseRef.current, {
        y: -3,
        autoAlpha: 0.4,
        scale: 0.99,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        yoyoEase: "power4.in",
      });
    });
    return () => {
      ctx.revert();
    };
  }, [mouseRef]);

  return (
    <React.Fragment>
      {/* landingPage */}
      <div
        // style={{
        //   backgroundImage: `url("/temporary-bg/iPhone14ProMax-1.jpg")`,
        // }}
        className="h-screen flex flex-col justify-between bg-background-1 relative"
      >
        <div
          className="absolute h-screen bg-no-repeat bg-cover bg-center top-0 left-0 right-0 bottom-0"
          style={{
            backgroundImage: `url("/temporary-bg/bg-landing-page.jpg")`,
          }}
          ref={mainContainerRef}
        ></div>
        <div className="text-white absolute grid place-items-center h-screen w-full text-5xl">
          <div>
            <div>jeden text</div>
            <div>drugi text</div>
          </div>
        </div>
        <Navigation timeline={tl} footerRef={footerRef} />
        <div className="flex justify-center items-center">
          {/* <ImageRevealing /> */}
        </div>
        <div className="relative bg-background-1" ref={footerRef}>
          <div
            className="w-full absolute -bottom-1 h-24 bg-background-2 clip-path-footerStartStatePath"
            ref={footerBackgroundRef}
          >
            {/* <img src="/landingPageFooter.svg" className="w-full" /> */}
          </div>
          <div
            className="absolute bottom-2 flex justify-center items-center w-full"
            ref={mouseRef}
          >
            {width < 768 ? (
              <Image
                src={"/oneFingerScroll.svg"}
                alt="Scroll, please"
                width={30}
                height={30}
                className="cursor-pointer md:cursor-default"
              />
            ) : (
              <Image
                src={"/mouse.svg"}
                alt="Scroll, please"
                width={35}
                height={35}
                className="cursor-pointer md:cursor-default"
              />
            )}
          </div>
        </div>
      </div>
      <div className="text-5xl bg-background-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          at natus consectetur facere cupiditate commodi dolorem voluptatum
          totam impedit iste ab a qui eaque fugit, nam aspernatur dolor
          voluptatibus nostrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          at natus consectetur facere cupiditate commodi dolorem voluptatum
          totam impedit iste ab a qui eaque fugit, nam aspernatur dolor
          voluptatibus nostrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          at natus consectetur facere cupiditate commodi dolorem voluptatum
          totam impedit iste ab a qui eaque fugit, nam aspernatur dolor
          voluptatibus nostrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          at natus consectetur facere cupiditate commodi dolorem voluptatum
          totam impedit iste ab a qui eaque fugit, nam aspernatur dolor
          voluptatibus nostrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          at natus consectetur facere cupiditate commodi dolorem voluptatum
          totam impedit iste ab a qui eaque fugit, nam aspernatur dolor
          voluptatibus nostrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          at natus consectetur facere cupiditate commodi dolorem voluptatum
          totam impedit iste ab a qui eaque fugit, nam aspernatur dolor
          voluptatibus nostrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          at natus consectetur facere cupiditate commodi dolorem voluptatum
          totam impedit iste ab a qui eaque fugit, nam aspernatur dolor
          voluptatibus nostrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          at natus consectetur facere cupiditate commodi dolorem voluptatum
          totam impedit iste ab a qui eaque fugit, nam aspernatur dolor
          voluptatibus nostrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          at natus consectetur facere cupiditate commodi dolorem voluptatum
          totam impedit iste ab a qui eaque fugit, nam aspernatur dolor
          voluptatibus nostrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          at natus consectetur facere cupiditate commodi dolorem voluptatum
          totam impedit iste ab a qui eaque fugit, nam aspernatur dolor
          voluptatibus nostrum.
        </p>
      </div>
      ;
    </React.Fragment>
  );
};
export default MainLayout;
