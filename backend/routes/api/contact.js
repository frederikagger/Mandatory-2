const nodemailer = require("nodemailer")
const router = require('express').Router()

router.post('/send', (req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Name: ${req.body.company}</li>
        <li>Name: ${req.body.email}</li>
        <li>Name: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "send.one.com",
        port: 587 ,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'test@taxastork.dk', // generated ethereal user
            pass: 'dumtpassword' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"John Travolta" <test@taxastork.dk>', // sender address
        to: 'kenn521a@stud.kea.dk', // list of receivers
        subject: 'Mail from mandatory test', // subject line
        html: output // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('message sent: %s', info.messageId)
        console.log('preview URL: %s', nodemailer.getTestMessageUrl(info))

        res.status(200).send({ "msg": 'Email has been sent' })
    })
})

module.exports = router;