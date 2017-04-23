const jwt = require('jwt-simple');
const employeeModel = require('./employeeModel.js');
const mongoose = require ('mongoose');
const helper = require('../config/helper.js')


module.exports = {
	addEmp:(req, res)=>{
		let employeeData  = req.body.employee;
		console.log(employeeData)
		employeeModel.findOne({email : employeeData.email}, (err, employeeEX)=>{
			if (employeeEX) {
				res.json({isemployeeExist : true })
			}else {
				employeeModel.create(employeeData, (err, data)=> {
					if (err) {
						res.status(500).send(err);
					}else{
						res.json(data);
					}
				});
			}
		})
	}
}
