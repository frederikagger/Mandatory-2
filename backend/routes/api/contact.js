const router = require("express").Router();
const auth = require("../../middleware/auth");
const { mailOptions, transporter } = require("../../nodemailer/mailsetup");

router.post("/send", auth, (req, res) => {
  console.log(req.body);
  const output = `
<p>You have a new contact request</p>
<h3>Contact Details</h3>
<ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.number}</li>
</ul>
<h3>Message</h3>
<p>${req.body.message}</p>
`;

  // send mail with defined transport object
  transporter.sendMail(mailOptions("nodemailer@taxastork.dk", output), (error, info) => {
    if (error) {
      throw new Error("Error in transport object")
    }
    console.log("message sent: %s", info.messageId);
    return res.status(200).send({ msg: "Email has been sent" });
  });
});

module.exports = router;
