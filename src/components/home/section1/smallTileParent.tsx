import { UseSizeContext } from "../../../state/context";
import React from "react";
import SmallTile from "./smallTile";

const SmallTileParent = () => {
  const { width } = UseSizeContext();

  const imageConfigs = [
    { delay: 0, bottom: "0px", left: "0px", className: "z-30" },
    { delay: 1, bottom: "6px", left: "13px", className: "z-20" },
    { delay: 2, bottom: "12px", left: "26px", className: "z-10" },
    { delay: 3, bottom: "18px", left: "13px", className: "z-40" },
    { delay: 4, bottom: "24px", left: "26px", className: "z-20" },
    { delay: 5, bottom: "36px", left: "26px", className: "z-20" },
  ];

  return (
    <div
      className={`absolute w-[75px] right-0 ${
        width > 800 ? "top-[35px]" : "top-[100px]"
      }  h-[75px] ${width < 800 ? "block" : "hidden"}`}
    >
      {imageConfigs.map((config, index) => (
        <SmallTile
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

export default SmallTileParent;
