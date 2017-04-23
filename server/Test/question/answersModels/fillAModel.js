const mongoose = require ('mongoose');

const FillASchema = new mongoose.Schema({
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

const FillA = mongoose.model('FillA', FillASchema);
module.exports = FillA;
