import React, { createRef } from "react";
import Carousel from "react-multi-carousel";
import "./section4.css";
import TitleText from "../../common/titleText";

const Section4 = () => {
  const responsive = {
    mobile: {
      breakpoint: { max: 3000, min: 350 },
      items: 1,
    },
  };

  const carouselRef = createRef<Carousel>();

  function previous() {
    carouselRef.current?.previous(0);
  }

  function next() {
    carouselRef.current?.next(0);
  }

  return (
    <div className="flex flex-col items-center justify-center max-w-[1300px] mx-auto">
      <TitleText isAbsolute={false} text="Wall of love" />
      <svg
        viewBox="0 0 24 27"
        className="h-12 mx-auto mb-3 text-[#dadada]"
        fill="#dadada"
        color="#dadada"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
          fill="currentColor"
        ></path>
      </svg>
      <Carousel
        ref={carouselRef}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        showDots={true}
        className="w-[50%]"
        dotListClass="bottom-[-50px]"
        responsive={responsive}
      >
        {[
          "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
          "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
          "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
        ].map((itm, index) => (
          <div className="mb-6 mx-auto" key={index}>
            <p className="text-center text-[#dadada] text-[1.5rem] font-semibold">
              {itm}
            </p>
            <img alt="logo" src="/logo.png" className="w-[200px] mx-auto" />
          </div>
        ))}
      </Carousel>
      <div className="flex items-center justify-center gap-2">
        <svg
          onClick={previous}
          className="h-8 mx-auto cursor-pointer mb-3 text-[#dadada]"
          fill="#dadada"
          color="#dadada"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          onClick={next}
          className="h-8 mx-auto cursor-pointer mb-3 text-[#dadada]"
          fill="#dadada"
          color="#dadada"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Section4;
