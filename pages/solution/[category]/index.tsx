import { useEffect, useState, Fragment } from "react";
import { UseSizeContext } from "../../../state/context";
import { motion } from "framer-motion";
import GameBoard from "../../../components/game/gameBoard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";
import BigScreenTask from "../../../components/game/bigScreenTask";
import GamePopup from "../../../components/game/popup";
import {
  gameBelowContent,
  popupContent,
} from "../../../content/game/pageContent";
import BackCircles from "../../../components/common/backCircles";
import { useInView } from "react-intersection-observer";
import { topText } from "../../../content/game/pageContent";
import { GameBelowContent, TopContent } from "../../../types/types";
import Carousel from "react-multi-carousel";
import { getSEOById, SEO } from "../../../firebase/function";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import ScrollToElement from "@/components/common/scrollElement";

const responsive = {
  mobile: {
    breakpoint: { max: 1024, min: 350 },
    items: 1,
  },
};

export type GhostPopupState = [boolean, number, () => void];

const Gaming = ({
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(category, "category");

  const navigate = useRouter();

  const { width } = UseSizeContext();
  const [stepIndex, setstepIndex] = useState(0);
  const [indexBeforeContent, setindexBeforeContent] = useState(0);
  const [latestAchievment, setlatestAchievment] = useState(-1);
  const [expandAchievementSheet, setexpandAchievementSheet] = useState(false);

  const [startTaskAnimte, setstartTaskAnimte] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedOnPlayButton, setclickedOnPlayButton] = useState(false);
  const [hasGameStarted, sethasGameStarted] = useState(false);
  const [startGame, setstartGame] = useState(false);
  const [showSuccessPopup, setshowSuccessPopup] = useState(false);
  const [showTaskAchievedPopup, setshowTaskAchievedPopup] = useState<{
    show: boolean;
    index: number;
  }>({ show: false, index: 0 });
  const [canScroll, setcanScroll] = useState(false);
  const [showPausePopup, setshowPausePopup] = useState(false);

  // Example usage
  const [ghostPopupOn, setghostPopupOn] = useState<GhostPopupState>([
    false,
    -1,
    () => {},
  ]);

  const [pauseHere, setpauseHere] = useState(false);

  function showGhostPopup(restartGame: () => void) {
    if (!startTaskAnimte.includes(4)) {
      setghostPopupOn([true, 0, restartGame]);
      setIsOpen(true);
      setstartGame(false);
      return;
    }
    if (!startTaskAnimte.includes(5)) {
      setghostPopupOn([true, 1, restartGame]);
      setIsOpen(true);
      setstartGame(false);
      return;
    }
    if (!startTaskAnimte.includes(6)) {
      setghostPopupOn([true, 2, restartGame]);
      setIsOpen(true);
      setstartGame(false);
      return;
    }
    if (!startTaskAnimte.includes(7)) {
      setghostPopupOn([true, 3, restartGame]);
      setIsOpen(true);
      setstartGame(false);
      return;
    }
    if (!startTaskAnimte.includes(8)) {
      setghostPopupOn([true, 4, restartGame]);
      setIsOpen(true);
      setstartGame(false);
      return;
    }
  }

  function changeStep(index: number) {
    setstepIndex(index);
  }

  useEffect(() => {
    if (isOpen && canScroll) {
      // scrollToBottom();
    }
  }, [isOpen, canScroll]);

  useEffect(() => {
    if (typeof window != "undefined") {
      window.addEventListener(
        "keydown",
        function (e) {
          if (
            [
              "Space",
              "ArrowUp",
              "ArrowDown",
              "ArrowLeft",
              "ArrowRight",
            ].indexOf(e.code) > -1
          ) {
            e.preventDefault();
          }
        },
        false
      );
    }
  }, []);

  function pauseGame() {
    // (!isOpen || (isOpen && showPausePopup)) &&
    //   !(!hasGameStarted || startTaskAnimte.length === 5);
    if (!hasGameStarted || startTaskAnimte.length === 5) return;
    // if (!(!isOpen || (isOpen && showPausePopup))) return;
    if (hasGameStarted) {
      if (!showPausePopup) {
        // setIsOpen(true);
        setshowPausePopup(true);
        setstartGame(false);
      } else {
        // playGame();
        setshowPausePopup(false);
        setstartGame(true);
        sethasGameStarted(true);
      }
    }
  }

  // useEffect(() => {
  //   document.addEventListener("keydown", (e) => {
  //     if (e.key === " ") {

  //     }
  //   });
  // }, [showPausePopup, hasGameStarted, startGame, startTaskAnimte]);

  const [seoContent, setseoContent] = useState<SEO | null>(null);

  useEffect(() => {
    if (
      category === "Startup" ||
      category === "Innovators" ||
      category === "Enterprises"
    ) {
      (async () => {
        const seo = await getSEOById({ id: category as string });
        if (seo === null) {
          setseoContent({
            title: "Platform Play Venture",
            description:
              "In a world where consumers are adopting technology at an exponential pace, the success of your business depends on how effective your digital presence is. At Platform Play Venture, we undertake end-to-end consulting for your brand's digital platforms enablement as well as growth hacking in a digitally disrupted ecosystem with bespoke marketing strategy creation and solutions implementation",
            metaTag:
              "Marketing, branding and holistic growth for organizations and businesses who want amazing customer experiences and high conversion rates in multi-channel environments in a digitally disrupted ecosystem",
          });
        } else {
          setseoContent(seo as SEO);
        }
      })();
    }
  }, []);

  useEffect(() => {
    if (startTaskAnimte.length === 5) {
      // player won the game
      setstartGame(false);
      setIsOpen(true);
      setshowSuccessPopup(true);
      // toggleModal();
    }

    if (startTaskAnimte.length > 0) {
      // scrollToBottom();
    }
  }, [startTaskAnimte]);

  // function scrollToBottom() {
  //   const windowHeight = window.innerHeight;
  //   const totalDocumentHeight = document.body.scrollHeight;

  //   window.scrollTo({
  //     top: totalDocumentHeight - windowHeight,
  //     behavior: "smooth",
  //   });
  // }

  function collideTask(taskIndex: number) {
    setlatestAchievment(taskIndex);
    setstartTaskAnimte((prevCompletedTasks) => [
      ...prevCompletedTasks,
      taskIndex,
    ]);
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  function playGame() {
    toggleModal();
    setshowPausePopup(false);
    setstartGame(true);
    sethasGameStarted(true);
  }

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  useEffect(() => {
    console.log(category, "vfcdcer");

    if (category !== undefined) {
      if (
        category !== "Startup" &&
        category !== "Innovators" &&
        category !== "Enterprises"
      ) {
        navigate.push("/");
      }
    } else {
      navigate.push("/");
    }
  }, [category]);

  return (
    <Fragment>
      <Head>
        <title>{seoContent?.title}</title>
        <meta name="description" content={seoContent?.description} />
        <meta name="keywords" content={seoContent?.metaTag}></meta>
      </Head>
      <div className="w-full relative min-h-screen" id="homePage">
        <div
          ref={ref}
          className={`flex absolute z-0 w-full p-0 ${"min-h-[90vh] max-h-[100vh]"}`}
        >
          <BackCircles whichPage="Founder" direction="top" inView={inView} />
        </div>
        <div className="relative z-[100] w-[90%] mx-auto flex flex-col items-center gap-4 py-12">
          <h1
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.91)" }}
            className={`text-[#FFB545] uppercase rajdhani font-semibold mt-3 ${
              width > 906 ? "text-[50px]" : "text-[40px]"
            } leading-[137.5%]`}
          >
            Solutions for {category}
          </h1>
          <h3
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            className="text-[#dadada] rajdhani  max-w-[820px] mt-3 font-semibold text-md leading-[150.5%]"
          >
            {topText[category as keyof TopContent].p1}
          </h3>
          <h3
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            className="text-[#dadada] rajdhani  max-w-[820px] mt-3 font-semibold text-md leading-[150.5%]"
          >
            {topText[category as keyof TopContent].p2}
          </h3>
          <h3
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            className="text-[#dadada] rajdhani  max-w-[820px] mt-3 font-semibold text-md leading-[150.5%]"
          >
            {topText[category as keyof TopContent].p3}
          </h3>
          <h3
            style={{ textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            className={`text-[#FFA115] rajdhani font-normal mt-3 text-[28px] leading-[137.5%]`}
          >
            Game On!
          </h3>
          {/* show prizes */}
          {width < 900 && (
            <div className="flex items-center my-4 justify-center gap-2 w-full">
              {startTaskAnimte.map((itm, ind) => (
                <motion.div
                  key={ind}
                  initial={{ y: 0, opacity: -10 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <img
                    src={
                      popupContent[category as string][stepIndex].actions[
                        itm - 4
                      ].icon
                    }
                    alt={"task1"}
                    width={20}
                    height={20}
                    className="mx-2"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
        <div className="md:mt-12 z-[1000] relative flex flex-col items-center justify-center">
          {!isOpen && !clickedOnPlayButton && (
            <ScrollToElement to="gameBoard">
              <button
                onClick={() => {
                  setIsOpen(true);
                  setcanScroll(true);
                  setclickedOnPlayButton(true);
                }}
                className={`text-[#dadada] border-2 border-solid border-[#dadada] rajdhani px-3 py-2 rounded-md`}
              >
                Play Game
              </button>
            </ScrollToElement>
          )}
          {!isOpen && clickedOnPlayButton && (
            <div className="flex flex-col items-center justify-center gap-3">
              <h1
                style={{ textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                className={`text-[#FFA115] text-center rajdhani font-normal text-[20px] leading-[137.5%]`}
              >
                Level - {stepIndex + 1} <br />{" "}
                {popupContent[category as string][stepIndex].levelTitle}
              </h1>
              {pauseHere && (
                <ScrollToElement to="gameBoard">
                  <button
                    onClick={() => {
                      if (stepIndex === 5) {
                        changeStep(0);
                      } else {
                        changeStep(stepIndex + 1);
                      }
                      setIsOpen(true);
                      setstartTaskAnimte([]);
                      setshowSuccessPopup(false);
                      setpauseHere(false);
                      setindexBeforeContent(0);
                      setlatestAchievment(-1);
                    }}
                    className="bg-[#FFA115] py-2 px-4 rounded-md"
                  >
                    {stepIndex === 5 ? "Play Again" : "Play Next Level"}
                  </button>
                </ScrollToElement>
              )}
            </div>
          )}
          {/* {width < 900 &&
            (!isOpen || (isOpen && showPausePopup)) &&
            !(!hasGameStarted || startTaskAnimte.length === 5) && (
              <button
                onClick={pauseGame}
                className={`text-[#dadada] mx-auto mt-4 border-2 border-solid border-[#dadada] rajdhani px-3 py-2 rounded-md`}
              >
                {showPausePopup ? "Resume" : "Pause"}
              </button>
            )} */}
          <div
            style={{
              paddingBottom:
                width < 900 && !isOpen && startTaskAnimte.length !== 0
                  ? "70px"
                  : "0px",
            }}
            className={`flex md:flex-row mt-12 mb-12 md:mb-0 flex-col items-start relative justify-center`}
          >
            <GamePopup
              setIsOpen={setIsOpen}
              setclickedOnPlayButton={setclickedOnPlayButton}
              startTaskAnimte={startTaskAnimte}
              showSuccessPopup={showSuccessPopup}
              startGame={startGame}
              showTaskAchievedPopup={showTaskAchievedPopup}
              setshowSuccessPopup={setshowSuccessPopup}
              ghostPopupOn={ghostPopupOn}
              setghostPopupOn={setghostPopupOn}
              setpauseHere={setpauseHere}
              sethasGameStarted={sethasGameStarted}
              category={category as string}
              indexBeforeContent={indexBeforeContent}
              setstartTaskAnimte={setstartTaskAnimte}
              setlatestAchievment={setlatestAchievment}
              setindexBeforeContent={setindexBeforeContent}
              playGame={playGame}
              setshowTaskAchievedPopup={setshowTaskAchievedPopup}
              changeStep={changeStep}
              stepIndex={stepIndex}
              setstartGame={setstartGame}
              isOpen={isOpen}
            />
            <GameBoard
              fps={popupContent[category as string][stepIndex].speed}
              ghostCount={popupContent[category as string][stepIndex].noOfGhost}
              collideTask={collideTask}
              category={category}
              startGame={startGame}
              showGhostPopup={showGhostPopup}
              showPausePopup={showPausePopup}
              pauseGame={pauseGame}
              stepIndex={stepIndex}
            />
            {width > 900 && (
              <div className="flex flex-col items-center justify-center gap-2">
                <BigScreenTask
                  setstartGame={setstartGame}
                  isOpen={isOpen}
                  hasGameStarted={hasGameStarted}
                  setIsOpen={setIsOpen}
                  setshowTaskAchievedPopup={setshowTaskAchievedPopup}
                  actions={popupContent[category as string][stepIndex].actions}
                  startTaskAnimte={startTaskAnimte}
                />
                {/* {(!isOpen || (isOpen && showPausePopup)) &&
                  !(!hasGameStarted || startTaskAnimte.length === 5) && (
                    <button
                      onClick={pauseGame}
                      className={`text-[#dadada] border-2 border-solid border-[#dadada] rajdhani px-3 py-2 rounded-md`}
                    >
                      {showPausePopup ? "Resume" : "Pause"}
                    </button>
                  )} */}
              </div>
            )}

            {width < 900 && !isOpen && startTaskAnimte.length !== 0 && (
              <div
                className={`w-full fixed bottom-0 mt-12 flex flex-col ${
                  expandAchievementSheet ? "" : "h-[100px]"
                } items-start justify-center p-3`}
                style={{
                  background: "rgba(51, 51, 51, 1)",
                  border: "4px solid #FFF",
                }}
              >
                <div
                  onClick={() => {
                    if (startTaskAnimte.length > 1) {
                      setexpandAchievementSheet((prev) => !prev);
                    }
                  }}
                  style={{
                    border: "4px solid #FFF",
                    background: "rgba(51, 51, 51, 0.49)",
                  }}
                  className="absolute left-1/2 transform -translate-x-1/2 rounded-full animate-bounce top-[-25px] p-2 flex items-center justify-center"
                >
                  <FontAwesomeIcon
                    icon={expandAchievementSheet ? faArrowDown : faArrowUp}
                    color="white"
                  />
                </div>
                {!expandAchievementSheet ? (
                  <motion.div
                    key={latestAchievment}
                    initial={{ opacity: 0, y: -15 }}
                    transition={{ duration: 1 }}
                    onClick={() => {
                      setIsOpen(true);
                      setstartGame(false);
                      setshowTaskAchievedPopup({
                        show: true,
                        index: latestAchievment - 4,
                      });
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faHandPointRight} color="#dadada" />
                    <h1 className="text-[14px] flex flex-col items-start justify-center mt-2 text-[#F2F2F2]">
                      <img
                        src={
                          popupContent[category as string][stepIndex].actions[
                            latestAchievment - 4
                          ].icon
                        }
                        alt={"task1"}
                        width={20}
                        height={20}
                        className="mx-2"
                      />
                      <span className={`rajdhani font-normal`}>
                        {
                          popupContent[category as string][stepIndex].actions[
                            latestAchievment - 4
                          ].title
                        }
                      </span>
                    </h1>
                  </motion.div>
                ) : (
                  startTaskAnimte.map((itm, ind) => (
                    <motion.div
                      onClick={() => {
                        setIsOpen(true);
                        setstartGame(false);
                        setshowTaskAchievedPopup({
                          show: true,
                          index: ind,
                        });
                      }}
                      key={latestAchievment}
                      initial={{ opacity: 0, y: -15 }}
                      transition={{ duration: 1 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon
                        icon={faHandPointRight}
                        color="#dadada"
                      />
                      <h1 className="text-[14px] flex items-start flex-col justify-center mt-2 text-[#F2F2F2]">
                        <img
                          src={
                            popupContent[category as string][stepIndex].actions[
                              itm - 4
                            ].icon
                          }
                          alt={"task1"}
                          width={20}
                          height={20}
                          className="mx-2"
                        />
                        <span className={`rajdhani font-normal`}>
                          {
                            popupContent[category as string][stepIndex].actions[
                              itm - 4
                            ].title
                          }
                        </span>
                      </h1>
                    </motion.div>
                  ))
                )}
              </div>
            )}
          </div>
          <div className="mb-6 z-[1000] relative hidden md:flex flex-col items-center justify-center">
            {!isOpen && clickedOnPlayButton && (
              <div className="flex flex-col items-center justify-center gap-3">
                <h1
                  style={{ textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                  className={`text-[#dadada] text-center rajdhani font-normal text-[20px] leading-[137.5%]`}
                >
                  Level - {stepIndex + 1} <br />{" "}
                  {popupContent[category as string][stepIndex].levelTitle}
                </h1>
                {pauseHere && (
                  <ScrollToElement to="gameBoard">
                    <button
                      onClick={() => {
                        if (stepIndex === 5) {
                          changeStep(0);
                        } else {
                          changeStep(stepIndex + 1);
                        }
                        setIsOpen(true);
                        setstartTaskAnimte([]);
                        setshowSuccessPopup(false);
                        setpauseHere(false);
                        setindexBeforeContent(0);
                        setlatestAchievment(-1);
                      }}
                      className="bg-[#FFA115] py-2 px-4 rounded-md"
                    >
                      {stepIndex === 5 ? "Play Again" : "Play Next Level"}
                    </button>
                  </ScrollToElement>
                )}
              </div>
            )}

            {!isOpen && !clickedOnPlayButton && (
              <ScrollToElement to="gameBoard">
                <button
                  onClick={() => {
                    setIsOpen(true);
                    setcanScroll(true);
                    setclickedOnPlayButton(true);
                  }}
                  className={`text-[#dadada] border-2 border-solid border-[#dadada] rajdhani px-3 py-2 rounded-md`}
                >
                  Play Game
                </button>
              </ScrollToElement>
            )}
          </div>
        </div>

        <div className="mx-auto z-[100] relative w-[90%] text-center flex flex-col items-center justify-center gap-4">
          <h3
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            className="text-[#dadada] rajdhani  max-w-[820px] mt-3 font-semibold text-md leading-[150.5%]"
          >
            {gameBelowContent[category as keyof GameBelowContent].header}
          </h3>
          <div className="w-full">
            {width > 550 ? (
              <div className=" w-full max-w-[1000px] mx-auto flex flex-wrap items-center justify-center my-4">
                {gameBelowContent[
                  category as keyof GameBelowContent
                ].bulletins.map((info, index) => (
                  <div
                    style={{
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                    className="w-[257px] relative h-[246px] my-3 mx-auto px-3 pt-12 pb-1 flex flex-col items-start justify-between rounded-[22px] border-[#FFA927] bg-[#3B3B3B] border-solid border-2"
                    key={index}
                  >
                    <p className="rajdhani text-[14px] text-[#dadada]">
                      {info.title}
                    </p>
                    <div className="flex relative">
                      <img alt={info.img} width={50} src={info.img} />
                      {(index === 0 || index === 4) && (
                        <img
                          alt={info.img}
                          style={
                            index === 0 || index === 4
                              ? { transform: "rotate" }
                              : {}
                          }
                          className={
                            index === 4
                              ? "absolute bottom-[45px] left-[40px]"
                              : ""
                          }
                          src={info.img}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <Carousel
                  swipeable={false}
                  draggable={false}
                  containerClass="myCarouselForHome"
                  showDots={true}
                  dotListClass="myCarouselDots"
                  responsive={responsive}
                >
                  {gameBelowContent[
                    category as keyof GameBelowContent
                  ].bulletins.map((info, index) => (
                    <div
                      style={{
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                      className="w-[257px] h-[246px] my-3 mx-auto px-3 pt-6 pb-1 flex flex-col items-start justify-between rounded-[22px] border-[#FFA927] bg-[#3B3B3B] border-solid border-2"
                      key={index}
                    >
                      <p className="rajdhani text-[14px] text-[#dadada]">
                        {info.title}
                      </p>
                      <div className="flex relative">
                        <img alt={info.img} width={50} src={info.img} />
                        {(index === 0 || index === 4) && (
                          <img
                            alt={info.img}
                            style={
                              index === 0 || index === 4
                                ? { transform: "rotate" }
                                : {}
                            }
                            className={
                              index === 4
                                ? "absolute bottom-[45px] left-[40px]"
                                : ""
                            }
                            src={info.img}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
        </div>
        {/* <div id="homePage" className="absolute z-[100] w-full">
          
        </div> */}
      </div>
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { category: "Enterprises" } },
      { params: { category: "Innovators" } },
      { params: { category: "Startup" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  return {
    props: {
      category: params?.category,
    },
  };
};

export default Gaming;
