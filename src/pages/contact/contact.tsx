import { useInView } from "react-intersection-observer";
import "./contact.css";
import { useState, useEffect, Fragment } from "react";
import toast from "react-hot-toast";
import { saveContactForm } from "../../firebase/function";
import BackCircles from "../../components/common/backCircles";
import Lottie from "react-lottie";
import * as animationData from "../../loader/loader.json";
import TitleText from "../../components/common/titleText";
import { getSEOById, SEO } from "../../firebase/function";
import { Helmet } from "react-helmet";

type EnquiringForType =
  | "Startup Consulting"
  | "Enterprise Growth"
  | "Platform or App Development"
  | "Other";

const Contact = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [annualMarketingBudget, setAnnualMarketingBudget] = useState("");
  const [remarks, setRemarks] = useState("");
  const [enquiringFor, setEnquiringFor] =
    useState<EnquiringForType>("Enterprise Growth");

  const [loader, setloader] = useState(false);

  // Validation functions
  const isValidEmail = (value: string): boolean => {
    // Implement your email validation logic here
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
  };

  const isValidPhoneNumber = (value: string): boolean => {
    // Implement your phone number validation logic here
    return /^[0-9]{10}$/.test(value);
  };

  const isValidName = (value: string): boolean => {
    // Implement your name validation logic here (min length 4 characters)
    return value.length >= 4;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !companyName ||
      !phoneNumber ||
      !designation ||
      !annualMarketingBudget ||
      !enquiringFor
    ) {
      toast.error("These fields are required");
      return;
    }

    // Add validation checks
    if (!isValidEmail(email)) {
      toast.error("Please enter valid email.");
      return;
    }
    if (!isValidPhoneNumber(phoneNumber)) {
      toast.error("Please enter valid phone number.");
      return;
    }
    if (!isValidName(name)) {
      toast.error("Please enter valid name");
      return;
    }
    if (Number(annualMarketingBudget) < 0) {
      toast.error("Please enter valid budget value.");
      return;
    }

    setloader(true);
    const result = await saveContactForm({
      name,
      email,
      phoneNumber,
      designation,
      annualMarketingBudget,
      remarks,
      enquiringFor,
      companyName,
    });
    if (result === null) {
      toast.error("Error occured, try again later.");
    } else {
      toast.success("Thank you for contacting us");
    }
    // Clear all fields after successful submission
    setName("");
    setEmail("");
    setPhoneNumber("");
    setDesignation("");
    setAnnualMarketingBudget("");
    setRemarks("");
    setEnquiringFor("Enterprise Growth");
    setCompanyName("");
    setloader(false);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [seoContent, setseoContent] = useState<SEO | null>(null);

  useEffect(() => {
    (async () => {
      const seo = await getSEOById({ id: "contactus" });
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

  return (
    <Fragment>
      <Helmet>
        <title>{seoContent?.title}</title>
        <meta name="description" content={seoContent?.description} />
        <meta name="keywords" content={seoContent?.metaTag}></meta>
      </Helmet>
      <div id="homePage" className="relative min-h-screen w-full">
        {loader && (
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            className="absolute w-full h-full z-[200] flex items-center justify-center"
          >
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        )}
        <div
          ref={ref}
          className={`flex absolute z-0 w-full p-0 ${"min-h-[90vh] max-h-[100vh]"}`}
        >
          <BackCircles whichPage="Founder" isReverse={true} inView={inView} />
        </div>

        <div className="relative z-[100] flex flex-col items-center gap-4 py-12">
          <TitleText text="Contact Us" isAbsolute={false} />
          <form
            // style={{
            //   background: "rgba(51, 51, 51, 0.49)",
            //   border: "4px solid #FFF",
            // }}
            onSubmit={handleSubmit}
            className="text-[#dadada] rounded-[30px] p-12 pt-0 formContact"
          >
            <section>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-[14px] px-[30px]  border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] h-[70px] bg-[#dadada] rounded-md"
                />
              </div>
              <div>
                <label>Company Name:</label>
                <input
                  type="text"
                  placeholder="Enter your company name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full py-[14px] px-[30px]  border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] h-[70px] bg-[#dadada] rounded-md"
                />
              </div>
            </section>
            <section>
              <div>
                <label>Designation:</label>{" "}
                <input
                  type="text"
                  placeholder="Enter your designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  className="w-full py-[14px] px-[30px]  border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] h-[70px] bg-[#dadada] rounded-md"
                />
              </div>
              <div>
                <label>Phone Number:</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full py-[14px] px-[30px]  border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] h-[70px] bg-[#dadada] rounded-md"
                />
              </div>
            </section>
            <section>
              <div>
                <label>Email:</label>{" "}
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-[14px] px-[30px]  border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] h-[70px] bg-[#dadada] rounded-md"
                />
              </div>
              <div>
                <label>Enquiring for:</label>
                <select
                  value={enquiringFor}
                  onChange={(e) =>
                    setEnquiringFor(e.target.value as EnquiringForType)
                  }
                  className="w-full py-[14px] bx-[30px]transparent p-2 border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] h-[70px] bg-[#dadada] rounded-md"
                >
                  <option
                    className="bg-black text-[#FFA115]"
                    value="Startup Consulting"
                  >
                    Startup Consulting
                  </option>
                  <option
                    className="bg-black text-[#FFA115]"
                    value="Enterprise Growth"
                  >
                    Enterprise Growth
                  </option>
                  <option
                    className="bg-black text-[#FFA115]"
                    value="Platform or App Development"
                  >
                    Platform or App Development
                  </option>
                  <option className="bg-black text-[#FFA115]" value="Other">
                    Other
                  </option>
                </select>
              </div>
            </section>
            <section id="lastSection">
              <div className="col-span-2">
                <label>Current Annual Marketing Budget:</label>
                <input
                  type="number"
                  placeholder="Enter your annual marketing budget"
                  value={annualMarketingBudget}
                  onChange={(e) => setAnnualMarketingBudget(e.target.value)}
                  className="w-full py-[14px] px-[30px]  border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] h-[70px] bg-[#dadada] rounded-md"
                />
              </div>
              <div className="col-span-2">
                <label>Remarks:</label>
                <textarea
                  placeholder="Enter your remarks"
                  value={remarks}
                  rows={5}
                  onChange={(e) => setRemarks(e.target.value)}
                  className="w-full py-[14px] px-[30px]  border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] h-[70px] bg-[#dadada] rounded-md"
                />
              </div>
            </section>
            <button
              type="submit"
              className="bg-[#FFA115] col-span-2 w-full text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
