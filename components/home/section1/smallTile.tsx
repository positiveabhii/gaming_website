import { motion, useAnimate } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface AnimatedImageProp {
  delay: number;
  alt: string;
  src: string;
  bottom: string;
  left: string;
  className: string;
}

const SmallTile = ({
  delay,
  alt,
  src,
  bottom,
  left,
  className,
}: AnimatedImageProp) => {
  const [scope, animate] = useAnimate();

  const runAnimation = async () => {
    await animate(scope.current, {
      // bottom: width > 800 ? "1000px" : "1500px",
      bottom: "1000px",
      left: left,
      opacity: 0,
    });
    await animate(
      scope.current,
      { bottom: bottom, left: left, opacity: 1 },
      {
        duration: 2,
        delay: delay,
        type: "spring",
        stiffness: 40,
        damping: 10,
      }
    );
    await animate(
      scope.current,
      { opacity: 0, bottom: "-400px" },
      { delay: 6 - delay, duration: 1 }
    );
  };

  let runInterval = useRef<ReturnType<typeof setInterval>>();

  const startAnimation = () => {
    runInterval.current = setInterval(() => {
      runAnimation();
      // total duration is 4.4s=4400ms
    }, 9000);
  };

  useEffect(() => {
    runAnimation();
    startAnimation();

    return () => runInterval.current && clearInterval(runInterval.current);
  }, []);
  return (
    <motion.img
      ref={scope}
      className={`absolute ${className}`}
      initial={{
        // bottom: width > 800 ? "1000px" : "1500px",
        bottom: "1000px",
        left: left,
        opacity: 1,
      }}
      width={25}
      height={25}
      alt={alt}
      src={src}
    />
  );
};

export default SmallTile;
