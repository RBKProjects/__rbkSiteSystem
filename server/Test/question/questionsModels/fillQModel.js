const mongoose = require ('mongoose');

const FillQSchema = new mongoose.Schema({
	section : {
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
	fillBox : {
		type : String,
	}
})

const FillQ = mongoose.model('FillQ', FillQSchema);
module.exports = FillQ;
