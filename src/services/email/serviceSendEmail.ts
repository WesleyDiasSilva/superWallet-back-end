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
    const mailSend = await transporter.sendMail({
      subject: "Confirmação de cadastro!",
      html: `
      Olá <strong>${name}</strong><br>
      Sejá bem-vindo(a) a nossa plataforma de ecommerce, aqui você encontra os <strong>melhores jogos</strong> com os <strong>melhores preços</strong><br>
      <br>
      <a href="https://www.goole.com">Acesse já</a>
      `,
      from: "Wesley Dias <wesley_diaz8@outlook.com>",
      to: email,
    });
    console.log(mailSend);
  } catch (err) {
    console.log(err);
  }
}
