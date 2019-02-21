var jwt				 = require('jsonwebtoken'),
    config           = require('../config');
// ======================MIDDLEWARE====================== \\
var isLoggedIn = (req, res, next)=>{
	var token = req.headers.authorization
	//is grabbing the token sent from the client 
	// the token goes on the header in the auth section (not by body or params)
	if(token){
	  	try {
			const decoded = jwt.verify(JSON.parse(token), config.secret) 
			// secret created in config.js
			// then in the request I attached the token and user
			// if it works it will be decrypted
			req.token     = token
			req.user      = decoded;
            if(decoded.admin){
				console.log('you are an admin!!')
                return next();
            }
	  	} 
	  	catch(error) { 
		  	res.json ({error:error})
	  	}	 
	}


}
module.exports = isLoggedIn;