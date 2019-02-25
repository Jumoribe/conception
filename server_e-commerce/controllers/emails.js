const nodemailer = require('nodemailer');
const admin = require ('../admin.js');



class EmailsController {
    
    contactEmail(req, res) {
        let { subject, message, email } = req.body
        console.log(admin)
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: admin.email,
                pass: admin.password,
            },
        });
        const mailOptions = {
            from: email,
            to: 'yumi.ju@gmail.com', 
            subject: subject, 
            html: `<p>${message}</p>`
        };
        transport.sendMail(mailOptions, (error, info) => {
            let response;
            if (error) {
                response = false;
            } else {
                response = true;
            }
            res.send({response})
    });
    }
    confirmationEmail(req, res) {
         let { details } = req.body
        //console.log(req.body)
         const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: admin.email,
                pass: admin.password
            },
        });
        const mailOptions = {
            from: 'yumi.ju@gmail.com',
            to: details.email,
            subject: 'Thanks for shopping with us',
            html: `<h2>${details.name}: This is your shopping bag</h2>
                <p>${details.shoppingCart.map(ele=>ele.title
                )}</p>
                <p>total amount: ${details.total} EUR</p>
            `
        };
        transport.sendMail(mailOptions, (error, info) => {
            let response;
            if (error) {
                response = false;
            } else {
                response = true;
            }
            res.send({response})
    });
    } 
}

module.exports = new EmailsController;
