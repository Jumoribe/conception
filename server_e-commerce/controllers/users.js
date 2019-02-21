
const Users   = require('../models/users'),
      config = require('../config.js'),
      jwt    = require('jsonwebtoken');
var pwd = require('../p').pwd;
const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
// at the moment the service provider is Gmail but can be any
service: 'Gmail',
     auth: {
     user: 'yumi.ju@gmail.com',
     pass: pwd,
    },
});

class UsersController {
    find(req,res){
        Users.find({},(err, users)=> !err ? res.status(200).send(users) : {err});
    }
    register(req, res, next) {
        const {name, surname, email, phone, password, passwordConfimation, address, optionalInformation, postcode, town, province, country, admin} = req.body //the most important, the only thing that we need to do
        if(!name || !surname || !email || !phone || !password || !passwordConfimation || !address || !postcode || !town || !province || !country) return res.status(422).send({error: 'e-mail and password are mandatory!' });
        Users.findOne({email:email},(err, existingUser)=>{
            if(err) return next(err)
            if(existingUser) {
                return res.status(422).send({error: 'e-mail already exists !!' })
            }// if no error or no repeated name:
            const user = new Users({
                name:name,
                password:password,
                passwordConfimation: passwordConfimation,
                surname: surname, 
                email: email,
                phone: phone,  
                address: address, 
                optionalInformation: optionalInformation, 
                postcode:postcode, 
                town: town, 
                province: province, 
                country: country, 
                //admin: true
            })
                console.log(user)
            user.save(function(err){ //now is saving the user and password, but incriptig the password, and nobody wil see the real password
                if(err) return next(err) //generate a itoken and login in one step
                var token = jwt.sign(user.toJSON(), config.secret,{
                    expiresIn:100080
                })
                res.status(200).send({
                    success:true,
                    token: token //if you don'y want login in the same step, coment out this line and 24, 25 and 26
                })
            })
        })
    }
    login(req ,res , next){
        const { email, password } =  req.body
        if(!email || !password) {
            return res.status(422).send({error:'e-mail and password are mandatory!' })
        }
        Users.findOne({email},(err, user) => { // will look the user by user name    
            if(err) return next(err) // if you have some error in the DB
            if(!user) { // if the search didn't find teh user
                return res.status(422).send({error: 'no one by that e-mail here' })
            }
            user.comparePassword(password,(err, match)=>{
                if(match && !err){
                var token = jwt.sign(user.toJSON(), config.secret,{ expiresIn:100080 }) // we need generate the token, is not optional
                    return res.send({ success:true, token: token, email:email })
                }else{
                    return res.json({success:false, err})
                }
            })
        })
    }
    // handle contact form sending
email(req, res){
	let { subject, message } = req.body
	const mailOptions = {
	    to: 'yumi.ju@gmail.com', 
	    subject: subject, 
	    html: `<p>${message}</p>`
	};
	transport.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			return res.send (error)
	        // return res.redirect('/contacts')
	    }
	    console.log(`Message sent: ${info.response}`);
	    res.redirect('/contacts')
	    return res.send ("Message sent")

    });
    
}

}
module.exports = new UsersController();