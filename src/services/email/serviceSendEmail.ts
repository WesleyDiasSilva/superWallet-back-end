import nodeMailer from "nodemailer";
import { responseDefault } from "../../interfaces/responseDefault";

const transporter = nodeMailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function serviceSendEmail(
  name: string,
  email: string
): Promise<responseDefault> {
  try {
    await transporter.sendMail({
      subject: "Registration Confirmation!",
      html: `
      Hello <strong>${name}</strong><br>
      Welcome to your super wallet<br>
      Here you can record your income, expenses, write down dreams and analyze how your finances are doing. 
      `,
      from: "Wesley Dias <wesley_diaz8@outlook.com>",
      to: email,
    });
    return { status: true };
  } catch (err) {
    return { status: false };
  }
}
