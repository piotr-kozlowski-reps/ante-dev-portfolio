import Image from "next/image";
import React, { FunctionComponent, useEffect, useRef } from "react";

import {
  mouseOverHandler,
  mouseOutHandler,
  hamburgerIntoXAnimation,
} from "../../utils/animations";
import ImageRevealing from "./ImageRevealing";
import { gsap } from "gsap/dist/gsap";
import Navigation from "../Navigation";
import EasePack from "gsap/dist/EasePack";

interface Props {
  // children: React.ReactNode;
}
const MainLayout: FunctionComponent<Props> = (props: Props) => {
  const landingPageTl = gsap.timeline();

  // let hamburgerIconRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log(hamburgerIconRef);

  // hamburgerIntoXAnimation.bind(null, hamburgerIconRef);
  //   gsap.fromTo(
  //     hamburgerIconRef.current,
  //     { scaleY: 1, scaleX: 1, rotateZ: 0 },
  //     {
  //       // scaleY: 10,
  //       // scaleX: 10,
  //       scaleY: 0.25,
  //       scaleX: 1.1,
  //       rotateZ: 45,
  //       // ease: Power4.easeOut,
  //       duration: 0.4,
  //     }
  //   );
  // }, [hamburgerIconRef]);

  return (
    <React.Fragment>
      {/* landingPage */}
      <div
        // style={{
        //   backgroundImage: `url("/temporary-bg/iPhone14ProMax-1.jpg")`,
        // }}
        // style={{
        //   backgroundImage: `url("/temporary-bg/1440x1024.jpg")`,
        // }}
        className="h-screen flex flex-col justify-between bg-background-1 bg-no-repeat bg-cover"
      >
        <Navigation timeline={landingPageTl} />
        <div className="flex justify-center items-center">
          {/* <ImageRevealing /> */}
        </div>
        <div className="flex justify-center uppercase bg-background-1">VV</div>
      </div>
      <div className="text-5xl">
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
