const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    amount : {
        type : Number,
        required : [true, 'Path `amount` is required'],
        min: [0.01, 'Offer amount must be greater than or equal to 0.01']
    },
    status : {
        type : String,
        enum: ['pending', 'rejected', 'accepted'],
        default: 'pending'
    },
    user : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required : [true, 'Path `user` is required'] // PROJECT 5: added required to user but remove if it causes errors
    },
    item : {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required : [true, 'Path `item` is required'] // PROJECT 5: added required to item but remove if it causes errors
    }
});


module.exports = mongoose.model('Offer', offerSchema);