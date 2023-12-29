import { sendContactForm } from "@/lib/api";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import React from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loaderForEmail, setloaderForEmail] = useState(false);

  async function saveUserEmail() {
    if (typeof window === "undefined") return;
    if (!email) {
      toast.error("Please provide your email to unlock this content");
      return;
    }
    const formDataTable = `
    <table border="1" cellpadding="10">
      <tr>
        <th>Email</th>
      </tr>
      <tr>
        <td>${email}</td>
      </tr>
    </table>
  `;
    setloaderForEmail(true);
    await sendContactForm({
      subject: "sent mail from footer of website",
      html: `<p>Form data:</p>${formDataTable}`,
    });

    setloaderForEmail(false);
    toast.success("Thank you for contacting us");
    window.localStorage.setItem("unlocked", "yes");
    setEmail("");
  }

  return (
    <div
      className="min-h-[50vh] text-[#dadada] p-12"
      style={{
        background: `linear-gradient( 270deg, #242424 0%, rgba(41, 41, 41, 0.93) 100%, rgba(224, 224, 224, 0.85) 100%)`,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="w-max mx-auto sm:w-full flex sm:flex-row flex-col gap-12 pb-12 items-start justify-evenly">
        <ul>
          <li>
            <strong>Get to Know Us</strong>
          </li>
          <li>
            <a className="hover:underline" href="/founder">
              Our Team
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/ourPartners">
              Our Partners
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/contactus">
              Contact Us
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <strong>Solutions</strong>
          </li>
          <li>
            <a className="hover:underline" href="/solution/Enterprises">
              Solution for Enterprises
            </a>
          </li>{" "}
          <li>
            <a className="hover:underline" href="/solution/Startup">
              Solution for Startups
            </a>
          </li>{" "}
          <li>
            <a className="hover:underline" href="/solution/Innovators">
              Solution for Innovators
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <strong>Insights</strong>
          </li>
          <li>
            <a className="hover:underline" href="/insights#blogs">
              Blogs
            </a>
          </li>{" "}
          <li>
            <a className="hover:underline" href="/insights#case-studies">
              Case Studies
            </a>
          </li>{" "}
          <li>
            <a className="hover:underline" href="/insights#e-books">
              E-books
            </a>
          </li>{" "}
          <li>
            <a className="hover:underline" href="/insights#white-papers">
              White Papers
            </a>
          </li>
        </ul>
      </div>
      <div className="w-max mx-auto sm:w-full flex sm:flex-row flex-col gap-12 pb-12 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <img alt="logo" src="/logo.png" height={100} width={250} />
          <ul className="flex items-center justify-center gap-2">
            <li>
              <a className="underline" href="/privacyPolicy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="underline" href="/termsAndCondition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[75%] mx-auto py-[14px] px-[30px] border-2 border-solid border-[#FFa115] text-[#232323] placeholder-[#232323] h-[50px] bg-[#dadada] rounded-md"
          />
          <button
            onClick={saveUserEmail}
            className="bg-[#FFA115] col-span-2 mx-auto text-white py-2 px-4 rounded"
          >
            {loaderForEmail ? (
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
              <FontAwesomeIcon icon={faPaperPlane} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
