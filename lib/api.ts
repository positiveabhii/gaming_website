export const sendContactForm = async (data: any) =>
  fetch("https://platformplayventure.vercel.app/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
