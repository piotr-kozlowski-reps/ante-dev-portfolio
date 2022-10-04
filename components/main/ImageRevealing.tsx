import * as React from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface Props {
  // children: React.ReactNode;
}
const ImageRevealing: React.FunctionComponent<Props> = (props: Props) => {
  gsap.registerPlugin(ScrollTrigger);
  const imageOff = React.useRef(null);
  const imageOn = React.useRef(null);

  const imagesArray = [imageOff, imageOn];

  React.useEffect(() => {
    gsap.fromTo(
      imageOff.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 3 }
    );

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.querySelector("body"),
        start: "top top",
        end: "bottom bottom",
        onUpdate: (event) => {
          console.log(event.progress);
        },
        // pin: true,
        scrub: true,
      },
    });

    tl.from(imageOff, { x: -100 });

    // imagesArray.forEach((image) => {
    //   console.log(image);

    //   let tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: document.querySelector("body"),
    //       start: "center center",
    //       // end: () => "+=100",
    //       pin: true,
    //       anticipatePin: 1,
    //       scrub: true,
    //     },
    //   });

    //   tl.fromTo(imageOff, { xPercent: 100, x: 0 }, { xPercent: 0 }).fromTo(
    //     imageOn,
    //     { xPercent: -100, x: 0 },
    //     { xPercent: 0 },
    //     0
    //   );
    // });

    // gsap.utils.toArray(".comparisonSection").forEach((section) => {
    //   let tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: section,
    //       start: "center center",
    //       // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
    //       end: () => "+=" + section.offsetWidth,
    //       scrub: true,
    //       pin: true,
    //       anticipatePin: 1,
    //     },
    //     defaults: { ease: "none" },
    //   });
    //   // animate the container one way...
    //   tl.fromTo(
    //     section.querySelector(".afterImage"),
    //     { xPercent: 100, x: 0 },
    //     { xPercent: 0 }
    //   )
    //     // ...and the image the opposite way (at the same time)
    //     .fromTo(
    //       section.querySelector(".afterImage img"),
    //       { xPercent: -100, x: 0 },
    //       { xPercent: 0 },
    //       0
    //     );
    // });
  }, []);

  return (
    <React.Fragment>
      <div className="">
        <div ref={imageOff}>
          <Image
            src={"/images/face__off.jpg"}
            alt=""
            width={600}
            height={600}
          />
        </div>
        {/* <div ref={imageOn} className="fixed "> */}
        {/* <Image src={"/images/face__on.jpg"} alt="" width={800} height={800} /> */}
        {/* </div> */}
      </div>
    </React.Fragment>
  );
};
export default ImageRevealing;
