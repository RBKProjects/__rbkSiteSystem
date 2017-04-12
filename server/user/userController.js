const jwt = require('jwt-simple');
const userModel = require('./userModel.js');
const mongoose = require ('mongoose');
const helper = require('../config/helper.js')

module.exports = {

	signup : (req, res) => {
		let userData  = req.body.user;
		userData.emailCode = helper.randCode();
		userModel.findOne({email : userData.email}, (err, userEX)=>{
			console.log(userEX,err);
			if (userEX) {
				res.json("user already exisit")
			}else {
				userModel.create(userData, (err, data)=> {
					if (err) {
						res.status(500).send(err);
					}else{
						helper.verify(data.email, data.emailCode);
						res.json(data);
					}
				});
			}
		})
	},

	isEmailVerified : (req, res)=>{
		console.log(req.body)
		userModel.findOne({_id: req.body.id}, (err, data) => {
			if (!data) {
				res.status(500).send(err);
			}else {
				if (data.isEmailVerified) {
					res.json(true)
				}else {
					res.json(false)
				}
			}
		})
	},


	verifyUser : (req, res) => {
		userModel.findOne( {_id : req.params.id} ,  (err, user) =>  {
			if (err){
				res.status(500).send(err);
			}else{
				if (user.emailCode === req.body.emailCode){
					user.isEmailVerified = true;
					user.save(function (err, user) {
					   if (err) {
						   res.status(500).send(err)
					   }
					   res.json(user);
				    });
				}else{
					res.json(false);
				}
			}
		});
		}
	,

	signin : (req, res) => {
		userModel.findOne({email : req.body.email}, (err, user) => {
			console.log(user)
			if (!user) {
				res.status(500).send("Wrong emial");
			}else{
				if(user.password === req.body.password){
					var token = jwt.encode(user, 'secret');
					res.setHeader('x-access-token',token);
					res.json({token: token, id : user._id});
				}else{
					res.json("pass not valid");
				}
			}
		})
	},

	updateUser : (req, res) => {
		userModel.findOne({_id : req.params.id }, function(err, user){
      if(err){
        res.status(500).send(err);
      }else if(!user){
        res.status(500).send(new Error('User does not exist'));
      }else{
        user.firstName = req.body.firstName || user.firstName ;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;
        user.nationality = req.body.nationality || user.nationality;
        user.isRefugee = req.body.isRefugee || user.isRefugee;
        user.gender = req.body.gender || user.gender;
        user.save(function(err, savedUser){
          if(err){
            res.status(500).send(err);
          } else {
            res.json(savedUser);
          }
        });
      }
    })
}
}
