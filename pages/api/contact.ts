import { mailOptions, transporter } from "./../../config/nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log(req.body, "brvfwcdws");
  if (req.method === "POST") {
    try {
      let data = req.body;
      console.log(data, "daregtr3htgeta");
      await transporter.sendMail({
        ...mailOptions,
        ...data,
      });
      res.status(200).json({ message: "moj krdi" });
    } catch (error: any) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

  res.setHeader("Allow", "POST");
  res.status(405).end("Method Not Allowed");
};

export default handler;
