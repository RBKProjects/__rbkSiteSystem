const mongoose = require ('mongoose');

const TrueFalseQSchema = new mongoose.Schema({
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
	trueValue : {
		type : Boolean,
		required : true
	},
	falseValue : {
		type : Boolean,
		required : true
	}
})

const TrueFalseQ = mongoose.model('TrueFalseQ', TrueFalseQSchema);
module.exports = TrueFalseQ;
