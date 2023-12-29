import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { popupContent, lastCongratsMsg } from "../../content/game/pageContent";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { LastCongratsMsg } from "../../types/types";
import { useRouter } from "next/router";

export type GhostPopupState = [boolean, number, () => void];

type GamePopupProp = {
  isOpen: boolean;
  setclickedOnPlayButton: (value: React.SetStateAction<boolean>) => void;
  playGame: () => void;
  setghostPopupOn: React.Dispatch<React.SetStateAction<GhostPopupState>>;
  ghostPopupOn: GhostPopupState;
  setpauseHere: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  stepIndex: number;
  showSuccessPopup: boolean;
  showTaskAchievedPopup: {
    show: boolean;
    index: number;
  };
  setshowTaskAchievedPopup: React.Dispatch<
    React.SetStateAction<{
      show: boolean;
      index: number;
    }>
  >;
  category: string;
  startGame: boolean;
  sethasGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setshowSuccessPopup: React.Dispatch<React.SetStateAction<boolean>>;
  changeStep(index: number): void;
  setstartGame: React.Dispatch<React.SetStateAction<boolean>>;
  setindexBeforeContent: React.Dispatch<React.SetStateAction<number>>;
  indexBeforeContent: number;
  startTaskAnimte: number[];
  setlatestAchievment: React.Dispatch<React.SetStateAction<number>>;
  setstartTaskAnimte: React.Dispatch<React.SetStateAction<number[]>>;
};

const GamePopup = ({
  playGame,
  setghostPopupOn,
  ghostPopupOn,
  startTaskAnimte,
  setclickedOnPlayButton,
  showTaskAchievedPopup,
  setstartTaskAnimte,
  setlatestAchievment,
  setpauseHere,
  setshowSuccessPopup,
  setshowTaskAchievedPopup,
  setstartGame,
  setIsOpen,
  stepIndex,
  sethasGameStarted,
  startGame,
  isOpen,
  setindexBeforeContent,
  showSuccessPopup,
  indexBeforeContent,
  changeStep,
  category,
}: GamePopupProp) => {
  const navigate = useRouter();

  function handleSuccessPopupButton() {
    if (stepIndex === Object.entries(popupContent[category]).length - 1) {
      changeStep(0);
    } else {
      changeStep(stepIndex + 1);
    }
    setstartTaskAnimte([]);
    sethasGameStarted(false);
    setshowSuccessPopup(false);
    setindexBeforeContent(0);
    setlatestAchievment(-1);
  }

  function handleCloseTaskPopup() {
    setIsOpen(false);
    if (startTaskAnimte.length === 5 || startTaskAnimte.length === 0) {
      setstartGame(false);
      setclickedOnPlayButton(false);
    } else {
      setstartGame(true);
    }
    // else if (
    //   indexBeforeContent >
    //   popupContent[category][stepIndex].noOfPopup - 1
    // ) {
    //   setstartGame(true);
    // }
    // if (startGame) {
    //   setstartGame(true);
    // }
    setshowTaskAchievedPopup({
      show: false,
      index: 0,
    });
  }

  return (
    <AnimatePresence>
      {isOpen &&
        (showTaskAchievedPopup.show ? (
          <PopupWrapper
            setpauseHere={setpauseHere}
            handleCloseTaskPopup={handleCloseTaskPopup}
            isGhostPopup={false}
          >
            <h1
              style={{ textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              className={`text-[#FFA115] text-center rajdhani font-normal text-[16px] leading-[137.5%]`}
            >
              {
                popupContent[category][stepIndex].actions[
                  showTaskAchievedPopup.index
                ].title
              }
            </h1>
            <p
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              className="text-[#dadada] rajdhani font-semibold text-[14px] leading-[150.5%] text-center w-[90%] mx-auto"
            >
              {
                popupContent[category][stepIndex].actions[
                  showTaskAchievedPopup.index
                ].msgOnPopup
              }
            </p>
            <button
              onClick={handleCloseTaskPopup}
              className="bg-[#FFA115] py-2 px-4 rounded-md"
            >
              Close
            </button>
          </PopupWrapper>
        ) : ghostPopupOn[0] ? (
          <PopupWrapper
            setpauseHere={setpauseHere}
            handleCloseTaskPopup={handleCloseTaskPopup}
            isGhostPopup={true}
          >
            <p className="text-[#dadada] text-center w-[80%] mx-auto">
              {
                popupContent[category][stepIndex].actions[ghostPopupOn[1]]
                  .ghostMsg
              }
            </p>
            <button
              onClick={() => {
                setghostPopupOn([false, -1, () => {}]);
                ghostPopupOn[2]();
                playGame();
              }}
              className="text-[#dadada] border-2 border-solid bg-[#FFA115] py-2 px-4 rounded-md"
            >
              Resume Game
            </button>
          </PopupWrapper>
        ) : showSuccessPopup ? (
          <PopupWrapper
            setpauseHere={setpauseHere}
            handleCloseTaskPopup={handleCloseTaskPopup}
            isGhostPopup={false}
          >
            {/* <img alt="success" src="/success.gif" /> */}
            <h1
              style={{ textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              className={`text-[#FFA115] text-center rajdhani font-normal text-[20px] leading-[137.5%]`}
            >
              Congratulations
            </h1>
            <p className="text-[#dadada] text-center w-[80%] mx-auto">
              {lastCongratsMsg[category as keyof LastCongratsMsg][stepIndex]}
            </p>
            <p className="text-[#dadada] text-center w-[80%] mx-auto">
              Press Pause and click on each item collected in the task box to
              learn more.
            </p>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="flex items-center gap-4 justify-evenly">
                {stepIndex < Object.entries(popupContent[category]).length && (
                  <button
                    onClick={handleSuccessPopupButton}
                    className="bg-[#FFA115] py-2 px-4 rounded-md"
                  >
                    {stepIndex ===
                    Object.entries(popupContent[category]).length - 1
                      ? "Play Again"
                      : "Play Next Level"}
                  </button>
                )}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setpauseHere(true);
                  }}
                  className="text-[#dadada] border-2 border-solid border-[#dadada] py-2 px-4 rounded-md"
                >
                  Pause Here
                </button>
              </div>
              {stepIndex ===
                Object.entries(popupContent[category]).length - 1 && (
                <button
                  onClick={() => navigate.push("/contactus")}
                  className="bg-[#FFA115] font-bold p-2 w-[80%] rounded-md"
                >
                  BOOK YOUR FREE PERSONALIZED CONSULTING SESSION
                </button>
              )}
            </div>
          </PopupWrapper>
        ) : (
          <PopupWrapper
            setpauseHere={setpauseHere}
            handleCloseTaskPopup={handleCloseTaskPopup}
            isGhostPopup={false}
          >
            <>
              <h1
                style={{ textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                className={`text-[#FFA115] text-center rajdhani font-normal text-[20px] leading-[137.5%]`}
              >
                Level - {stepIndex + 1} <br />{" "}
                {popupContent[category][stepIndex].levelTitle}
              </h1>
              {stepIndex === 0 &&
                indexBeforeContent ===
                  popupContent[category][stepIndex].noOfPopup - 1 && (
                  <div className="flex flex-col items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faArrowUp} />
                    <div className="flex items-center justify-center gap-2">
                      <FontAwesomeIcon icon={faArrowLeft} />

                      <FontAwesomeIcon icon={faArrowDown} />

                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </div>
                )}
              {indexBeforeContent <
                popupContent[category][stepIndex].noOfPopup && (
                <p
                  style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                  className="text-[#dadada] rajdhani font-semibold leading-[150.5%] text-center w-[90%] mx-auto"
                >
                  {
                    popupContent[category][stepIndex][
                      indexBeforeContent === 0
                        ? "popup1"
                        : indexBeforeContent === 1
                        ? "popup2"
                        : "popup3"
                    ]
                  }
                </p>
              )}
              <button
                onClick={() => {
                  if (
                    indexBeforeContent ===
                    popupContent[category][stepIndex].noOfPopup - 1
                  ) {
                    playGame();
                  } else {
                    setindexBeforeContent(indexBeforeContent + 1);
                  }
                }}
                className="bg-[#FFA115] py-2 px-4 rounded-md"
              >
                {indexBeforeContent <
                popupContent[category][stepIndex].noOfPopup - 1
                  ? "Next"
                  : "Play"}
              </button>
            </>
          </PopupWrapper>
        ))}
    </AnimatePresence>
  );
};

const PopupWrapper = ({
  children,
  handleCloseTaskPopup,
  setpauseHere,
  isGhostPopup,
}: {
  handleCloseTaskPopup: () => void;
  children: ReactNode;
  setpauseHere: React.Dispatch<React.SetStateAction<boolean>>;
  isGhostPopup: boolean;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.75,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          ease: "easeOut",
          duration: 0.15,
        },
      }}
      exit={{
        opacity: 0,
        scale: 0.75,
        transition: {
          ease: "easeIn",
          duration: 0.15,
        },
      }}
      style={{
        background: "rgba(51, 51, 51, 1)",
        minHeight: isGhostPopup ? "100px" : "450px",
        height: "auto",
      }}
      className={`rajdhani text-[#F2F2F2] flex flex-col items-center gap-4 justify-evenly w-[90%] min-w-[300px] sm:w-[400px] py-6 rounded-2xl absolute z-[1000] mx-auto my-auto left-0 right-0 top-0 bottom-[150px]`}
    >
      {!isGhostPopup && (
        <FontAwesomeIcon
          icon={faX}
          onClick={() => {
            setpauseHere(false);
            handleCloseTaskPopup();
            // setclickedOnPlayButton(false);
          }}
          className="absolute top-4 right-4 cursor-pointer hover:bg-[#FFA115] p-2 rounded-full"
        />
      )}
      {children}
    </motion.div>
  );
};

export default GamePopup;
