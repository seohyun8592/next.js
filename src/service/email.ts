import nodemailer from "nodemailer";

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "shhs8592@gmail.com",
    pass: "tjgusl85!!",
  },
});

export async function sendEmail({ subject, from, message }: EmailData) {
  const mailData = {
    to: "shhs8592@gmail.com",
    subject: `[BLOG] ${subject}`,
    from,
    html: `
        <h1>${subject}</h1>
        <div>${message}</div>
        <br/>
        <p>보낸사람: ${from}</p>
        `,
  };

  return transporter.sendMail(mailData);
}
