const randomstring = require("randomstring");
const nodemailer = require('nodemailer');

module.exports = { 
	
	 verify : (to, code)=> {
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
	},

	 randCode : () =>{
		return randomstring.generate({
			length : 5,
			charset : 'numeric'
		});
	}

}