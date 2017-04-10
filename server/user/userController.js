const User = require('./userModel.js');
const mongoose = require ('mongoose');

module.exports = {
	signup : (req, res) => {
		User.create(req.body.user, (err, data)=> {
			if (err) {
				throw err;
			}else{
				res.json(data)
			}
		});
	},

	signin : (req, res) => {
		User.findOne({email : req.body.email}, (err, data) => {
			if (err) {
				throw err;
			}else{
				console.log(data)
				if(data.password === req.body.password){
					res.json(data)
				}else{
					res.json("pass not valid")
				}
			}
		})
	},

	updateUser : (req, res) => {
		User.findOne({_id : req.params.id }, function(err, user){
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
