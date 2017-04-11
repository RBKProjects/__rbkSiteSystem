const jwt = require('jwt-simple');
const userModel = require('./userModel.js');
const mongoose = require ('mongoose');
const nodemailer = require('nodemailer');


const verify = (to, code)=> {
	let transporter = nodemailer.createTransport({
	    service: 'gmail',
	    auth: {
	        user: 'rebootkamp.jo@gmail.com',
	        pass: 'hackUrwayout'
	    }
	});

	let mailOptions = {
	    from: '"RBK ADMISSINS" <rebootkamp.jo@gmail.com>', // sender address
	    to: to, 
	    subject: 'Verifying Email ✔', // Subject line
	    text: 'Hello world ?', // plain text body
	    html: '<p>Hello! <br>' +
 			'Thank you for creating your RBK Account.</p>'+ 
			'<p> Please verify your email address by copying and pasting the following code: '+ code + '</p>'+ 
			'<p>If you are having issues with your account, please don\'t hesitate to contact us by sending email to admissions@rbk.org <br>'+
			'Looking forward to meeting you! The RBK Team</p>'   
	};

	transporter.sendMail(mailOptions, (error, info) => {
	    if (error) {
	        return console.log(error);
	    }
	    console.log('Message %s sent: %s', info.messageId, info.response);
	});
}

module.exports = {
	signup : (req, res) => {
		userModel.create(req.body.user, (err, data)=> {
			if (err) {
				throw err;
			}else{
				verify(data.email)
				res.json(data)
			}
		});
	},

	signin : (req, res) => {
		userModel.findOne({email : req.body.email}, (err, user) => {
			if (err) {
				throw err;
			}else{
				if(user.password === req.body.password){
					var token = jwt.encode(user, 'secret');	
					res.setHeader('x-access-token',token);
					res.json({token: token, userId : user._id});
				}else{
					res.json("pass not valid")
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
