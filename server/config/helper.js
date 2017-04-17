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
		    from: '"RBK ADMISSINS" <rebootkamp.jo@gmail.com>',
		    to: to,
		    subject: 'Verifying Email ✔',
		    text: 'Hello world ?',
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
	nextSteps : (to)=> {
	   let transporter = nodemailer.createTransport({
		   service: 'gmail',
		   auth: {
			   user: 'rebootkamp.jo@gmail.com',
			   pass: 'hackUrwayout'
		   }
	   });

	   let mailOptions = {
		   from: '"RBK ADMISSINS" <rebootkamp.jo@gmail.com>',
		   to: to,
		   subject: 'Verifying Email ✔',
		   text: 'Hello world ?',
		   html: 'Dear RBK Applicant,' +
		    '<p>In order to complete your application to RBK, please complete the following steps.</p>'+
		    '<p>We recommend that you allow 4 hours to complete the full application. Please note that no preparation is needed for any of these assessments.</p>'+
			'<p> 1. Biographic Information & RBK Commitment Agreement </p>'+
			'<p> 2. Mindset Assessment</p>'+
			'<p> 3. Analytic Assessment</p>'+
			'<p> 4. Code Challenge (if you have prior coding experience)</p>'+
			'<p> Good luck and let\'s get started!</p><br><br>'+
			'<p> عزيزي المتقدم لطلب RBK,</p>'+
			'<p> رجى استكمال الخطوات التالية ونوصيك بأنك تحتاج الى 4 ساعات لتعبئة الطلب كامل , يرجى ملاحظة أنه لا حاجة لإعداد لأي من هذه التقييمات.</p>'+
			'<p> 1. سيرة ذاتية المعلومات ووشروط الالتزام RBK</p>'+
			'<p> 2. تقييم عقلي</p>'+
			'<p> 3. تقييم تحليلي</p>'+
			'<p> 4.في البرمجة كود التحدي (إذا كان لديك معرفة برمجية سابقة)</p>'+
			'<p> ظا سعيدا ودعونا نبدأ</p>!'
	   };

	   transporter.sendMail(mailOptions, (error, info) => {
		   if (error) {
			   return console.log(error);
		   }
		   console.log('Message %s sent: %s', info.messageId, info.response);
	   });
   }

	 randCode : () =>{
		return randomstring.generate({
			length : 5,
			charset : 'numeric'
		});
	}

}
