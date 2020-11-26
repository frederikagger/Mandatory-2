const router = require("express").Router();
const { mailOptions, transporter } = require("../../nodemailer/mailsetup");
const { v4: uuidv4 } = require("uuid");
const User = require("../../models/user");

const html = (id) => {
    return {
      html: `
          <p> You have requested a new password. Click on the link below to reset. </p>
          <br> 
          <a href="http://localhost:3000/resetpassword/${id}"> Click here to change password </a>
          `,
    };
  };

router.post("/forgotPassword", async (req, res, next) => {
  const id = uuidv4();
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("No user exist with that email");
    }
    user.uuid = id;
    await user.save();
    const output = html(id).html; // generate the html to send
    await transporter.sendMail(mailOptions(email, output));
    return res.status(200).send({ msg: "Email has been sent" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
