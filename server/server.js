const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 1030;

//=============================================================================
/*								Database									 */
//=============================================================================
	//const mongoURI = process.env.MONGODB_URI  || 'mongodb://admin:admin@ds111549.mlab.com:11549/rbkadmissions';
	// const mongoURI = process.env.MONGODB_URI  || 'mongodb://localhost/rbkSiteSystem';//
	 const mongoURI = process.env.MONGODB_URI || 'mongodb://heroku_2ncz6lvj:l9oh24k8qd0ioftp5tsmhom7ae@ds159880.mlab.com:59880/heroku_2ncz6lvj';

	mongoose.connect(mongoURI);
	db = mongoose.connection;

	db.once('open',function () {
		console.log('mongoDB is open');
	});




require('./config/middleware.js') (app,express);
require('./config/routes.js') (app,express);

app.listen(port , function () {
	console.log('Server now listening on port ' + port);
	console.log('goto : http://localhost:' + port);
});

module.exports = app;
