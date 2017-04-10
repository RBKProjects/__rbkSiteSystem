const User = require('../user/userController.js')

module.exports = function(app, express) {

	app.post('/api/user/signup', User.signup);
	app.post('/api/user/signin', User.signin);
	app.put('/api/user/update/:id', User.updateUser);

	
};
