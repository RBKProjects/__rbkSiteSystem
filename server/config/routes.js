const User = require('../user/userController.js');
const Test = require('../test/testController.js')
const Employee = require('../employee/employeeController.js');

module.exports = function(app, express) {

//=============================================================================
/*										UserRoute			   				 */
//=============================================================================
	app.post('/api/user/signup', User.signup);
	app.post('/api/user/signin', User.signin);
	app.put('/api/user/update/:id', User.updateUser);
	app.post('/api/user/verify/isEmailVerified', User.isEmailVerified)
	app.post('/api/user/verify/:id', User.verifyUser);
	app.get('/api/user/nextSteps/:id', User.nextSteps);
	app.get('/api/user/getAll', User.getAll);

//=============================================================================
/*										employeeRoute			   				 */
//=============================================================================
	app.post('/api/emp/addEmp', Employee.addEmp)

//=============================================================================
/*										testRoute			   				 */
//=============================================================================
	app.post('/api/test/addTest', Test.addTest)
};
