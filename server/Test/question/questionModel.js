const mongoose = require ('mongoose');

const QuestionSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	test : {
		type : mongoose.Schema.Types.ObjectId,
		ref : 'Test'
	},
	trueFalseQ : [{
		type : mongoose.Schema.Types.ObjectId,
		ref : 'TrueFalseQ'
	}],
	fillQ : [{
		type : mongoose.Schema.Types.ObjectId,
		ref : 'FillQ'
	}],
	multiChoice : [{
		type : mongoose.Schema.Types.ObjectId,
		ref : 'MultiChoice'
	}]
})

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
