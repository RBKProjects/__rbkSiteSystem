const mongoose = require ('mongoose');

const TestSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	createBy : {
		type : mongoose.Schema.Types.ObjectId,
		ref : 'Employee'
	},
	timestamp: {
		type: Date,
		default: Date.now
	}
})

const Test = mongoose.model('Test', TestSchema);
module.exports = Test;
