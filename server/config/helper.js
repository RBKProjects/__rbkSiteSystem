const randomstring = require("randomstring");
const nodemailer = require('nodemailer');

module.exports = {

	verify : (to, code)=> {
		let transporter = nodemailer.createTransport({
		    service: 'gmail',
		    auth: {
		        user: 'rebootkamp.jo@gmail.com',
		        pass: 'hackerSpace1.'
		    }
		});

		let mailOptions = {
		    from: '"RBK ADMISSIONS" <rebootkamp.jo@gmail.com>',
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
			   pass: 'hackerSpace1.'
		   }
	   });

	   let mailOptions = {
		   from: '"RBK ADMISSIONS" <rebootkamp.jo@gmail.com>',
		   to: to,
		   subject: 'Next Steps ',
		   text: 'Hello world ?',
		   html: 'Dear RBK Applicant,' +
		    '<p>In order to complete your application to RBK, please complete the following steps.</p>'+
		    '<p>We recommend that you allow 4 hours to complete the full application. Please note that no preparation is needed for any of these assessments.</p>'+
			'<p>1. <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqpQRPQn2KZMooNPLfuHXYD0BTrYzOx54N-zhPr5r5nV_W8w/viewform?utm_source=Not-Sent+Next+Steps+Emails&utm_campaign=dada8c64b1-EMAIL_CAMPAIGN_2017_02_19&utm_medium=email&utm_term=0_e7e888d45f-dada8c64b1-" >  Biographic Information & RBK Commitment Agreement </a></p>'+
			'<p>2. <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzXCvYxYHSQBvZCy7mBwj7sW7Z-yBvAvfLLcq4z0dJAeN-zw/viewform?c=0&w=1">  Mindset Assessment</a></p>'+
			'<p>3. <a href="https://docs.google.com/forms/d/e/1FAIpQLSddSZWNTJ33Y4TtWaqlbEcHIOuLYl7DG4fLVC0faub1TE2A6A/viewform?utm_source=Not-Sent+Next+Steps+Emails&utm_campaign=dada8c64b1-EMAIL_CAMPAIGN_2017_02_19&utm_medium=email&utm_term=0_e7e888d45f-dada8c64b1-" >  Analytic Assessment</a></p>'+
			'<p>4. <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4Pq8MgTRJEwuQ3Ess5onuH2dj8mV3WWMwiMKj4dQqeIOVyg/viewform?utm_source=Not-Sent+Next+Steps+Emails&utm_campaign=dada8c64b1-EMAIL_CAMPAIGN_2017_02_19&utm_medium=email&utm_term=0_e7e888d45f-dada8c64b1-" >  Code Challenge (if you have prior coding experience)</a></p>'+
			'<p> Good luck and let\'s get started!</p><br><br>'+
			'<div dir="rtl">' +
			'<p> عزيزي المتقدم لطلب RBK,</p>'+
			'<p> يرجى استكمال الخطوات التالية ونوصيك بأنك تحتاج الى 4 ساعات لتعبئة الطلب كامل , يرجى ملاحظة أنه لا حاجة لإعداد لأي من هذه التقييمات.</p>'+
			'<p>1.<a href="https://docs.google.com/forms/d/e/1FAIpQLSdqpQRPQn2KZMooNPLfuHXYD0BTrYzOx54N-zhPr5r5nV_W8w/viewform?utm_source=Not-Sent+Next+Steps+Emails&utm_campaign=dada8c64b1-EMAIL_CAMPAIGN_2017_02_19&utm_medium=email&utm_term=0_e7e888d45f-dada8c64b1-" >  سيرة ذاتية المعلومات ووشروط الالتزام RBK</a></p>'+
			'<p>2. <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzXCvYxYHSQBvZCy7mBwj7sW7Z-yBvAvfLLcq4z0dJAeN-zw/viewform?c=0&w=1" >  تقييم عقلي </a></p>'+
			'<p>3. <a href="https://docs.google.com/forms/d/e/1FAIpQLSddSZWNTJ33Y4TtWaqlbEcHIOuLYl7DG4fLVC0faub1TE2A6A/viewform?utm_source=Not-Sent+Next+Steps+Emails&utm_campaign=dada8c64b1-EMAIL_CAMPAIGN_2017_02_19&utm_medium=email&utm_term=0_e7e888d45f-dada8c64b1-" >  تقييم تحليلي</a></p>'+
			'<p>4. <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4Pq8MgTRJEwuQ3Ess5onuH2dj8mV3WWMwiMKj4dQqeIOVyg/viewform?utm_source=Not-Sent+Next+Steps+Emails&utm_campaign=dada8c64b1-EMAIL_CAMPAIGN_2017_02_19&utm_medium=email&utm_term=0_e7e888d45f-dada8c64b1-" >  في البرمجة كود التحدي (إذا كان لديك معرفة برمجية سابقة)</a></p>'+
			'<p> حظا سعيدا ودعونا نبدأ</p>!' +
			'</div>'
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
