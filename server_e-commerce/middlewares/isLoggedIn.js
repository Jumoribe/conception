var jwt				 = require('jsonwebtoken'),
	config           = require('../config');
// ======================MIDDLEWARE====================== \\ in betwwen ypur router and your controller
var isLoggedIn = (req, res, next)=>{  //is grabbing the token and cheking if it is authentic
	//next allow you to go to the next function
	var token = req.headers.authorization //the token is very special and go in the authorization section instead params or body
	if(token){
	  	try {
			const decoded = jwt.verify(JSON.parse(token), config.secret) //passing toke and secret by arguments
			req.token     = token
            req.user      = decoded; //decrypted user
            if(decoded){//if works
				console.log('we are in business!')
                return next(); //so we can go to the controller and g to the function that send the welcome in index.js
            }
	  	} 
	  	catch(error) { 
		  	res.json ({error:error})
	  	}	 
	}


}
module.exports = isLoggedIn;