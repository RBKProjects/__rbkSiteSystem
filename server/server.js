const express = require('express');
const app = express();
const port = process.env.PORT || 1030;

require('./config/middleware.js') (app,express);
require('./config/routes.js') (app,express);

app.listen(port , function () {
	console.log('Server now listening on port ' + port);
	console.log('goto : http://localhost:' + port);
});

module.exports = app;
