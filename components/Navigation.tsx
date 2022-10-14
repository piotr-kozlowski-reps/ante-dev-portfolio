import Image from "next/image";
import Link from "next/link";
import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
  useMemo,
  useLayoutEffect,
  useCallback,
} from "react";

import {
  hamburgerIntoXAnimation,
  XIntoHamburgerAnimation,
  hamburgerIntoSeparatorAnimation,
  separatorIntoHamburgerAnimation,
  revealingElementsAnimation,
  unRevealingElementsAnimation,
} from "../utils/animations";
import { gsap } from "gsap/dist/gsap";
import useDeviceSize from "../hooks/useDeviceSize";

interface Props {
  timeline: gsap.core.Timeline;
  // children: React.ReactNode;
}
const Navigation: FunctionComponent<Props> = (props: Props) => {
  ////vars
  const comp = useRef();
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
  const tl: React.MutableRefObject<gsap.core.Timeline | undefined> = useRef();

  const menuLinks: HTMLElement[] = useMemo(
    () => [
      homeRef.current!,
      aboutRef.current!,
      projectsRef.current!,
      contactRef.current!,
    ],
    []
  );
  const menuIcons: HTMLElement[] = useMemo(
    () => [githubRef.current!, linkedinRef.current!],
    []
  );

  ////logic
  const isLessThanOrEqualMdSize = useCallback(() => {
    return width < 768 ? true : false;
  }, [width]);

  /** Starting effect that hides clone of hamburger (clone that is used later for making "X" sign) */
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(hamburgerIconRef2.current, { autoAlpha: 0 });
    }, comp);
    return () => ctx.revert();
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
      // revealingElementsAnimation(menuLinks, timeline.current, -0.3, 0.8);
      // revealingElementsAnimation(menuIcons, timeline.current, -0.7, 0.8);
      // setIsSmallSizeWidth(false);
    }
    if (!isSmallSizeWidth && isLessThanOrEqualMdSize()) {
      separatorIntoHamburgerAnimation(hamburgerIconRef1, hamburgerIconRef2);
      // // unRevealingElementsAnimation(menuIcons.reverse(), 0, 2);
      // // unRevealingElementsAnimation(
      // //   menuLinks.reverse(),
      // //   timeline.current,
      // //   -2,
      // //   2
      // // );
      setIsSmallSizeWidth(true);
    }
  }, [
    width,
    height,
    isSmallSizeWidth,
    isLessThanOrEqualMdSize,
    menuLinks,
    menuIcons,
  ]);

  /** Main timeline animation */
  // useEffect(() => {
  //   if (width < 768 && menuIcons && menuLinks) {
  //     // gsap.fromTo(menuIcons.reverse(), { y: 0 }, { y: -200 });

  //     // unRevealingElementsAnimation(menuIcons.reverse(), timeline, 0, 2);
  //     // unRevealingElementsAnimation(menuLinks.reverse(), timeline, -2, 2);
  //   }
  //   // revealingElementsAnimation(menuLinks, timeline, 0.3);
  //   // revealingElementsAnimation(menuIcons, timeline, 0);
  // }, [timeline, width, menuIcons, menuLinks]);

  ////utils - later delete
  function alertHandler(message: string) {
    alert(message);
  }

  ////jsx
  return (
    <React.Fragment>
      <div className="relative">
        <div className="absolute top-6 left-6">
          <img
            src={"/logo2.svg"}
            alt="piotr kozłowski portfolio logo"
            className="w-32"
          />
        </div>
        <div>
          <div
            className="absolute top-7 right-32 py-px"
            // style={{ paddingTop: 1 }}
          >
            <ul className="uppercase text-xs font-quicksand font-semibold text-white flex gap-4 justify-end items-center">
              <li
                className="cursor-pointer transition ease-out hover:scale-110"
                ref={homeRef}
              >
                <Link href={"/"}>
                  <span onClick={alertHandler.bind(null, "not implemented")}>
                    <span className="">home</span>
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
                    alt="gitHubIcon"
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
                    alt="linkedInIcon"
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
