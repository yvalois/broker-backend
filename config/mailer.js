const nodemailer= require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'hyperiuncap@gmail.com', // generated ethereal user
      pass: 'nunuxssmizrffsdj', // generated ethereal password
    },
  });

  transporter.verify().then(()=>{
      console.log('ready for send emails');
  })

  
module.exports = transporter