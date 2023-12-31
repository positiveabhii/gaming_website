import React, { useState } from "react";
import { UseSizeContext } from "../../../state/context";
import { useInView } from "react-intersection-observer";
import { cardOnHero } from "../../../content/cardContent";
import Card from "./card";
import css from "./card.module.css";
import BackCircles from "../../common/backCircles";
import TitleText from "../../common/titleText";
import { useSwipeable } from "react-swipeable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Section2 = () => {
  const { width } = UseSizeContext();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  const [activeCardIndex, setActiveCardIndex] = useState(1);

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index);
  };
  const navigate = useRouter();

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      handleCardClick(
        activeCardIndex === 0 ? 1 : activeCardIndex === 1 ? 2 : 0
      ),
    onSwipedRight: () =>
      handleCardClick(
        activeCardIndex === 2 ? 1 : activeCardIndex === 1 ? 0 : 2
      ),
  });

  return (
    <section
      className={`max-w-[1300px] relative  mx-auto flex flex-col w-full items-center justify-center `}
    >
      <div className={`flex relative w-full min-h-[600px] h-[100vh] p-0`}>
        <TitleText isAbsolute={true} text=" LET US HELP YOU" />
        {width > 825 ? (
          <div
            ref={ref}
            className={`relative z-20 flex w-full h-full mx-auto justify-evenly`}
          >
            <div
              className={` bottom-[50px] h-[15px] flex items-center justify-center gap-4 absolute`}
            >
              <span className="w-[15px] h-[15px] rounded-full bg-[#F2F2F2]"></span>
              <span className="w-[15px] h-[15px] rounded-full bg-[#F2F2F2]"></span>
              <span className="w-[15px] h-[15px] rounded-full bg-[#F2F2F2]"></span>
            </div>
            <Card
              onClick={() => {
                navigate.push("/solution/Startups");
              }}
              // ${
              //   width > 1100
              //     ? "bottom-[200px]"
              //     : width > 1000
              //     ? "bottom-[150px]"
              //     : "bottom-[100px]"
              // }
              className={`${css.cardSlide} ${css.cardScale}`}
              image="/startup.png"
              text="I’m a Startup Founder looking to brand & market a product or service"
            />
            <Card
              onClick={() => {
                navigate.push("/solution/Enterprises");
              }}
              // ${
              //   width > 1100
              //     ? "bottom-[200px]"
              //     : width > 1000
              //     ? "bottom-[150px]"
              //     : "bottom-[100px]"
              // }
              className={`${css.cardSlide} ${css.cardScale0} ${
                inView ? css.cardSlideIn : css.cardSlideOut
              }`}
              image="/cxo.png"
              text="I’m the CXO of an Enterprise looking for innovative growth strategies"
            />
            <Card
              onClick={() => {
                navigate.push("/solution/Innovators");
              }}
              // ${
              //   width > 1100
              //     ? "bottom-[200px]"
              //     : width > 1000
              //     ? "bottom-[150px]"
              //     : "bottom-[100px]"
              // }
              className={`${css.cardSlide} ${css.cardScale1} ${
                inView ? css.cardSlideIn2 : css.cardSlideOut
              }`}
              image="/visionary.png"
              text="I’m an Innovator looking to develop a niche digital platform or app"
            />
          </div>
        ) : (
          <div
            {...handlers}
            ref={ref}
            style={{
              touchAction: "none",
              perspective: "2000px", // Depth perspective for 3D effect
              transformStyle: "preserve-3d", // Preserve 3D transformations
            }}
            className="relative z-20 flex w-full mx-auto justify-evenly"
          >
            <div className="z-100 bottom-[50px] flex items-center justify-center gap-4 absolute">
              <span
                onClick={() => handleCardClick(0)}
                className="w-[15px] h-[15px] rounded-full bg-[#F2F2F2]"
              ></span>
              <span
                onClick={() => handleCardClick(1)}
                className="w-[15px] h-[15px] rounded-full bg-[#F2F2F2]"
              ></span>
              <span
                onClick={() => handleCardClick(2)}
                className="w-[15px] h-[15px] rounded-full bg-[#F2F2F2]"
              ></span>
            </div>
            <div
              onClick={() =>
                handleCardClick(
                  activeCardIndex === 0 ? 1 : activeCardIndex === 1 ? 2 : 0
                )
              }
              className="absolute left-0 top-1/2"
            >
              <FontAwesomeIcon size="2x" icon={faChevronCircleLeft} />
            </div>
            <div
              onClick={() =>
                handleCardClick(
                  activeCardIndex === 2 ? 1 : activeCardIndex === 1 ? 0 : 2
                )
              }
              className="absolute right-0 top-1/2"
            >
              <FontAwesomeIcon size="2x" icon={faChevronCircleRight} />
            </div>
            {cardOnHero.map((card, index) => (
              <Card
                key={index}
                className={`${css.carouselCard} ${
                  width > 555
                    ? "bottom-[140px]"
                    : width > 455
                    ? "bottom-[130px]"
                    : "bottom-[120px]"
                } ${
                  !inView
                    ? css.cardLeft
                    : activeCardIndex === index
                    ? css.cardCenter
                    : (activeCardIndex === 1 && index === 2) ||
                      (activeCardIndex === 2 && index === 0) ||
                      (activeCardIndex === 0 && index === 1)
                    ? css.cardRight
                    : css.cardLeft
                }`}
                image={card.image}
                text={card.text}
                onClick={() => {
                  if (activeCardIndex === index) {
                    if (activeCardIndex === 0) {
                      navigate.push(card.navigate);
                    } else if (activeCardIndex === 1) {
                      navigate.push(card.navigate);
                    } else if (activeCardIndex === 2) {
                      navigate.push(card.navigate);
                    }
                  } else {
                    handleCardClick(index);
                  }
                }}
              />
            ))}
          </div>
        )}
        <BackCircles whichPage="Home" direction="bottom" inView={inView} />
      </div>
    </section>
  );
};

export default Section2;
