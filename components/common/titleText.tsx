import { UseSizeContext } from "../../state/context";

type Prop = {
  text: string;
  id?: string;
  isAbsolute: boolean;
};

const TitleText = ({ text, id, isAbsolute }: Prop) => {
  const { width } = UseSizeContext();

  // ${
  //       width > 1100
  //         ? "bottom-[650px]"
  //         : width > 1000
  //         ? "bottom-[600px]"
  //         : width > 825
  //         ? "bottom-[550px]"
  //         : "bottom-[605px]"
  //     }
  return (
    <div
      id={id ? id : ""}
      className={`${
        isAbsolute ? "absolute left-0 right-0 top-[40px]" : ""
      }  mx-auto flex items-center justify-center gap-1 sm:gap-2`}
    >
      <div
        className={`h-[3px] ${
          width <= 405 ? "w-[50px]" : "w-[75px]"
        } sm:w-[100px] md:w-[150px] lg:w-[200px] xl:w-[250px] bg-[#d9d9d9] rounded-md`}
      ></div>
      <img
        alt="tile"
        src="/tile.png"
        width={width <= 523 ? 25 : width <= 768 ? 35 : 40}
        height={width <= 523 ? 25 : width <= 768 ? 35 : 40}
      />
      <h1
        style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.91)" }}
        className={`text-[#F2F2F2] font-semibold ${
          width <= 405 ? "text-[15px]" : "text-[20px]"
        } sm:text-[25px] md:text-[30px] rajdhani xl:text-[40px] leading-[137.5%]`}
      >
        {text}
      </h1>
      <img
        alt="tile"
        src="/tile.png"
        width={width <= 523 ? 25 : width <= 768 ? 35 : 40}
        height={width <= 523 ? 25 : width <= 768 ? 35 : 40}
      />
      <div
        className={`h-[3px] ${
          width <= 405 ? "w-[50px]" : "w-[75px]"
        } sm:w-[100px] md:w-[150px] lg:w-[200px] xl:w-[250px] bg-[#d9d9d9] rounded-md`}
      ></div>
    </div>
  );
};

export default TitleText;
