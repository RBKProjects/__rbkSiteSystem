const mongoose = require ('mongoose');

const FillQSchema = new mongoose.Schema({
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
	fillBox : {
		type : String,
		required : true
	}
})

const FillQ = mongoose.model('FillQ', FillQSchema);
module.exports = FillQ;
