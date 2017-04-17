const questionModel = require('./questionModel.js');
const mongoose = require ('mongoose');
const helper = require('../config/helper.js')

module.exports = {
    getAll : (req, res)=>{
        userModel.find({},(err, res)=>{
            if (err) {
                res.status(500).send(err);
            }else{
                res.status(200).send(allUsers);
            }
        })
    },

    createTest :(req, res)=>{
        
    }
}
