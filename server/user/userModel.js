const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
	firstName : {
		type : String,
		required : true
	}, 
	lastName : {
		type : String,
		required : true
	}, 
	password : {
		type : String,
		required : true
	},
	phone : {
		type : String,
	},
	nationality : {
		type : String,
	},
	gender : {
		type : String,
	},
	isRefugee : {
		type : Boolean,
	},
	email : {
		type : String,
		required : true,
		unique: true,
	},
	email_code : {
		type: String 
	}
})

const User = mongoose.model('User', UserSchema);
module.exports = User;