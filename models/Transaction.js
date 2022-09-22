const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text : {
        type : String,
        trim : true,
        required : [true , 'please provide text']
    },
    amount : {
        type : Number,
        required : [true , 'amount is required']
    }
}) 

module.exports = mongoose.model('Transaction', TransactionSchema)