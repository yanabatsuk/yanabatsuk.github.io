const {body} = require('express-validator');
const {validationResult} = require('express-validator');


exports.validateId = (req, res, next) => {
    //an objectId is a 24-bit Hex string
    let id = req.params.id;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid item id');
        err.status = 400;
        return next(err);
    } else {
        return next();
    }
};

exports.validateSignUp  = [
    body('firstName', 'First name is required').notEmpty().trim().escape(),
    body('lastName', 'Last name is required').notEmpty().trim().escape(),
    body('email', 'Email must be valid and is required').isEmail().trim().escape().normalizeEmail(),
    body('password', 'Password must contain at least 8 characters and at most 64 characters').isLength({min: 8, max: 64})
];

exports.validateLogin  = [
    body('email', 'Email must be valid and is required').isEmail().trim().escape().normalizeEmail(),
    body('password', 'Password must contain at least 8 characters and at most 64 characters').isLength({min: 8, max: 64})
];

const conditionOptions = ['New', 'Like New', 'Excellent', 'Very Good', 'Good', 'Fair', 'Poor', 'As Is'];

exports.validateItem = [
    body('condition', 'Condition is required').notEmpty().isIn(conditionOptions).withMessage(`Condition must be one of: ${conditionOptions.join(', ')}`),
    body('title', 'Title is required').notEmpty().trim().escape(),
    body('price', 'Price must be a number greater than or equal to 0.01').isNumeric().toFloat().custom(value => value > 0),
    body('details', 'Details are required').notEmpty().trim().escape(),
    body('image', 'Image is required')
];

exports.validateOffer = [
    body('amount', 'Offer amount must be a number greater than or equal to 0.01').isNumeric().toFloat().custom(value => value > 0)
];

exports.validateOffer = [
    body('amount')
        .isNumeric()
        .withMessage('Offer amount must be a number')
        .toFloat()
        .custom(value => value > 0)
        .withMessage('Not a valid amount')
];

exports.validateResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        errors.array().forEach(error => { 
            req.flash('error', error.msg)
        });
        return res.redirect('back');
    }
    next();  
}
