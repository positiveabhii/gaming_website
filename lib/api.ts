import axios from "axios";

export const sendContactForm = async (data: any) => {
  try {
    await axios.post("/api/contact", {
      ...data,
    });
    // fetch("/api/contact", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // });
  } catch (error) {
    console.log(error, "thbgvfdcsx");
  }
};
