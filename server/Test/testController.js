const jwt = require('jwt-simple');
const testModel = require('./testModel.js');
const mongoose = require ('mongoose');
const helper = require('../config/helper.js')


module.exports = {
	addTest:(req, res)=>{
		let test  = req.body.test;
		testModel.findOne({name : test.name}, (err, testEX)=>{
			if (testEX) {
				res.json({istestExist : true })
			}else {
				testModel.create(test, (err, data)=> {
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
