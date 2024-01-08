import TitleText from "@/components/common/titleText";
import { clientTestimonial } from "@/content/game/homePage";
import React from "react";
import Carousel from "react-multi-carousel";

const Section4 = () => {
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

  return (
    <section>
      <div className="mx-auto max-w-[1300px] sm:px-6 lg:px-8 lg:py-16">
        <TitleText isAbsolute={false} text="Client Testimonials" />
        <Carousel
          swipeable={false}
          draggable={false}
          containerClass="mt-6"
          showDots={false}
          responsive={responsive}
        >
          {[...clientTestimonial].map((itm, index) => (
            <div
              key={index}
              className="rounded-lg bg-[#dadada] w-[75%] mx-auto p-6 shadow-sm sm:p-8"
            >
              <div className="flex sm:flex-row flex-col items-center gap-4">
                <img
                  alt="Man"
                  src={itm.img}
                  className="object-cover max-w-[100px] rounded-md"
                  // className="h-14 w-14 rounded-full object-cover"
                />

                <div className="flex flex-col items-start">
                  <div className="flex justify-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((_, ind) => (
                      <svg
                        key={ind}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="#FFB545"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    <strong>{itm.companyName}</strong>
                  </p>
                  <span>
                    {itm.clientName} ({itm.designation})
                  </span>
                </div>
              </div>

              <p className="mt-4 text-[#232323]">{itm.words}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Section4;
