import * as React from "react";
import ImageRevealing from "./ImageRevealing";

interface Props {
  // children: React.ReactNode;
}
const MainLayout: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <div className="h-screen flex flex-col items-center justify-center">
        <div>
          <h1 className="text-5xl uppercase">asdcadfs</h1>
        </div>
        <div>
          <h3 className="text-2xl">asdcadfs</h3>
        </div>
        <div>
          <p className="text-sm px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            architecto provident excepturi et iure aliquam consequuntur soluta
            molestias cupiditate labore.
          </p>
        </div>
      </div>
      {/* <ImageRevealing /> */}
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
