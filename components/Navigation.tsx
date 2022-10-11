import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";

import {
  hamburgerIntoXAnimation,
  XIntoHamburgerAnimation,
  hamburgerIntoSeparatorAnimation,
  separatorIntoHamburgerAnimation,
  revealingElementsAnimation,
} from "../utils/animations";
import { gsap } from "gsap/dist/gsap";
import useDeviceSize from "../hooks/useDeviceSize";

interface Props {
  timeline: gsap.core.Timeline;
  // children: React.ReactNode;
}
const Navigation: FunctionComponent<Props> = ({ timeline }: Props) => {
  ////vars
  let hamburgerIconRef1 = useRef<HTMLDivElement>(null);
  let hamburgerIconRef2 = useRef<HTMLDivElement>(null);
  let homeRef = useRef<HTMLLIElement>(null);
  let aboutRef = useRef<HTMLLIElement>(null);
  let projectsRef = useRef<HTMLLIElement>(null);
  let contactRef = useRef<HTMLLIElement>(null);
  let githubRef = useRef<HTMLDivElement>(null);
  let linkedinRef = useRef<HTMLDivElement>(null);
  const [isHamburger, setIsHamburger] = useState(true);
  const [isSmallSizeWidth, setIsSmallSizeWidth] = useState(true);
  const [width, height] = useDeviceSize();

  const menuLinks = [
    homeRef.current,
    aboutRef.current,
    projectsRef.current,
    contactRef.current,
  ];
  const menuIcons = [githubRef.current, linkedinRef.current];

  ////logic
  function isLessThanOrEqualMdSize() {
    return width < 768 ? true : false;
  }

  /** Starting effect that hides clone od hamburger (clone that is used later for making "X" sign) */
  useEffect(() => {
    gsap.to(hamburgerIconRef2.current, { autoAlpha: 0 });
  }, [hamburgerIconRef2]);

  /** Toggling HamburgerIcon and "X" */
  function toggleHamburgerIcon() {
    if (isHamburger && isLessThanOrEqualMdSize()) {
      hamburgerIntoXAnimation(hamburgerIconRef1, hamburgerIconRef2);
      setIsHamburger(false);
    }
    if (!isHamburger && isLessThanOrEqualMdSize()) {
      XIntoHamburgerAnimation(hamburgerIconRef1, hamburgerIconRef2);
      setIsHamburger(true);
    }
  }

  /** Triggering animation of Hamburger Icon when media query changes */
  useEffect(() => {
    if (isSmallSizeWidth && !isLessThanOrEqualMdSize()) {
      hamburgerIntoSeparatorAnimation(hamburgerIconRef1, hamburgerIconRef2);
      // revealingElementsAnimation(menuLinks, timeline, 0.6);
      // revealingElementsAnimation(menuIcons, timeline, 0);
      setIsSmallSizeWidth(false);
    }
    if (!isSmallSizeWidth && isLessThanOrEqualMdSize()) {
      separatorIntoHamburgerAnimation(hamburgerIconRef1, hamburgerIconRef2);
      setIsSmallSizeWidth(true);
    }
  }, [width, height, isSmallSizeWidth]);

  /** Main timeline animation */
  useEffect(() => {
    if (timeline && menuLinks && menuIcons) {
      revealingElementsAnimation(menuLinks, timeline, 0.6);
      revealingElementsAnimation(menuIcons, timeline, 0);
    }
  }, [timeline, revealingElementsAnimation]);

  ////utils - later delete
  function alertHandler(message: string) {
    alert(message);
  }

  ////jsx
  return (
    <React.Fragment>
      <div className="relative">
        <div className="bg-red-500 p-2 absolute top-6 left-6">
          <p>logo</p>
        </div>
        <div>
          <div className="absolute top-7 right-32" style={{ paddingTop: 1 }}>
            <ul className="uppercase text-xs font-quicksand font-semibold text-white flex gap-4 justify-end items-center">
              <li
                className="cursor-pointer transition ease-out hover:scale-105"
                ref={homeRef}
              >
                <Link href={"/"}>
                  <span onClick={alertHandler.bind(null, "not implemented")}>
                    home
                  </span>
                </Link>
              </li>
              <li
                className="cursor-pointer transition ease-out hover:scale-105"
                ref={aboutRef}
              >
                <Link href={"/"}>
                  <span onClick={alertHandler.bind(null, "not implemented")}>
                    about
                  </span>
                </Link>
              </li>
              <li
                className="cursor-pointer transition ease-out hover:scale-105"
                ref={projectsRef}
              >
                <Link href={"/"}>
                  <span onClick={alertHandler.bind(null, "not implemented")}>
                    projects
                  </span>
                </Link>
              </li>
              <li
                className="cursor-pointer transition ease-out hover:scale-105"
                ref={contactRef}
              >
                <Link href={"/"}>
                  <span onClick={alertHandler.bind(null, "not implemented")}>
                    contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="absolute top-7 right-7 flex justify-end items-center gap-4">
            <div ref={githubRef}>
              <Link href="/">
                <a>
                  <Image
                    src={"/githubIcon.svg"}
                    alt="hamburger icon"
                    width={19}
                    height={19}
                    className="cursor-pointer z-50"
                    onClick={alertHandler.bind(null, "not implemented")}
                  />
                </a>
              </Link>
            </div>
            <div ref={linkedinRef}>
              <Link href="/">
                <a>
                  <Image
                    src={"/linkedinIcon.svg"}
                    alt="hamburger icon"
                    width={19}
                    height={19}
                    className="cursor-pointer z-50"
                    onClick={alertHandler.bind(null, "not implemented")}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div
            className="w-9 h-9 absolute transition ease-out hover:scale-110 md:hover:scale-100 top-6 right-8 "
            onClick={toggleHamburgerIcon}
          >
            <div className="absolute top-0 left-0" ref={hamburgerIconRef1}>
              <Image
                src={"/hamburger.svg"}
                alt="hamburger icon"
                width={35}
                height={35}
                className="cursor-pointer md:cursor-default"
              />
            </div>
            <div className="absolute top-0 left-0" ref={hamburgerIconRef2}>
              <Image
                src={"/hamburger.svg"}
                alt="hamburger icon"
                width={35}
                height={35}
                className="cursor-pointer md:cursor-default"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Navigation;

// import Head from "next/head";
// import * as React from "react";
// // @ts-ignore
// import { Link } from "../../routes";
// import "../../styles/theme.scss";

// interface MainLayoutProps {
//   children: React.ReactNode;
// }

// const MainLayout: React.SFC<MainLayoutProps> = (props: MainLayoutProps) => {
//   const { children } = props;
//   const color = "#EE2560";
//   const production = process.env.NODE_ENV === "production";
//   return (
//     <div>
//       <Head>
//         <title>Next.js 5.0 w/ TypeScript</title>
//         {production ? (
//           <link rel="stylesheet" href="/_next/static/style.css" />
//         ) : null}
//       </Head>
//       <h1>Next.js 5.0 w/ TypeScript</h1>
//       <nav>
//         <dl>
//           <dt>
//             <Link prefetch route="index">
//               <a>Index</a>
//             </Link>
//           </dt>
//           <dd>React Component Page</dd>
//           <dt>
//             <Link prefetch route="redux">
//               <a>Redux</a>
//             </Link>
//           </dt>
//           <dd>Redux Container Page</dd>
//           <dt>
//             <Link prefetch route="story" id="16311462">
//               <a>Next.js 5.0 @ HN</a>
//             </Link>
//           </dt>
//           <dd>Dynamic Routing Page w/ Redux</dd>
//         </dl>
//       </nav>
//       <hr />
//       {children}
//       <style jsx>{`
//         h1 {
//           color: ${color};
//         }
//         nav {
//           dd {
//             font-size: 12px;
//             margin-left: 0;
//             margin-bottom: 0.5em;
//           }
//           padding-bottom: 0.25em;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default MainLayout;

// <div className="bg-slate-600 h-screen w-screen p-6 flex justify-evenly">
//   {/* <div className="flex flex-col items-center justify-center"> */}
//   <div className="flex flex-col justify-center items-center bg-red-600">
//     {/* <div className="flex justify-between items-center w-full"> */}
//     <div className="">
//       <div className="">
//         <p>logo</p>
//       </div>
//       <div>
//         <ul className="flex justify-end gap-4 uppercase text-sm">
//           <li>info</li>
//           <li>portfolio</li>
//           <li>kontakt</li>
//         </ul>
//       </div>
//     </div>
//     <div>
//       <h1 className="text-5xl uppercase">MAIN TITLE</h1>
//     </div>
//     <div>
//       <h3 className="text-2xl">medium title</h3>
//     </div>
//     <div>
//       <p className="text-sm px-4">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
//         architecto provident excepturi et iure aliquam consequuntur soluta
//         molestias cupiditate labore.
//       </p>
//     </div>
//   </div>
//   {/* </div> */}
// </div>;
// {
//   /* <ImageRevealing /> */
// }
