const jwt = require('jwt-simple');
const fillQModel = require('./questionsModel/fillQModel.js');
const trueFalseQModel = require('./questionsModel/trueFalseQModel.js');
const multiChoiceQModel = require('./questionsModel/multiChoiceQModel.js');

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
	},
    //=============================================================================
    /*                                  Question                                 */
    //=============================================================================
        addTueFalseQ : (req, res)=>{
            let question = req.body.question;
            trueFalseQModel.create(question, (err, data)=> {
                if (err) {
                    res.status(500).send(err);
                }else{
                    res.json(data);
                }
            });
        },
        removeTueFalseQ : (req, res)=>{

        },
        editTueFalseQ : (req, res)=>{},

        addMultiChoiceQ : (req, res)=>{
            let question = req.body.question;
            multiChoiceQModel.create(question, (err, data)=> {
                if (err) {
                    res.status(500).send(err);
                }else{
                    res.json(data);
                }
            });
        },
        removeMultiChoiceQ : (req, res)=>{},
        editMultiChoiceQ : (req, res)=>{},

        addFillQ : (req, res)=>{
            let question = req.body.question;
            fillQModel.create(question, (err, data)=> {
                if (err) {
                    res.status(500).send(err);
                }else{
                    res.json(data);
                }
            });
        },
        removeFillQ : (req, res)=>{},
        editFillQ : (req, res)=>{},

    //=============================================================================
    /*                                  Answers                                  */
    //=============================================================================
        addTueFalseA : (req, res)=>{},
        editTueFalseA : (req, res)=>{},

        addMultiChoiceA : (req, res)=>{},
        editMultiChoiceA : (req, res)=>{},

        addFillA : (req, res)=>{},
        editFillA : (req, res)=>{},
}
