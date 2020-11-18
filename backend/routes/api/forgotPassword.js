const router = require("express").Router();
const { mailOptions, transporter } = require("../../nodemailer/mailsetup");

router.post("/forgotPassword", async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const html =`
  <p> You have requested a new password. Click on the link below to reset. </p>
  <br> 
  <a href="http://localhost:3000/changepassword"> Click here </a>
  `;

  transporter.sendMail(mailOptions(email, html), (error, info) => {
    if (error) {
      console.log(error);
      throw new Error("Error in transport object");
    }
    console.log("message sent: %s", info.messageId);
    return res.status(200).send({ msg: "Email has been sent" });
  });
});

module.exports = router;
