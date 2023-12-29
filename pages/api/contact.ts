import { mailOptions } from "./../../config/nodemailer";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { transporter } from "@/config/nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log(req.body);
  if (req.method === "POST") {
    const data = req.body;
    console.log(data, "data");

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...data,
      });
      res.status(200).json({ message: "moj krdi" });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
  res.status(400).json({ message: "bad request" });
};

export default handler;
