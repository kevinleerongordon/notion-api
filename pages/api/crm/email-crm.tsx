import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");


export async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;
    
  const EMAIL = process.env.gmail_username;
  const PASS = process.env.gmail_password;
  console.log(EMAIL, PASS, req.body);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: EMAIL!, // your email address
      pass: PASS!, // your email password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${name}" <${email}>`, // sender address
    to: "oni.contact.mail@gmail.com", // list of receivers
    subject: "New Project Lead", // Subject line
    text: message, // plain text body
    html: `<b>${message}</b>`, // html body
  });
  
  console.log(info)
  
  res.status(200).json({ message: "Email sent successfully" });
}


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    sendEmail(req, res);
  } else {
    res.status(405).end();
  }
}
