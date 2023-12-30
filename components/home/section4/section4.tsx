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
        <h2 className="text-4xl font-bold text-center w-[90%] mx-auto tracking-tight text-[#dadada] sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <Carousel
          swipeable={false}
          draggable={false}
          containerClass="myCarouselForHome"
          showDots={true}
          dotListClass="myCarouselDots"
          responsive={responsive}
        >
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className="rounded-lg bg-[#dadada] w-[75%] mx-auto p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
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
                    <strong>Paul Starr</strong>
                  </p>
                  <span>Amazon</span>
                </div>
              </div>

              <p className="mt-4 text-[#232323]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                sit rerum incidunt, a consequuntur recusandae ab saepe illo est
                quia obcaecati neque quibusdam eius accusamus error officiis
                atque voluptates magnam!
              </p>
            </div>
          ))}
        </Carousel>
        {/* <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <blockquote
                key={index}
                className="rounded-lg bg-[#dadada] p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <img
                    alt="Man"
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
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
                      <strong>Paul Starr</strong>
                    </p>
                    <span>Amazon</span>
                  </div>
                </div>

                <p className="mt-4 text-[#232323]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa sit rerum incidunt, a consequuntur recusandae ab saepe
                  illo est quia obcaecati neque quibusdam eius accusamus error
                  officiis atque voluptates magnam!
                </p>
              </blockquote>
            ))}
          </div> */}
      </div>
    </section>
  );
};

export default Section4;
