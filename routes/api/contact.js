const router = require("express").Router();
const auth = require("../../middleware/auth");
const { mailOptions, transporter } = require("../../nodemailer/mailsetup"); 

router.post("/send", auth, async (req, res, next) => {
  const output = html(req).html; // function call that generates the html to send
  // send mail with defined transport object
  try {
    await transporter.sendMail(mailOptions("nodemailer@taxastork.dk", output));
    return res.status(200).send({ msg: "Email has been sent" });
  } catch (error) {
    next(error);
  }
});

const html = (req) => {
  return {
    html: `<p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
     <li>Phone: ${req.body.number}</li>  
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>`,
  };
};

module.exports = router;
