import { UseSizeContext } from "../../state/context";
import css from "./horiCircle.module.css";

type Prop = {
  inView: boolean;
  direction: "right" | "left";
  // isReverse: boolean;
  whichPage: "Home" | "Founder";
};

const HoriCircle = ({ inView, direction, whichPage }: Prop) => {
  const { width } = UseSizeContext();

  function PageColor() {
    if (whichPage === "Home") {
      return ["bg-[#7f7f7f]", "bg-[#707070]", "bg-[#696969]"];
    } else {
      return ["bg-[#525151]", "bg-[#4a4a4a]", "bg-[#434343]"];
    }
  }

  return (
    <div
      className={`absolute z-10 inset-0 overflow-hidden w-[100%] h-[100%] mx-auto flex flex-col ${
        direction === "left" ? "items-start" : "items-end"
      } justify-center`}
    >
      <div
        style={{
          borderRadius:
            direction === "left"
              ? `0px ${
                  width > 1100
                    ? "500px 500px"
                    : width > 1000
                    ? "450px 450px"
                    : width > 900
                    ? "450px 450px"
                    : width > 800
                    ? "400px 400px"
                    : width > 700
                    ? "350px 350px"
                    : width > 600
                    ? "350px 350px"
                    : width > 500
                    ? "250px 250px"
                    : "200px 200px"
                } 0px`
              : `${
                  width > 1100
                    ? "500px 0px 0px 500px"
                    : width > 1000
                    ? "450px 0px 0px 450px"
                    : width > 900
                    ? "450px 0px 0px 450px"
                    : width > 800
                    ? "400px 0px 0px 400px"
                    : width > 700
                    ? "350px 0px 0px 350px"
                    : width > 600
                    ? "350px 0px 0px 350px"
                    : width > 500
                    ? "250px 0px 0px 250px"
                    : "200px 0px 0px 200px"
                }`,
        }}
        className={`${css.semicircle} ${inView ? css.semicircle2InView : ""} ${
          PageColor()[0]
        } flex ${
          direction === "left" ? "justify-start" : "justify-end"
        } items-center`}
      >
        <div
          style={{
            borderRadius:
              direction === "left"
                ? `0px ${
                    width > 1100
                      ? "350px 350px"
                      : width > 1000
                      ? "300px 300px"
                      : width > 900
                      ? "300px 300px"
                      : width > 800
                      ? "250px 250px"
                      : width > 700
                      ? "300px 300px"
                      : "250px 250px"
                  } 0px`
                : `${
                    width > 1100
                      ? "350px 0px 0px 350px"
                      : width > 1000
                      ? "300px 0px 0px 300px"
                      : width > 900
                      ? "300px 0px 0px 300px"
                      : width > 800
                      ? "250px 0px 0px 250px"
                      : width > 700
                      ? "300px 0px 0px 300px"
                      : "250px 0px 0px 250px"
                  }`,
          }}
          className={`${css.semicircle} ${
            inView ? css.semicircle1InView : ""
          } ${PageColor()[1]} flex ${
            direction === "left" ? "justify-start" : "justify-end"
          } items-center`}
        >
          <div
            style={{
              borderRadius:
                direction === "left"
                  ? `0px ${
                      width > 1100
                        ? "200px 200px"
                        : width > 1000
                        ? "150px 150px"
                        : "100px 100px"
                    } 0px`
                  : `${
                      width > 1100
                        ? "200px 0px 0px 200px"
                        : width > 1000
                        ? "150px 0px 0px 150px"
                        : "100px 0px 0px 100px"
                    }`,
            }}
            className={`${css.semicircle} ${PageColor()[2]} relative`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HoriCircle;
