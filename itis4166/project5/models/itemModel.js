// require mongoose
const mongoose = require('mongoose');
// require schema
const Schema = mongoose.Schema;

// create item schema
const itemSchema = new Schema({
    title: {type: String, required: [true, 'Path `title` is required']},
    seller: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: [true, 'Path `seller` is required']}, // PROJECT 5: added required to seller, but remove if it causes errors
    condition: {
        type: String, 
        required: [true, 'Path `condition` is required'],
        enum: ['New', 'Like New', 'Excellent', 'Very Good', 'Good', 'Fair', 'Poor', 'As Is']
    },
    price: {
        type: Number, 
        required: [true, 'Path `price` is required'],
        min: [0.01, 'Price must be greater than or equal to 0.01']},
    details: {type: String, required: [true, 'Path `details` is required']},
    image: {type: String, required: [true, 'Path `image` is required']},
    active: {
        type: Boolean, 
        required: [true, 'Path `active` is required'], 
        default: true},
    totalOffers: {
        type: Number,
        default: 0
    },
    highestOffer: {
        type: Number,
        default: 0
    }
});

// export item model
module.exports = mongoose.model('Item', itemSchema);