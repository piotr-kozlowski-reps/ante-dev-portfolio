import Image from "next/image";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";

import {
  hamburgerIntoXAnimation,
  XIntoHamburgerAnimation,
  hamburgerIntoSeparatorAnimation,
  separatorIntoHamburgerAnimation,
} from "../utils/animations";
import { gsap } from "gsap/dist/gsap";
import useDeviceSize from "../hooks/useDeviceSize";

interface Props {
  // children: React.ReactNode;
}
const Navigation: FunctionComponent<Props> = (props: Props) => {
  ////vars
  let hamburgerIconRef1 = useRef<HTMLDivElement>(null);
  let hamburgerIconRef2 = useRef<HTMLDivElement>(null);
  const [isHamburger, setIsHamburger] = useState(true);
  const [isSmallSizeWidth, setIsSmallSizeWidth] = useState(true);
  const [width, height] = useDeviceSize();

  ////logic
  /** Starting effect that hides clone od hamburger (clone that is used later for making "X" sign) */
  useEffect(() => {
    gsap.to(hamburgerIconRef2.current, { autoAlpha: 0 });
  }, [hamburgerIconRef2]);

  /** Toggling HamburgerIcon and "X" */
  function toggleHamburgerIcon() {
    if (isHamburger) {
      hamburgerIntoXAnimation(hamburgerIconRef1, hamburgerIconRef2);
      setIsHamburger(false);
    }
    if (!isHamburger) {
      XIntoHamburgerAnimation(hamburgerIconRef1, hamburgerIconRef2);
      setIsHamburger(true);
    }
  }

  /** Triggering animation of Hamburger Icon when media query changes */
  useEffect(() => {
    if (isSmallSizeWidth && width >= 768) {
      hamburgerIntoSeparatorAnimation(hamburgerIconRef1, hamburgerIconRef2);
      setIsSmallSizeWidth(false);
    }
    if (!isSmallSizeWidth && width < 768) {
      separatorIntoHamburgerAnimation(hamburgerIconRef1, hamburgerIconRef2);
      setIsSmallSizeWidth(true);
    }
  }, [width, height]);

  ////jsx
  return (
    <React.Fragment>
      <div className="relative">
        <div className="bg-red-500 p-2 absolute top-6 left-6">
          <p>logo</p>
        </div>
        <div className="absolute top-6 right-6">
          <ul className="uppercase text-sm font-quicksand font-semibold text-white">
            <li>home</li>
            <li>about</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
          <div
            className="w-9 h-9 relative transition ease-out hover:scale-110"
            onClick={toggleHamburgerIcon}
          >
            <div className="absolute top-0 left-0" ref={hamburgerIconRef1}>
              <Image
                src={"/hamburger.svg"}
                alt="hamburger icon"
                width={35}
                height={35}
                className="cursor-pointer"
              />
            </div>
            <div className="absolute top-0 left-0" ref={hamburgerIconRef2}>
              <Image
                src={"/hamburger.svg"}
                alt="hamburger icon"
                width={35}
                height={35}
                className="cursor-pointer"
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
