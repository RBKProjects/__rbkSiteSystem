const User = require('../user/userController.js')

module.exports = function(app, express) {

//=============================================================================
/*										UserRoute			   				 */
//=============================================================================
	app.post('/api/user/signup', User.signup);
	app.post('/api/user/signin', User.signin);
	app.put('/api/user/update/:id', User.updateUser);
	app.post('/api/user/verify/isEmailVerified', User.isEmailVerified)
	app.post('/api/user/verify/:id', User.verifyUser);

};
