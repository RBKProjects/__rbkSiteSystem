const jwt = require('jwt-simple');
const questionModel = require('./questionModel.js');
const mongoose = require ('mongoose');


module.exports = {
	addQuestions :(req, res)=>{
		let question  = req.body.question;
		questionModel.findOne({testId : question.testId}, (err, questionEX)=>{
			if (questionEX) {
				res.json({isquestionExist : true })
			}else {
				questionModel.create(question, (err, data)=> {
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
