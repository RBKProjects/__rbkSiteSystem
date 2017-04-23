const mongoose = require ('mongoose');

const MultiChoiceASchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	QId : {
		type : String,
		required : true
	},
	userId : {
		type : String,
		required : true
	}
})

const MultiChoiceA = mongoose.model('MultiChoiceA', MultiChoiceASchema);
module.exports = MultiChoiceA;
