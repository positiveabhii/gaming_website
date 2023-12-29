import { motion } from "framer-motion";
import { Action } from "../../types/types";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type BigScreenTaskProp = {
  startTaskAnimte: number[];
  isOpen: boolean;
  actions: Action[];
  setstartGame: (value: React.SetStateAction<boolean>) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hasGameStarted: boolean;
  setshowTaskAchievedPopup: React.Dispatch<
    React.SetStateAction<{
      show: boolean;
      index: number;
    }>
  >;
};

const BigScreenTask = ({
  startTaskAnimte,
  setstartGame,
  setshowTaskAchievedPopup,
  isOpen,
  actions,
  setIsOpen,
  hasGameStarted,
}: BigScreenTaskProp) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <img alt="tile" src="/tile.png" width={25} height={25} />
        <h3
          style={{ textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          className={`text-[#FFA115] rajdhani font-normal text-[28px] leading-[137.5%]`}
        >
          Tasks
        </h3>
        <img alt="tile" src="/tile.png" width={25} height={25} />
      </div>
      <div
        className="rounded-[30px] w-[400px] h-[400px] flex flex-col justify-between p-12"
        style={{
          background: "rgba(51, 51, 51, 0.49)",
          border: "4px solid #FFF",
        }}
      >
        {actions.map((itm, ind) => (
          <div key={ind} className="flex items-center justify-start gap-2">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              transition={{ duration: 1 }}
              animate={
                startTaskAnimte.includes(4 + ind)
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -15 }
              }
            >
              <FontAwesomeIcon icon={faHandPointRight} color="#dadada" />
            </motion.div>
            <img src={itm.icon} alt={`task${ind + 1}`} width={30} height={30} />
            <motion.h1
              onClick={() => {
                if (!hasGameStarted || isOpen) return;
                if (startTaskAnimte.includes(4 + ind)) {
                  setIsOpen(true);
                  setstartGame(false);
                  setshowTaskAchievedPopup({ show: true, index: ind });
                }
              }}
              initial={{ opacity: 0, y: -15 }}
              transition={{ duration: 1 }}
              animate={
                startTaskAnimte.includes(4 + ind)
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -15 }
              }
              className={`text-[14px] ${
                hasGameStarted ? "cursor-pointer" : ""
              } hover:underline text-[#F2F2F2]`}
            >
              <span className={`rajdhani font-normal`}>{itm.subTitle}</span>{" "}
              {/* {itm.subTitle} */}
            </motion.h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigScreenTask;
