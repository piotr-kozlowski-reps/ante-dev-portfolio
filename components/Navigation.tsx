import Image from "next/image";
import Link from "next/link";
import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

import {
  hamburgerIntoXAnimation,
  XIntoHamburgerAnimation,
  hamburgerIntoSeparatorAnimation,
  separatorIntoHamburgerAnimation,
  revealElementsInYAnimation,
  hideElementsInYAnimation,
  mouseEventsAnimationHandler,
  fullyCustomizableAnimationWithPassedTimeline,
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
  let logoRef = useRef<HTMLDivElement>(null);
  const [isHamburger, setIsHamburger] = useState(true);
  const [width, height] = useDeviceSize();

  ////logic
  const isLessThanOrEqualMdSize = useCallback(() => {
    return width < 768 ? true : false;
  }, [width]);

  /** Starting effect that hides clone od hamburger (clone that is used later for making "X" sign) */
  // useEffect(() => {
  //   gsap.to(hamburgerIconRef2.current, { autoAlpha: 0 });
  // }, [hamburgerIconRef2]);

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
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      mm.add("(max-width: 768px)", () => {
        separatorIntoHamburgerAnimation(hamburgerIconRef1, hamburgerIconRef2);
        hideElementsInYAnimation(
          [
            homeRef.current!,
            aboutRef.current!,
            projectsRef.current!,
            contactRef.current!,
            githubRef.current!,
            linkedinRef.current!,
          ].reverse(),
          0,
          1.5,
          0.04,
          0,
          -60
        );
      });
      mm.add("(min-width: 769px)", () => {
        hamburgerIntoSeparatorAnimation(hamburgerIconRef1, hamburgerIconRef2);
        revealElementsInYAnimation(
          [
            homeRef.current!,
            aboutRef.current!,
            projectsRef.current!,
            contactRef.current!,
            githubRef.current!,
            linkedinRef.current!,
          ],
          0,
          0.8,
          0.04,
          -60,
          0
        );
      });
    });

    return () => ctx.revert();
  }, []);

  /** Main timeline animation */
  useEffect(() => {
    const ctx = gsap.context(() => {
      fullyCustomizableAnimationWithPassedTimeline(
        [logoRef.current!],
        timeline,
        { x: -200, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.3, delay: 0.3 }
      );
    });

    return () => {
      ctx.revert();
    };
  }, [timeline]);

  ////utils - delete later
  function alertHandler(message: string) {
    alert(message);
  }

  ////jsx
  return (
    <React.Fragment>
      <div className="relative">
        <div className="absolute top-6 left-6" ref={logoRef}>
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
                onMouseEnter={mouseEventsAnimationHandler.bind(
                  null,
                  homeRef,
                  1,
                  1.1,
                  0.3
                )}
                onMouseLeave={mouseEventsAnimationHandler.bind(
                  null,
                  homeRef,
                  1.1,
                  1,
                  0.3
                )}
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
                onMouseEnter={mouseEventsAnimationHandler.bind(
                  null,
                  aboutRef,
                  1,
                  1.1,
                  0.3
                )}
                onMouseLeave={mouseEventsAnimationHandler.bind(
                  null,
                  aboutRef,
                  1.1,
                  1,
                  0.3
                )}
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
                onMouseEnter={mouseEventsAnimationHandler.bind(
                  null,
                  projectsRef,
                  1,
                  1.1,
                  0.3
                )}
                onMouseLeave={mouseEventsAnimationHandler.bind(
                  null,
                  projectsRef,
                  1.1,
                  1,
                  0.3
                )}
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
                onMouseEnter={mouseEventsAnimationHandler.bind(
                  null,
                  contactRef,
                  1,
                  1.1,
                  0.3
                )}
                onMouseLeave={mouseEventsAnimationHandler.bind(
                  null,
                  contactRef,
                  1.1,
                  1,
                  0.3
                )}
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
            <div
              ref={githubRef}
              className="cursor-pointer z-50"
              onMouseEnter={mouseEventsAnimationHandler.bind(
                null,
                githubRef,
                1,
                1.1,
                0.3
              )}
              onMouseLeave={mouseEventsAnimationHandler.bind(
                null,
                githubRef,
                1.1,
                1,
                0.3
              )}
            >
              <Link href="/">
                <a>
                  <Image
                    src={"/githubIcon.svg"}
                    alt="gitHubIcon"
                    width={19}
                    height={19}
                    onClick={alertHandler.bind(null, "not implemented")}
                  />
                </a>
              </Link>
            </div>
            <div
              ref={linkedinRef}
              className="cursor-pointer z-50"
              onMouseEnter={mouseEventsAnimationHandler.bind(
                null,
                linkedinRef,
                1,
                1.1,
                0.3
              )}
              onMouseLeave={mouseEventsAnimationHandler.bind(
                null,
                linkedinRef,
                1.1,
                1,
                0.3
              )}
            >
              <Link href="/">
                <a>
                  <Image
                    src={"/linkedinIcon.svg"}
                    alt="linkedInIcon"
                    width={19}
                    height={19}
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
