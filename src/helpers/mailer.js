const nodemailer = require('nodemailer');

// Create a transporter using your Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'naovuilen8@gmail.com',
    pass: 'kundoekhltgicsfi',
  },
});

// Create the email options

const GmailTransporter=async({
    email,
    pathname
})=>{
    const mailOptions = {
        from: 'naovuilen8@gmail.com',
        to: 's2hathanhtuan2s@gmail.com',
        subject: 'GẤU BÔNG ONLINE : QUÊN MẬT KHẨU ',
        text: 'Hãy truy cập vào đường link bên dưới để lấy lại mật khẩu của bạn .',
      };
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log('Error occurred while sending email:', error);
        } else {
          console.log('Email sent successfully:', info.response);
        }
      });
}

// Send the email