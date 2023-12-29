import React from "react";

interface CardProp {
  image: string;
  text: string;
  className: string;
  onClick: () => void;
}

const Card = ({ image, text, className, onClick }: CardProp) => {
  return (
    <div
      onClick={onClick}
      className={`bg-[#FFA927] cursor-pointer ${className} flex flex-col items-center justify-evenly rounded-[25px] h-[400px] w-[250px]`}
      style={{
        boxShadow:
          "0px 6px 4px 0px rgba(255, 255, 255, 0.44) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <img alt="startup" src={image} width={150} height={150} />
      <h3 className="rajdhani font-medium text-[20px] text-center px-[0.95rem] leading-[137.5%]">
        {text}
      </h3>
    </div>
  );
};

export default Card;
