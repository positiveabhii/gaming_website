import { motion } from "framer-motion";

type CardInfo = { title: string; para: string };

type FounderCardProp = {
  startAnimation: boolean;
  founderData: { [key: string]: CardInfo };
  onClickImage: () => void;
  img: string;
};

const cardWidth = "200px";
const cardHeight = "315px";

const FounderCard = ({
  startAnimation,
  img,
  founderData,
  onClickImage,
}: FounderCardProp) => {
  const cardsList = ["A", "K", "Q", "J", "10", "9", "8"];
  return (
    <div className="flex flex-wrap items-center justify-center relative my-6 gap-12 max-w-[1100px] mx-auto w-[90%]">
      {cardsList.map((_, ind) => (
        <div
          className="rounded-[20px] relative"
          style={{
            border: "1px solid #D2D2D2",
            width: cardWidth,
            height: cardHeight,
            background: "rgba(242, 242, 242, 0.00)",
            boxShadow: "0px 5px 34px 0px rgba(0, 0, 0, 0.10)",
          }}
        >
          {ind === 0 ? (
            cardsList.map((itm, index) => (
              <motion.div
                initial={{ x: 0 }}
                animate={
                  startAnimation
                    ? index === 6
                      ? { x: 0, y: 0 }
                      : {
                          x:
                            index <= 2
                              ? 248 * (index + 1)
                              : index === 3
                              ? 123
                              : index === 4
                              ? 372
                              : 620,
                          y: index > 2 ? 360 : 0,
                        }
                    : { x: 0 }
                }
                transition={{ delay: index / 1.3 }}
                className="rounded-[20px] rajdhani absolute"
                style={{
                  // border: "1px solid #D2D2D2",
                  top: `0px`,
                  width: cardWidth,
                  height: cardHeight,
                  // background: "#141415",
                  backgroundImage: "url('/CardFront1.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  color: "#dadada",
                  boxShadow: "0px 5px 34px 0px rgba(0, 0, 0, 0.10)",
                }}
                key={index}
              >
                {index === 6 ? (
                  <img
                    onClick={onClickImage}
                    alt="founder_card"
                    src={img}
                    style={{ width: cardWidth, height: cardHeight }}
                    className={`w-[${cardWidth}] cursor-pointer`}
                  />
                ) : (
                  <div className="relative p-6">
                    {/* <h1 className="text-[#F89E19] text-[30px] font-extrabold">
                      {itm}
                    </h1>
                    <img alt="brick" src="/brick.png" /> */}
                    <h2 className="whitespace-nowrap text-[13px] font-bold mt-12">
                      {startAnimation
                        ? founderData[itm as keyof CardInfo]?.title
                        : ""}
                    </h2>
                    <span className="text-[12px] font-medium">
                      {startAnimation
                        ? founderData[itm as keyof CardInfo]?.para
                        : ""}
                    </span>
                  </div>
                )}
              </motion.div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FounderCard;
