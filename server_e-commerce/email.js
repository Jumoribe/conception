var compression = require('compression') // Node.js compression middleware.
var express = require('express')
var app = express()
var bodyParser = require('body-parser') // enables us send data in the request body
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 
var cors = require('cors') 
// to send request from different url

// to enable cors for any requests
// app.use(cors())

//or enable it only for the specific url
app.options('/sendEmail', cors())

// allowing requests from the front-end to our server with api calls ***because of cors, we are allowing it***
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

	next();
});


// for serving static files if you need to
app.use(express.static('../'))


// Import pwd form form mailer where we can hide our mailbox password
var pwd = require('./modules/p').pwd

const nodemailer = require('nodemailer');

// selecting mail service and authorazing with our credentials
const transport = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: 'yumi.ju@gmail.com',
		pass: pwd,
	},
});


// composing our email

var emptySubj = 'Here is the message: '
// handle contact form sending
app.post("/sendEmail", (req, res) => {
	let {subject, message} = req.body;
	const mailOptions = {
	    to: 'yumi.ju@gmail.com',
	    subject: subject,
	    // composing body of the email
	    html: `<p style="background:red;">${message}</p>`
	};
	transport.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			return res.send (error)
	        // return res.redirect('/contacts')
	    }
	    console.log(`Message sent: ${info.response}`);
	    // res.redirect('/contacts')
	    return res.send ("Message sent")

	});
})



// serving 404 page
var path = require('path');

// viewed at http://localhost:8080
app.use('/', function(req, res) {

	console.log(res)

	res.sendFile(path.join(__dirname + '/../404/'));

});


var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
	console.log(`Serving my master on port ${PORT}!`)
})