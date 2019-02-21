const express = require('express')
const app = express();
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const port = process.env.port || 3001;
const createError = require('http-errors');

var emptySubj = 'Here is the message: '

const cors = require('cors') // to send request from different url
// to enable cors for any requests
 app.use(cors())

//or enable it only for the specific url
app.options('*', cors())

// allowing requests from the front-end to our server with api calls
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

	next();
});


//initial settings
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//conect to mongo
mongoose.connect('mongodb://127.0.0.1/ecommercedb', () =>{
    console.log('******* connected to mongodb ********')
});
//routes
const categoriesRoute = require('./routes/categories');
const productsRoute = require('./routes/products');
const usersRoute = require('./routes/users');
const indexRouter = require('./routes/index')
 // use routes
app.use('/categories', categoriesRoute);
app.use('/products', productsRoute);
app.use('/users', usersRoute);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});
  
  // error handler
  app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
  
	// render the error page
	res.status(err.status || 500);
	res.send({error:'error'});
  });


app.listen(port, () => console.log(`port running from *****${port}*****`))