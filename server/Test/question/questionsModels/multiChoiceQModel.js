const mongoose = require ('mongoose');

const multiChoiceSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	arabic : {
		type : String,
		required : true
	},
	english : {
		type : String,
		required : true
	},
	firstValue : {
		type : Boolean,
		required : true
	},
	secValue : {
		type : Boolean,
		required : true
	},
	thirdValue : {
		type : Boolean,
		required : true
	},
	answerValue : {
		type : Boolean,
		required : true
	}
})

const multiChoice = mongoose.model('multiChoice', multiChoiceSchema);
module.exports = multiChoice;
