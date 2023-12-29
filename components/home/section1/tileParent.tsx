import React from "react";
import AnimatedImage from "./bigTile";
import { UseSizeContext } from "../../../state/context";

const TileParent = () => {
  const { width } = UseSizeContext();

  const imageConfigs = [
    { delay: 0, bottom: "100px", left: "0px", className: "z-30" },
    { delay: 1, bottom: "137px", left: "74px", className: "z-20" },
    { delay: 2, bottom: "174px", left: "148px", className: "z-10" },
    { delay: 3, bottom: "210px", left: "74px", className: "z-40" },
    { delay: 4, bottom: "248px", left: "148px", className: "z-20" },
    { delay: 5, bottom: "318px", left: "148px", className: "z-20" },
  ];

  return (
    <div
      style={{ height: "500px" }}
      className={`w-[50%] relative mx-auto ${width > 800 ? "block" : "hidden"}`}
    >
      {imageConfigs.map((config, index) => (
        <AnimatedImage
          key={index}
          delay={config.delay}
          alt={"bigTile"}
          src={"/bigTile.png"}
          bottom={config.bottom}
          left={config.left}
          className={`${config.className}`}
        />
      ))}
    </div>
  );
};

export default TileParent;
