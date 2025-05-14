const Item = require('../models/itemModel');

//check if user is a guest
exports.isGuest = (req, res, next) => {
    if(!req.session.user) {
        return next();
    } else {
        req.flash('error', 'You are logged in already!');
        return res.redirect('/users/profile');
    }
};

//check if the user is authenticated
exports.isLoggedIn = (req, res, next) => {
    if(req.session.user) {
        return next();
    } else {
        req.flash('error', 'You must log in first!');
        return res.redirect('/users/login');
    }
};

//check if the user is seller/author of the item
exports.isSeller = (req, res, next) => {
    let id = req.params.id;

    Item.findById(id)
    .then(item=> {
        if(item) {
            if(item.seller == req.session.user) {
                return next();
            }else {
                let err = new Error('Unauthorized to access the resource');
                err.status = 401; // unauthorized error, instead of 500 internal error
                return next(err);
            }
        } else { // ***3.4 (part 2)
            let err = new Error('Cannot find an item with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err=>next(err));
};