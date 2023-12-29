import { UseSizeContext } from "../../state/context";
import "./backCircle.css";

type Prop = {
  inView: boolean;
  isReverse: boolean;
  whichPage: "Home" | "Founder";
};

const BackCircles = ({ inView, isReverse, whichPage }: Prop) => {
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
        isReverse ? "justify-start" : "justify-end"
      } items-center`}
    >
      <div
        style={{
          borderRadius: `${isReverse ? "0px 0px" : ""} ${
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
          } ${!isReverse ? "0px 0px" : ""}`,
        }}
        className={`semicircle ${inView ? "semicircle2InView" : ""} ${
          PageColor()[0]
        } flex ${isReverse ? "items-start" : "items-end"} justify-center`}
      >
        <div
          style={{
            borderRadius: `${isReverse ? "0px 0px" : ""} ${
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
            } ${!isReverse ? "0px 0px" : ""}`,
          }}
          className={`semicircle ${inView ? "semicircle1InView" : ""} ${
            PageColor()[1]
          } flex ${isReverse ? "items-start" : "items-end"} justify-center`}
        >
          <div
            style={{
              borderRadius: `${isReverse ? "0px 0px" : ""} ${
                width > 1100
                  ? "200px 200px"
                  : width > 1000
                  ? "150px 150px"
                  : "100px 100px"
              } ${!isReverse ? "0px 0px" : ""}`,
            }}
            className={`semicircle ${PageColor()[2]} relative`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BackCircles;
