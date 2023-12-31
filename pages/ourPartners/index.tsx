import ReactCardFlip from "react-card-flip";
import { useState, Fragment, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { UseSizeContext } from "../../state/context";
import css from "../contactus/contact.module.css";
import {
  partnerContent,
  partnerTopContent,
} from "../../content/partnerContent";
import TitleText from "../../components/common/titleText";
import { getSEOById, SEO } from "../../firebase/function";
import Head from "next/head";

// MUI Imports
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { sendContactForm } from "@/lib/api";
import toast from "react-hot-toast";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type RepresentType =
  | "A Creative Agency"
  | "A Technology Company"
  | "Myself as a Freelancer"
  | "Other";

const Partner = () => {
  const [isFlipped, setisFlipped] = useState(-1);

  const theme = useTheme();

  const responsive = {
    mobile: {
      breakpoint: { max: 1024, min: 350 },
      items: 1,
    },
  };

  const { width } = UseSizeContext();
  const options = [
    { value: "Visual Communication", label: "Visual Communication" },
    { value: "Web Development", label: "Web Development" },
    { value: "App Development", label: "App Development" },
    { value: "Game Development", label: "Game Development" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "Performance Marketing", label: "Performance Marketing" },
    { value: "SEO", label: "SEO" },
    { value: "SMM", label: "SMM" },
    { value: "Influencer Marketing", label: "Influencer Marketing" },
    { value: "B2B Marketing", label: "B2B Marketing" },
    { value: "PR", label: "PR" },
    { value: "ORM", label: "ORM" },
    { value: "Market Portal Management", label: "Market Portal Management" },
    { value: "Animation & Video Editing", label: "Animation & Video Editing" },
    { value: "AI", label: "AI" },
    { value: "AR, VR & MR", label: "AR, VR & MR" },
  ];

  const [represent, setrepresent] =
    useState<RepresentType>("A Creative Agency");
  const [otherValue, setotherValue] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [webLink, setwebLink] = useState("");
  const [phn, setphn] = useState("");
  const [mail, setmail] = useState("");
  const [expertise, setexpertise] = useState<string[]>([]);
  const [why, setwhy] = useState("");
  const [loader, setloader] = useState(false);

  const handleChange = (event: SelectChangeEvent<typeof expertise>) => {
    const {
      target: { value },
    } = event;
    setexpertise(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [seoContent, setseoContent] = useState<SEO | null>(null);

  useEffect(() => {
    (async () => {
      const seo = await getSEOById({ id: "our-partners" });
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
    try {
      e.preventDefault();

      if (
        !mail ||
        !companyName ||
        !phn ||
        (represent === "Other" && otherValue.length === 0) ||
        !why ||
        expertise.length === 0 ||
        !webLink
      ) {
        toast.error("These fields are required");
        return;
      }

      // Add validation checks
      if (!isValidEmail(mail)) {
        toast.error("Please enter valid email.");
        return;
      }
      if (!isValidPhoneNumber(phn)) {
        toast.error("Please enter valid phone number.");
        return;
      }
      if (!isValidName(companyName)) {
        toast.error("Please enter valid company name");
        return;
      }
      setloader(true);
      // Create a tabular format for the form data
      const formDataTable = `
    <table border="1" cellpadding="10">
      <tr>
        <th>Company Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Represent</th>
        <th>Expertise In</th>
        <th>Web Link</th>
        <th>Why</th>
      </tr>
      <tr>
        <td>${companyName}</td>
        <td>${mail}</td>
        <td>${phn}</td>
        <td>${represent === "Other" ? otherValue : represent}</td>
        <td>${expertise.join(",")}</td>
        <td>${webLink}</td>
        <td>${why}</td>
      </tr>
    </table>
  `;

      await sendContactForm({
        subject: "New Partner Request",
        html: `<p>Form data:</p>${formDataTable}`,
      });

      toast.success("Thank you for contacting us");
      // Clear all fields after successful submission
      setcompanyName("");
      setmail("");
      setphn("");
      setotherValue("");
      setexpertise([]);
      setwhy("");
      setwebLink("");
      setrepresent("A Creative Agency");
    } catch (error) {
      toast.error("Error occured, try again later");
      // Clear all fields after successful submission
      setcompanyName("");
      setmail("");
      setphn("");
      setotherValue("");
      setexpertise([]);
      setwhy("");
      setwebLink("");
      setrepresent("A Creative Agency");
    } finally {
      setloader(false);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>{seoContent?.title}</title>
        <meta name="description" content={seoContent?.description} />
        <meta name="keywords" content={seoContent?.metaTag}></meta>
      </Head>
      <div
        id="homePage"
        className="w-full flex min-h-screen flex-col justify-center"
      >
        <div className="max-w-[1300px] mx-auto py-16">
          <TitleText isAbsolute={false} text="Our Partners" />
          <div className="w-[90%] mx-auto">
            {partnerTopContent.map((text, index) => (
              <h3
                key={index}
                style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                className="text-white rajdhani  max-w-[820px] mt-3 font-semibold text-md leading-[150.5%]"
              >
                {text}
              </h3>
            ))}
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4">
            {width < 820 ? (
              <Carousel
                swipeable={false}
                draggable={false}
                containerClass="h-[500px] w-[100%] max-w-[300px] items-center"
                showDots={true}
                dotListClass="myCarouselDots"
                responsive={responsive}
              >
                {[...partnerContent].map((itm, ind) => (
                  <div className="flex flex-col items-center justify-center gap-4">
                    <ReactCardFlip
                      key={ind}
                      isFlipped={isFlipped === ind}
                      flipDirection="horizontal"
                    >
                      <div
                        onClick={() => setisFlipped(ind)}
                        className={`bg-[#232323] border-2 border-solid border-[#FFA927] cursor-pointer flex flex-col items-center justify-evenly rounded-[25px] h-[400px] w-[250px]`}
                        style={{
                          boxShadow:
                            "0px 6px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        <img
                          alt="startup"
                          src={itm.img}
                          width={150}
                          height={150}
                        />
                      </div>
                      <div
                        onClick={() => setisFlipped(-1)}
                        className={`bg-[#232323] border-2 border-solid border-[#FFA927] cursor-pointer flex flex-col items-center justify-evenly rounded-[25px] h-[400px] w-[250px]`}
                        style={{
                          boxShadow:
                            "0px 6px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        <h3 className="rajdhani font-medium text-[#dadada] text-center px-[0.95rem] leading-[137.5%]">
                          {itm.para}
                        </h3>
                      </div>
                    </ReactCardFlip>
                    <h3
                      style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                      className="text-white rajdhani  max-w-[820px] mt-3 font-semibold text-md leading-[150.5%]"
                    >
                      {itm.outsideContent}
                    </h3>
                  </div>
                ))}
              </Carousel>
            ) : (
              [...partnerContent].map((itm, ind) => (
                <div className="flex flex-col items-center justify-center gap-4">
                  <ReactCardFlip
                    key={ind}
                    isFlipped={isFlipped === ind}
                    flipDirection="horizontal"
                  >
                    <div
                      onClick={() => setisFlipped(ind)}
                      className={`bg-[#232323] border-2 border-solid border-[#FFA927] cursor-pointer flex flex-col items-center justify-evenly rounded-[25px] h-[400px] w-[250px]`}
                      style={{
                        boxShadow:
                          "0px 6px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <img
                        alt="startup"
                        src={itm.img}
                        width={150}
                        height={150}
                      />
                    </div>
                    <div
                      onClick={() => setisFlipped(-1)}
                      className={`bg-[#232323] border-2 border-solid border-[#FFA927] cursor-pointer flex flex-col items-center justify-evenly rounded-[25px] h-[400px] w-[250px]`}
                      style={{
                        boxShadow:
                          "0px 6px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <h3 className="rajdhani font-medium text-[#dadada] text-center px-[0.95rem] leading-[137.5%]">
                        {itm.para}
                      </h3>
                    </div>
                  </ReactCardFlip>
                  <h3
                    style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                    className="text-white rajdhani  max-w-[820px] mt-3 font-semibold text-md leading-[150.5%]"
                  >
                    {itm.outsideContent}
                  </h3>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="max-w-[1300px] mx-auto py-16">
          <TitleText isAbsolute={false} text="Partner with Us" />
          <div className="w-[90%] mx-auto">
            <h3
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              className="text-white rajdhani  max-w-[820px] mt-3 font-semibold text-md leading-[150.5%]"
            >
              Whether you’re a digital agency, a technology company, a freelance
              visual communicator or developer, or even an influencer,
              partnering with us will be a win-win. You’ll be assured of
              exciting projects where you or your team can contribute
              independently, the opportunity to brainstorm with PPV experts to
              take creativity to the next level, and an environment of respect
              and trust that makes the partnership something to look forward to.
            </h3>
            <h3
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              className="text-white rajdhani  max-w-[820px] mt-3 font-semibold text-md leading-[150.5%]"
            >
              If professionalism is your primary mantra, and you seek
              opportunities where you can display your creativity and perform
              consistently, you’ll be sure to click with PPV. Reach out to us
              with a few details about yourself using the form below and we’ll
              definitely get in touch with you.
            </h3>
            <form
              onSubmit={handleSubmit}
              className={`text-[#dadada] rounded-[30px] p-12 pt-0 ${css.formContact}`}
            >
              <section>
                <div>
                  <label className="text-[#dadada]">I Represent:</label>
                  <select
                    value={represent}
                    onChange={(e) =>
                      setrepresent(e.target.value as RepresentType)
                    }
                    className="w-full py-[14px] bx-[30px]transparent p-2 border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] h-[70px] bg-[#dadada] rounded-md"
                  >
                    <option
                      className="bg-black text-[#FFA115]"
                      value="A Creative Agency"
                    >
                      A Creative Agency
                    </option>
                    <option
                      className="bg-black text-[#FFA115]"
                      value="A Technology Company"
                    >
                      A Technology Company
                    </option>
                    <option
                      className="bg-black text-[#FFA115]"
                      value="Myself as a Freelancer"
                    >
                      Myself as a Freelancer
                    </option>
                    <option className="bg-black text-[#FFA115]" value="Other">
                      Other
                    </option>
                  </select>
                </div>
                {represent === "Other" && (
                  <div>
                    <label>Other:</label>
                    <input
                      type="text"
                      placeholder="write here..."
                      value={otherValue}
                      onChange={(e) => setotherValue(e.target.value)}
                      className="w-full py-[14px] px-[30px]  border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] h-[70px] bg-[#dadada] rounded-md"
                    />
                  </div>
                )}
              </section>
              <section>
                <div>
                  <label>Company Name (if applicable):</label>
                  <input
                    type="text"
                    placeholder="Enter your Company Name"
                    value={companyName}
                    onChange={(e) => setcompanyName(e.target.value)}
                    className="w-full py-[14px] px-[30px]  border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] h-[70px] bg-[#dadada] rounded-md"
                  />
                </div>
                <div>
                  <label>WEBSITE/PORTFOLIO LINK</label>
                  <input
                    type="text"
                    placeholder="paste link here"
                    value={webLink}
                    onChange={(e) => setwebLink(e.target.value)}
                    className="w-full py-[14px] px-[30px]  border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] h-[70px] bg-[#dadada] rounded-md"
                  />
                </div>
              </section>
              <section>
                <div>
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    value={phn}
                    onChange={(e) => setphn(e.target.value)}
                    className="w-full py-[14px] px-[30px]  border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] h-[70px] bg-[#dadada] rounded-md"
                  />
                </div>
                <div>
                  <label>E-mail</label>
                  <input
                    type="text"
                    placeholder="Enter your mail"
                    value={mail}
                    onChange={(e) => setmail(e.target.value)}
                    className="w-full py-[14px] px-[30px]  border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] h-[70px] bg-[#dadada] rounded-md"
                  />
                </div>
              </section>
              <section>
                <FormControl>
                  <InputLabel id="demo-multiple-chip-label">
                    Your Expertise
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={expertise}
                    className="w-full py-[14px] px-[30px] border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] min-h-[70px] bg-[#dadada] rounded-md"
                    onChange={handleChange}
                    input={
                      <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    renderValue={(selected) => (
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                        }}
                      >
                        {selected.map((value) => (
                          <Chip
                            sx={{ width: "max-content", maxWidth: "200px" }}
                            key={value}
                            label={value}
                          />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {options.map((name, index) => (
                      <MenuItem key={index} value={name.value}>
                        {name.value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </section>
              <section>
                <div>
                  <label>WHY DO YOU WANT TO PARTNER US?</label>
                  <OutlinedInput
                    type="text"
                    placeholder="Describe your Interest"
                    value={why}
                    multiline
                    rows={4}
                    onChange={(e) => setwhy(e.target.value)}
                    className="w-full border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] min-h-[70px] bg-[#dadada] rounded-md"
                  />
                </div>
              </section>
              <button
                type="submit"
                className="bg-[#FFA115] col-span-2 w-full text-white py-2 px-4 rounded"
              >
                {loader ? (
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Partner;
