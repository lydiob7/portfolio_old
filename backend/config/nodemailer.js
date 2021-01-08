const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.HOTMAIL_USER,
        pass: process.env.HOTMAIL_PASS
    }
})

exports.contactEmail = (email, subject, message) => {
    return transporter.sendMail({
        from: 'tomasscattini@hotmail.com',
        to: 'tomasscattini@gmail.com',
        subject: `${subject} from ${email}`,
        html: `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${subject}</title>
            </head>
            <body>
                <div>
                    <h2>${subject}</h2>
                    <p>${message}</p>
                    <a href="mailto:${email}">Reply</a>
                </div>
            </body>
            </html>
        `
    })
}