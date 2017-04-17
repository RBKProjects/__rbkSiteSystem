const mongoose = require ('mongoose');

const QuestionSchema = new mongoose.Schema({
    sectionName : {
		type : String,
		required : true
	},
    sectionNum : {
		type : Number,
		required : true
	},
    title : {
		type : String,
		required : true
	},
    timestamp: {
		type: Date,
        default: Date.now
	},
    description : {
		type : String,
		required : true
	},
    trueFalseQ : [[{
		type : mongoose.Schema.Types.ObjectId,
		ref : 'TrueFalseQ'
	}],],
	multiChoicesQ : [[{
		type : mongoose.Schema.Types.ObjectId,
		ref : 'MultiChoicesQ'
	}],],
    fillQuestion : [[{
		type : mongoose.Schema.Types.ObjectId,
		ref : 'FillQuestion'
	}],]
})

const Question = mongoose.model('Question', UserSchema);
module.exports = User;
