import nodeMailer from "nodemailer";

const transporter = nodeMailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function serviceSendEmail(name: string, email: string) {
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
  } catch (err) {
    console.log(err);
  }
}
