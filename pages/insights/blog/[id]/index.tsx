import React, { Fragment, useEffect, useState } from "react";
import { getSEOById, SEO } from "../../../../firebase/function";
import Head from "next/head";
import { getBlogById, Blog, getBlogs } from "../../../../firebase/function";
import { useInView } from "react-intersection-observer";
import BackCircles from "../../../../components/common/backCircles";
import toast from "react-hot-toast";
import Lottie from "react-lottie";
import * as animationData from "../../../../loader/loader.json";
import { Timestamp } from "firebase/firestore";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import Carousel from "react-multi-carousel";
import { useRouter } from "next/router";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function formatDate({ timestamp }: { timestamp: Timestamp | null }) {
  if (!timestamp) return;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = timestamp.toDate(); // Convert Firebase Timestamp to JavaScript Date
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

const BlogComponent = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  const navigate = useRouter();
  const { id } = navigate.query;
  const [fetchLoader, setfetchLoader] = useState(false);
  const [blog, setblog] = useState<Blog | null>(null);

  const [blogs, setblogs] = useState<Blog[]>([]);
  const [loadForBlogs, setloadForBlogs] = useState(false);

  useEffect(() => {
    // blogs
    (async () => {
      setloadForBlogs(true);
      const blogData = await getBlogs(null, 8);
      setloadForBlogs(false);
      if (blogData === null) {
        toast.error("Error in fetching blogs");
      } else {
        setblogs(blogData.data.filter((doc) => doc.id !== id));
      }
    })();

    if (id) {
      (async () => {
        setfetchLoader(true);
        const blogData = await getBlogById(id as string);

        setfetchLoader(false);
        if (blogData === null) {
          toast.error("Error in fetching blog");
          setTimeout(() => {
            navigate.push("/insights#blogs");
          }, 1000);
        } else if (blogData === "no-doc") {
          toast.error("No blog exists");
          setTimeout(() => {
            navigate.push("/insights#blogs");
          }, 1000);
        } else {
          setblog(blogData as Blog);
        }
      })();
    }
  }, [id]);

  const openLinkInNewTab = ({ url }: { url: string }): void => {
    if (typeof window === "undefined") return;
    const newTab = window.open(url, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
      console.error(
        "Failed to open link in a new tab. Please check your browser settings."
      );
    }
  };

  const convertFirebaseTimestamp = ({
    timestamp,
  }: {
    timestamp: Timestamp;
  }): string => {
    const date = timestamp.toDate();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear().toString();

    return `${month}/${day}/${year}`;
  };

  const [seoContent, setseoContent] = useState<SEO | null>(null);

  useEffect(() => {
    (async () => {
      const seo = await getSEOById({ id: "blog" });
      if (seo === null) {
        setseoContent({
          title: "Platform Play Venture",
          description:
            "In a world where consumers are adopting technology at an exponential pace, the success of your business depends on how effective your digital presence is. At Platform Play Venture, we undertake end-to-end consulting for your brand's digital platforms enablement as well as growth hacking in a digitally disrupted ecosystem with bespoke marketing strategy creation and solutions implementation",
          metaTag:
            "Marketing, branding and holistic growth for organizations and businesses who want amazing customer experiences and high conversion rates in multi-channel environments in a digitally disrupted ecosystem",
        });
      } else {
        setseoContent(seo as SEO);
      }
    })();
  }, []);

  if (fetchLoader && blog === null && loadForBlogs) {
    return (
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        className="w-full min-h-screen z-[200] flex items-center justify-center"
      >
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{seoContent?.title}</title>
        <meta name="description" content={seoContent?.description} />
        <meta name="keywords" content={seoContent?.metaTag}></meta>
      </Head>
      <div className="w-full flex flex-col relative min-h-screen" id="homePage">
        <div id="homePage" className="absolute z-[100] w-full">
          <div
            ref={ref}
            className={`flex absolute z-0 w-full p-0 ${"min-h-[90vh] max-h-[100vh]"}`}
          >
            <BackCircles whichPage="Founder" direction="top" inView={inView} />
          </div>
          <div className="z-[100] relative w-[90%] my-20 max-w-[1300px] mx-auto flex flex-col gap-4">
            <h1 className="text-[2.25rem] font-semibold text-[#dadada]">
              {blog?.content[0].value}
            </h1>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex items-center justify-between w-full">
              <h3 className="hover:underline text-[#dadada] font-semibold text-[1rem]">
                <a href="/#">{blog?.author.name}</a>
              </h3>
              <h3 className="text-[#dadada] font-semibSold">
                Last Updated:{" "}
                {formatDate({ timestamp: blog?.uploadTime as any })}
              </h3>
            </div>
            <div className="border-t border-gray-300 my-4"></div>

            <div className="w-[75%] mx-auto">
              {blog?.content.slice(1).map((itm, index) => (
                <>
                  {itm.type === "h1" ? (
                    <h1
                      key={index}
                      className="my-4 text-4xl font-bold text-[#dadada]"
                    >
                      {itm.value}
                    </h1>
                  ) : itm.type === "h2" ? (
                    <h2
                      key={index}
                      className="my-4 text-3xl font-bold text-[#dadada]"
                    >
                      {itm.value}
                    </h2>
                  ) : itm.type === "h3" ? (
                    <h3
                      key={index}
                      className="my-4 text-2xl font-bold text-[#dadada]"
                    >
                      {itm.value}
                    </h3>
                  ) : itm.type === "h4" ? (
                    <h4
                      key={index}
                      className="my-4 text-xl font-bold text-[#dadada]"
                    >
                      {itm.value}
                    </h4>
                  ) : itm.type === "h5" ? (
                    <h5
                      key={index}
                      className="my-4 text-lg font-bold text-[#dadada]"
                    >
                      {itm.value}
                    </h5>
                  ) : itm.type === "h6" ? (
                    <h6
                      key={index}
                      className="my-4 text-base font-bold text-[#dadada]"
                    >
                      {itm.value}
                    </h6>
                  ) : itm.type === "p" ? (
                    <p
                      key={index}
                      className="my-4 text-[1.125rem] text-[#dadada]"
                    >
                      {itm.value}
                    </p>
                  ) : (
                    <img
                      key={index}
                      className="my-4 "
                      alt={itm.value}
                      src={itm.value}
                    />
                  )}
                </>
              ))}

              <h3 className="text-center text-[#dadada] text-[1.125rem] font-[600]">
                Don't forget to share this post
              </h3>
              <div className="w-max my-4 mx-auto flex items-center gap-3">
                <EmailShareButton
                  url={
                    typeof window !== "undefined"
                      ? `${window.location.origin}/insights/blog/${id}`
                      : ""
                  }
                >
                  <EmailIcon round={true} size={30} />
                </EmailShareButton>
                <FacebookShareButton
                  url={
                    typeof window !== "undefined"
                      ? `${window.location.origin}/insights/blog/${id}`
                      : ""
                  }
                >
                  <FacebookIcon round={true} size={30} />
                </FacebookShareButton>
                <LinkedinShareButton
                  url={
                    typeof window !== "undefined"
                      ? `${window.location.origin}/insights/blog/${id}`
                      : ""
                  }
                >
                  <LinkedinIcon round={true} size={30} />
                </LinkedinShareButton>
                <RedditShareButton
                  url={
                    typeof window !== "undefined"
                      ? `${window.location.origin}/insights/blog/${id}`
                      : ""
                  }
                >
                  <RedditIcon round={true} size={30} />
                </RedditShareButton>
                <TelegramShareButton
                  url={
                    typeof window !== "undefined"
                      ? `${window.location.origin}/insights/blog/${id}`
                      : ""
                  }
                >
                  <TelegramIcon round={true} size={30} />
                </TelegramShareButton>
                <TwitterShareButton
                  url={
                    typeof window !== "undefined"
                      ? `${window.location.origin}/insights/blog/${id}`
                      : ""
                  }
                >
                  <TwitterIcon round={true} size={30} />
                </TwitterShareButton>
                <WhatsappShareButton
                  url={
                    typeof window !== "undefined"
                      ? `${window.location.origin}/insights/blog/${id}`
                      : ""
                  }
                >
                  <WhatsappIcon round={true} size={30} />
                </WhatsappShareButton>
              </div>

              {blogs.length > 0 && (
                <h2 className="text-[#dadada] mt-20 text-[2rem] font-bold text-center">
                  More Blogs
                </h2>
              )}
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                itemClass="mx-1"
                containerClass="my-4"
              >
                {[...blogs].map((itm, index) => {
                  const heading = itm.content.filter(
                    (cnt) => cnt.type !== "img" && cnt.type !== "p"
                  );

                  const para = itm.content.filter((cnt) => cnt.type === "p");
                  return (
                    <div
                      key={index}
                      onClick={() =>
                        openLinkInNewTab({ url: `/insights/blog/${itm.id}` })
                      }
                      className="w-[300px] cursor-pointer"
                    >
                      <div
                        className="h-[200px] flex items-center justify-center rounded-md bg-no-repeat bg-center bg-cover"
                        style={{
                          background:
                            "linear-gradient(120deg, rgb(246, 211, 101), rgb(253, 160, 133))",
                        }}
                      >
                        <img alt="blog" src="/logo.png" width={200} />
                      </div>
                      <h1 className="cursor-pointer hover:underline font-semibold text-[1rem] leading-[1.57] text-[#dadada]">
                        {heading[0].value}
                      </h1>
                      <p className="cursor-pointer hover:underline font-semibold text-[.875rem] leading-[1.57] text-[#dadada]">
                        {para[0].value.length > 100
                          ? para[0].value.substring(0, 100)
                          : para[0].value}
                      </p>
                      <div className="flex items-center justify-between">
                        <h4 className="text-[#dadada] text-[.875rem]">
                          {itm.author.name}
                        </h4>
                        <p className="text-[#dadada] text-[.875rem]">
                          {convertFirebaseTimestamp({
                            timestamp: itm.uploadTime as any,
                          })}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogComponent;
