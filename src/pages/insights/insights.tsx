import { Fragment, useEffect, useState } from "react";
import {
  Blog,
  getBlogs,
  getCaseStudies,
  CaseStudy,
  OtherContent,
  getEbookByCategory,
  getWhitePaperByCategory,
} from "../../firebase/function";
import { getSEOById, SEO } from "../../firebase/function";
import { Helmet } from "react-helmet";
import Lottie from "react-lottie";
import * as animationData from "../../loader/loader.json";
import * as emptyAnimationData from "../../loader/empty.json";
import BackCircles from "../../components/common/backCircles";
import { useInView } from "react-intersection-observer";
import Carousel from "react-grid-carousel";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import toast from "react-hot-toast";
import { Timestamp } from "firebase/firestore";
import Loader from "../../components/common/loader";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: emptyAnimationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

interface OpenLinkInNewTabProps {
  url: string;
}

const openLinkInNewTab = ({ url }: OpenLinkInNewTabProps): void => {
  const newTab = window.open(url, "_blank");
  if (newTab) {
    newTab.focus();
  } else {
    console.error(
      "Failed to open link in a new tab. Please check your browser settings."
    );
  }
};

const Insights = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  const [whitePapers, setwhitePapers] = useState<OtherContent[]>([]);
  const [loadingForWhitePaper, setloadingForWhitePaper] = useState(false);
  const [loadingForMoreWhitePaper, setloadingForMoreWhitePaper] =
    useState(false);
  const [lastWhitePaper, setlastWhitePaper] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);

  const [ebooks, setebooks] = useState<OtherContent[]>([]);
  const [loadingForEbook, setloadingForEbook] = useState(false);
  const [loadingForMoreEbook, setloadingForMoreEbook] = useState(false);
  const [lastEBook, setlastEBook] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);

  const [caseStudies, setcaseStudies] = useState<CaseStudy[]>([]);
  const [loadingForCS, setloadingForCS] = useState(false);
  const [loaderForMoreCS, setloaderForMoreCS] = useState(false);
  const [lastDocumentForCS, setlastDocumentForCS] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);

  const [blogs, setblogs] = useState<Blog[]>([]);
  const [loadMoreForBlogs, setloadMoreForBlogs] = useState(false);
  const [loadForBlogs, setloadForBlogs] = useState(false);
  const [lastDocumentForBlogs, setlastDocumentForBlogs] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);

  useEffect(() => {
    // blogs
    (async () => {
      setloadForBlogs(true);
      const blogData = await getBlogs(null, 25);
      setloadForBlogs(false);
      if (blogData === null) {
        toast.error("Error in fetching blogs");
      } else {
        setblogs(blogData.data);
        if (blogData.lastDoc === undefined) {
          setlastDocumentForBlogs(null);
        } else {
          setlastDocumentForBlogs(blogData.lastDoc);
        }
      }
    })();
    // Case Studies
    (async () => {
      setloadingForCS(true);
      const csData = await getCaseStudies(null, 25);
      setloadingForCS(false);
      if (csData === null) {
        toast.error("Error in fetching Case Studies");
      } else {
        setcaseStudies(csData.data);
        if (csData.lastDoc === undefined) {
          setlastDocumentForCS(null);
        } else {
          setlastDocumentForCS(csData.lastDoc);
        }
      }
    })();
    // E-books
    (async () => {
      setloadingForEbook(true);
      const eBooks = await getEbookByCategory(null, 25);
      setloadingForEbook(false);
      if (eBooks === null) {
        toast.error("Error in fetching E-books");
      } else {
        setebooks(eBooks.data);
        if (eBooks.lastDoc === undefined) {
          setlastEBook(null);
        } else {
          setlastEBook(eBooks.lastDoc);
        }
      }
    })();
    // White Paper
    (async () => {
      setloadingForWhitePaper(true);
      const whitePaper = await getWhitePaperByCategory(null, 25);
      setloadingForWhitePaper(false);
      if (whitePaper === null) {
        toast.error("Error in fetching White Papers");
      } else {
        setwhitePapers(whitePaper.data);
        if (whitePaper.lastDoc === undefined) {
          setlastWhitePaper(null);
        } else {
          setlastWhitePaper(whitePaper.lastDoc);
        }
      }
    })();
  }, []);

  const fetchMoreWhitePaper = async () => {
    setloadingForMoreWhitePaper(true);
    const whitePaper = await getWhitePaperByCategory(lastWhitePaper, 25);
    setloadingForMoreWhitePaper(false);
    if (whitePaper === null) {
      toast.error("Error in fetching White Papers");
    } else {
      setwhitePapers(whitePaper.data);
      if (whitePaper.lastDoc === undefined) {
        setlastWhitePaper(null);
      } else {
        setlastWhitePaper(whitePaper.lastDoc);
      }
    }
  };

  const fetchMoreEbooks = async () => {
    setloadingForMoreEbook(true);
    const ebook = await getEbookByCategory(lastEBook, 25);
    setloadingForMoreEbook(false);
    if (ebook === null) {
      toast.error("Error in fetching E-books");
    } else {
      setebooks([...ebooks, ...ebook.data]);
      if (ebook.lastDoc === undefined) {
        setlastEBook(null);
      } else {
        setlastEBook(ebook.lastDoc);
      }
    }
  };

  const fetchMoreBlogs = async () => {
    setloadMoreForBlogs(true);
    const blogData = await getBlogs(lastDocumentForBlogs, 25);
    setloadMoreForBlogs(false);
    if (blogData === null) {
      toast.error("Error in fetching blogs,");
    } else {
      setblogs([...blogs, ...blogData.data]);
      if (blogData.lastDoc === undefined) {
        setlastDocumentForBlogs(null);
      } else {
        setlastDocumentForBlogs(blogData.lastDoc);
      }
    }
  };

  const fetchMoreCS = async () => {
    setloaderForMoreCS(true);
    const csData = await getCaseStudies(lastDocumentForCS, 25);
    setloaderForMoreCS(false);
    if (csData === null) {
      toast.error("Error in fetching blogs,");
    } else {
      setcaseStudies([...caseStudies, ...csData.data]);
      if (csData.lastDoc === undefined) {
        setlastDocumentForCS(null);
      } else {
        setlastDocumentForCS(csData.lastDoc);
      }
    }
  };

  const [seoContent, setseoContent] = useState<SEO | null>(null);

  useEffect(() => {
    (async () => {
      const seo = await getSEOById({ id: "insights" });
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

  if (loadForBlogs && loadingForCS && loadingForEbook && loadingForWhitePaper) {
    return (
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        className="w-full min-h-screen z-[200] flex items-center justify-center"
      >
        <Lottie options={defaultOptions} height={400} width={300} />
      </div>
    );
  }

  return (
    <Fragment>
      <Helmet>
        <title>{seoContent?.title}</title>
        <meta name="description" content={seoContent?.description} />
        <meta name="keywords" content={seoContent?.metaTag}></meta>
      </Helmet>
      <div className="w-full flex flex-col relative min-h-screen" id="homePage">
        <div id="homePage" className="absolute z-[100] w-full">
          <div
            ref={ref}
            className={`flex absolute z-0 w-full p-0 ${"min-h-[90vh] max-h-[100vh]"}`}
          >
            <BackCircles whichPage="Founder" isReverse={true} inView={inView} />
          </div>
          <div className="z-[100] relative w-[90%] my-20 max-w-[1300px] mx-auto flex flex-col gap-4">
            <h1 id="blogs" className="text-[2em] font-bold text-[#ffa115]">
              PPV Blogs
            </h1>

            {blogs.length === 0 ? (
              <div>
                <Lottie options={defaultOptions1} height={400} width={300} />
              </div>
            ) : (
              <Carousel
                cols={4}
                rows={blogs.length >= 6 ? 2 : 1}
                gap={20}
                className=""
              >
                {[...blogs].map((itm, index) => {
                  const heading = itm.content.filter(
                    (cnt) => cnt.type !== "img" && cnt.type !== "p"
                  );

                  const para = itm.content.filter((cnt) => cnt.type === "p");

                  return (
                    <Carousel.Item key={index}>
                      <div
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
                    </Carousel.Item>
                  );
                })}
                {blogs.length >= 6 && lastDocumentForBlogs !== null && (
                  <Carousel.Item>
                    <div className="w-[300px] h-[200px] flex items-center justify-center">
                      <button
                        onClick={() => fetchMoreBlogs()}
                        className="text-white bg-[#FFB545] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                      >
                        {loadMoreForBlogs ? <Loader /> : "Fetch More"}
                      </button>
                    </div>
                  </Carousel.Item>
                )}
              </Carousel>
            )}

            <h1
              id="case-studies"
              className="text-[2em] font-bold text-[#ffa115]"
            >
              Case Studies For You
            </h1>

            {caseStudies.length === 0 ? (
              <div>
                <Lottie options={defaultOptions1} height={400} width={300} />
              </div>
            ) : (
              <Carousel
                cols={4}
                rows={caseStudies.length >= 6 ? 2 : 1}
                gap={20}
              >
                {[...caseStudies].map((itm, index) => {
                  const heading = itm.content.filter(
                    (cnt) => cnt.type !== "img" && cnt.type !== "p"
                  );

                  const para = itm.content.filter((cnt) => cnt.type === "p");

                  return (
                    <Carousel.Item key={index}>
                      <div
                        onClick={() =>
                          openLinkInNewTab({
                            url: `/insights/case-studies/${itm.id}`,
                          })
                        }
                        className="w-[300px]"
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
                          <p className="text-[#dadada] text-[.875rem]">
                            {convertFirebaseTimestamp({
                              timestamp: itm.uploadTime as any,
                            })}
                          </p>
                        </div>
                      </div>
                    </Carousel.Item>
                  );
                })}
                {caseStudies.length >= 6 && loaderForMoreCS !== null && (
                  <Carousel.Item>
                    <div className="w-[300px] h-[200px] flex items-center justify-center">
                      <button
                        onClick={() => fetchMoreCS()}
                        className="text-white bg-[#FFB545] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                      >
                        {loaderForMoreCS ? <Loader /> : "Fetch More"}
                      </button>
                    </div>
                  </Carousel.Item>
                )}
              </Carousel>
            )}

            <h1 id="e-books" className="text-[2em] font-bold text-[#ffa115]">
              E-books
            </h1>

            {ebooks.length === 0 ? (
              <div>
                <Lottie options={defaultOptions1} height={400} width={300} />
              </div>
            ) : (
              <Carousel cols={4} rows={ebooks.length >= 6 ? 2 : 1} gap={20}>
                {[...ebooks].map((itm, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <div
                        onClick={() => openLinkInNewTab({ url: itm.fileUrl })}
                        className="w-[300px] "
                      >
                        <div
                          style={{
                            background:
                              "linear-gradient(120deg, rgb(246, 211, 101), rgb(253, 160, 133))",
                          }}
                          className="h-[200px] flex items-center justify-center rounded-md bg-no-repeat bg-center bg-cover"
                        >
                          <img alt="blog" src="/logo.png" width={200} />
                        </div>
                        <h1 className="cursor-pointer hover:underline font-semibold text-[1rem] leading-[1.57] text-[#dadada]">
                          {itm.title}
                        </h1>
                        <p className="cursor-pointer hover:underline font-semibold text-[.875rem] leading-[1.57] text-[#dadada]">
                          {itm.type}
                        </p>
                      </div>
                    </Carousel.Item>
                  );
                })}
                {ebooks.length >= 6 && loadingForMoreEbook !== null && (
                  <Carousel.Item>
                    <div className="w-[300px] h-[200px] flex items-center justify-center">
                      <button
                        onClick={() => fetchMoreEbooks()}
                        className="text-white bg-[#FFB545] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                      >
                        {loadingForMoreEbook ? <Loader /> : "Fetch More"}
                      </button>
                    </div>
                  </Carousel.Item>
                )}
              </Carousel>
            )}

            <h1
              id="white-papers"
              className="text-[2em] font-bold text-[#ffa115]"
            >
              White Papers
            </h1>

            {whitePapers.length === 0 ? (
              <div>
                <Lottie options={defaultOptions1} height={400} width={300} />
              </div>
            ) : (
              <Carousel
                cols={4}
                rows={whitePapers.length >= 6 ? 2 : 1}
                gap={20}
              >
                {[...whitePapers].map((itm, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <div
                        onClick={() => openLinkInNewTab({ url: itm.fileUrl })}
                        className="w-[300px] cursor-pointer"
                      >
                        <div
                          style={{
                            background:
                              "linear-gradient(120deg, rgb(246, 211, 101), rgb(253, 160, 133))",
                          }}
                          className="h-[200px] flex items-center justify-center rounded-md bg-no-repeat bg-center bg-cover"
                        >
                          <img alt="blog" src="/logo.png" width={200} />
                        </div>
                        <h1 className="cursor-pointer hover:underline font-semibold text-[1rem] leading-[1.57] text-[#dadada]">
                          {itm.title}
                        </h1>
                        <p className="cursor-pointer hover:underline font-semibold text-[.875rem] leading-[1.57] text-[#dadada]">
                          {itm.type}
                        </p>
                      </div>
                    </Carousel.Item>
                  );
                })}
                {whitePapers.length >= 6 &&
                  loadingForMoreWhitePaper !== null && (
                    <Carousel.Item>
                      <div className="w-[300px] h-[200px] flex items-center justify-center">
                        <button
                          onClick={() => fetchMoreWhitePaper()}
                          className="text-white bg-[#FFB545] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                          {loadingForMoreWhitePaper ? <Loader /> : "Fetch More"}
                        </button>
                      </div>
                    </Carousel.Item>
                  )}
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Insights;
