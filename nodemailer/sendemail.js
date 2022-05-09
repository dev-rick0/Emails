var nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'youraccount.gserviceaccount.com',
        accessToken: 'https://oauth2.googleapis.com/token'
    }
});
var mailOptions = {
    from: 'user@email.com',
    to: 'user@email.com',
    subject: 'Email test',
    text: `Hello there`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
