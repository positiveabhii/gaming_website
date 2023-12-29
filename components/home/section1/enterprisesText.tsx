import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

interface EnterPrisesComponentProp {
  ind: number;
  isReverse: boolean;
  letter: string;
}

const EnterprisesText = ({
  ind,
  isReverse,
  letter,
}: EnterPrisesComponentProp) => {
  const [scope, animate] = useAnimate();

  const runAnimation = async () => {
    if (isReverse) {
      await animate(
        scope.current,
        { opacity: 0 },
        { delay: 0.2 + (11 - ind) / 10 }
      );
    } else {
      await animate(scope.current, { opacity: 0 }, { delay: 0.2 + ind / 10 });
    }
  };
  useEffect(() => {
    (async () => {
      await runAnimation();
    })();
  }, []);

  return (
    <motion.span ref={scope} initial={{ opacity: 1 }} key={ind}>
      {letter}
    </motion.span>
  );
};

export default EnterprisesText;
