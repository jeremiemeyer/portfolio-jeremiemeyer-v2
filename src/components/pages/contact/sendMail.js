let nodemailer = require("nodemailer")

export async function sendMail(senderName, senderEmail, msg) {
  const transporter = nodemailer.createTransport({
    // service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  })

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        console.log("Server is ready to take our messages")
        resolve(success)
      }
    })
  })

  const mailOptions = {
    from: `${senderName} ${senderEmail}`,
    to: process.env.NODEMAILER_EMAIL,
    subject: "Nouveau message depuis le formulaire de contact",
    text: msg,
  }

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error(error)
        reject(error)
      } else {
        console.log(info)
        resolve(info)
      }
    })
  })

}
