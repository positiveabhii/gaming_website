import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

interface StartupComponentProp {
  ind: number;
  isReverse: boolean;
  letter: string;
}

const StartupComponent = ({ ind, isReverse, letter }: StartupComponentProp) => {
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

export default StartupComponent;
