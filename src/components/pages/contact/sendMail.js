let nodemailer = require("nodemailer");

export async function sendMail(senderName, senderEmail, msg) {
  const transporter = nodemailer.createTransport({
    // service: "gmail",
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: `${senderName} ${senderEmail}`,
    to: process.env.NODEMAILER_EMAIL,
    subject: 'Nouveau message depuis le formulaire de contact',
    text: msg,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      return true;
    }
  });
}