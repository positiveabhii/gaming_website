import { animate, motion, useAnimate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import EnterprisesText from "./enterprisesText";
import SmallTileParent from "./smallTileParent";
import StartupComponent from "./startupText";
import TileParent from "./tileParent";
import { UseSizeContext } from "../../../state/context";
import InnovatorText from "./innovator";

const Section1 = () => {
  const [changeTextForAnimation, setchangeTextForAnimation] = useState(0);
  const [changeRotation, setchangeRotation] = useState(false);

  let intervalForText = useRef<ReturnType<typeof setInterval>>();
  let runInterval = useRef<ReturnType<typeof setInterval>>();
  let rotationInterval = useRef<ReturnType<typeof setInterval>>();

  const startAnimation = () => {
    runInterval.current = setInterval(async () => {
      await runAnimation();
      // total duration is 4.4s=4400ms
    }, 6400);
  };
  const [scope, animate] = useAnimate();

  const runAnimation = async () => {
    await animate(scope.current, { x: 300 }, { duration: 3 });
    await animate(scope.current, { scaleX: -1 }, { duration: 0.2 });
    await animate(scope.current, { x: -300 }, { duration: 3 });
    await animate(scope.current, { scaleX: 1 }, { duration: 0.2 });
  };

  useEffect(() => {
    (async () => {
      await runAnimation();
    })();
    startRotationAnimation();
    startAnimation();
    startTextAnimation();
    return () => {
      runInterval.current && clearInterval(runInterval.current);
      rotationInterval.current && clearInterval(rotationInterval.current);
      intervalForText.current && clearInterval(intervalForText.current);
    };
  }, []);

  const { width } = UseSizeContext();
  const startTextAnimation = () => {
    intervalForText.current = setInterval(() => {
      setchangeTextForAnimation((prev) =>
        prev === 0 ? 1 : prev === 1 ? 2 : 0
      );
      // total duration is 4.4s=4400ms
    }, 3200);
  };

  const startRotationAnimation = () => {
    rotationInterval.current = setInterval(() => {
      setchangeRotation((prev) => !prev);
      // total duration is 4.4s=4400ms
    }, 9600);
  };

  return (
    <section
      className={`max-w-[1300px] mx-auto flex items-center justify-center w-full`}
    >
      <div
        className={`${
          width > 800 ? "w-[50%] justify-center" : "w-[90%] mt-28"
        } relative ${
          width > 906 ? "pl-10" : width > 460 ? "pl-5" : "pl-0"
        } h-full flex flex-col`}
      >
        <h1
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.91)" }}
          className={`text-[#F2F2F2] relative rajdhani max-w-[420px] font-semibold ${
            width > 906
              ? "text-[50px]"
              : width > 460
              ? "text-[45px]"
              : "text-[40px]"
          } leading-[137.5%]`}
        >
          <span>Digital-first Growth & Transformation Consulting for</span>
          <SmallTileParent />
        </h1>
        <div className="relative flex items-center justify-center text-center max-w-[350px] overflow-hidden h-[100px]">
          <h1
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.91)" }}
            className={`text-[#FFB545] rajdhani absolute left-0 text-start mr-auto font-semibold mt-3 ${
              width > 906 ? "text-[50px]" : "text-[40px]"
            } leading-[137.5%]`}
          >
            {changeTextForAnimation === 1
              ? ["E", "N", "T", "E", "R", "P", "R", "I", "S", "E", "S"].map(
                  (letter, ind) => (
                    <EnterprisesText
                      isReverse={!changeRotation ? true : false}
                      key={ind}
                      letter={letter}
                      ind={ind}
                    />
                  )
                )
              : changeTextForAnimation === 0
              ? ["S", "T", "A", "R", "T", "U", "P", "S"].map((letter, ind) => (
                  <StartupComponent
                    isReverse={changeRotation}
                    key={ind}
                    letter={letter}
                    ind={ind}
                  />
                ))
              : ["I", "N", "N", "O", "V", "A", "T", "O", "R", "S"].map(
                  (letter, ind) => (
                    <InnovatorText
                      isReverse={changeRotation}
                      key={ind}
                      letter={letter}
                      ind={ind}
                    />
                  )
                )}
          </h1>
          <motion.img
            ref={scope}
            initial={{ x: -300 }}
            alt="pacman"
            className="absolute z-50"
            src="/pacman.gif"
            width={100}
            height={50}
          />
        </div>
        <ul>
          {[
            "Research-backed bespoke marketing strategy",
            "Branding & content strategy",
            "Digital platform development & marketing",
            "Emerging tech initiatives (AI, AR/VR, Gaming)",
            "Training interventions",
          ].map((it, id) => (
            <li key={id} className="flex items-center gap-3 mt-3 justify-start">
              <img width={15} height={15} alt="tile" src="/tile.png" />
              <h3
                style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                className="text-[#dadada] rajdhani w-[300px] font-semibold text-md leading-[100.5%]"
              >
                {it}
              </h3>
            </li>
          ))}
        </ul>
      </div>
      <TileParent />
    </section>
  );
};

export default Section1;
