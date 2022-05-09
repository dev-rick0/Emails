/*This script does not offer any Security features as JS Code is visible from CLient Side*/
/*Instead Use the Nodemailer with Token Capability or OAuth2 feature*/

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'user@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'user@gmail.com',
  to: 'user@gmail.com',
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
