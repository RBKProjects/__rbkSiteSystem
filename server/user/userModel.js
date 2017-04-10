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
		required : true
	},
	nationality : {
		type : String,
		required : true
	},
	gender : {
		type : String,
		required : true
	},
	isRefugee : {
		type : Boolean,
		required : true
	},
	email : {
		type : String,
		required : true,
		unique: true,
	}
})

const User = mongoose.model('User', UserSchema);
module.exports = User;