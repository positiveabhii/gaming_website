import React from "react";
import { boxes } from "../../../content/game/homePage";
import Carousel from "react-multi-carousel";
import { UseSizeContext } from "../../../state/context";
import TitleText from "../../common/titleText";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const Section3 = () => {
  const { width } = UseSizeContext();

  return (
    <section className="my-12">
      <TitleText isAbsolute={false} text="Our Areas of Expertise" />
      {width > 550 ? (
        <>
          <div className="grid w-full max-w-[1300px] mx-auto grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4">
            {boxes.slice(0, 4).map((info, index) => (
              <div
                style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                className="w-[257px] relative h-[246px] my-3 mx-auto px-3 pt-6 pb-1 flex flex-col items-start justify-between rounded-[22px] border-[#FFA927] bg-[#3B3B3B] border-solid border-2"
                key={index}
              >
                <p className="rajdhani text-[16px] text-[#dadada]">
                  {info.info}
                </p>
                <div className="flex">
                  <img className="max-w-[75px]" alt={info.img} src={info.img} />
                  {index === 0 && (
                    <img
                      className="max-w-[75px]"
                      alt={info.img}
                      src={info.img}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="grid w-full lg:w-[75%] max-w-[1300px] mx-auto grid-cols-2 md:grid-cols-3 my-4">
            {boxes.slice(4).map((info, index) => (
              <div
                style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                className="w-[257px] relative h-[246px] my-3 mx-auto px-3 pt-6 pb-1 flex flex-col items-start justify-between rounded-[22px] border-[#FFA927] bg-[#3B3B3B] border-solid border-2"
                key={index}
              >
                <p className="rajdhani text-[16px] text-[#dadada]">
                  {info.info}
                </p>
                <div className="flex">
                  <img className="max-w-[75px]" alt={info.img} src={info.img} />
                  {index === 0 && (
                    <img
                      style={index === 0 ? { transform: "rotate" } : {}}
                      className={
                        index === 0
                          ? "max-w-[75px] absolute bottom-[45px] left-[40px]"
                          : "max-w-[75px]"
                      }
                      alt={info.img}
                      src={info.img}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
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
            {boxes.map((info, index) => (
              <div
                style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                className="w-[257px] h-[246px] my-3 mx-auto px-3 pt-6 pb-1 flex flex-col items-start justify-between rounded-[22px] border-[#FFA927] bg-[#3B3B3B] border-solid border-2"
                key={index}
              >
                <p className="rajdhani text-[16px] text-[#dadada]">
                  {info.info}
                </p>
                <div className="flex">
                  <img alt={info.img} src={info.img} />
                  {(index === 0 || index === 4) && (
                    <img
                      alt={info.img}
                      style={index === 4 ? { transform: "rotate" } : {}}
                      className={
                        index === 4 ? "absolute bottom-[45px] left-[40px]" : ""
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
    </section>
  );
};

export default Section3;
