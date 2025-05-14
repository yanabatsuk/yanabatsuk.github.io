const model = require('../models/userModel');
const Item = require('../models/itemModel');
const Offer = require('../models/offerModel');

exports.new = (req, res)=> {
    res.render('./user/new', { searchQuery: "" });
};

exports.create = (req, res, next) => {
    let user = new model(req.body);
    user.save()
    .then(user=> {
        req.flash('success', 'Registered successfully!');
        res.redirect('/users/login');
    })
    .catch(err=>{
        console.log(err);
        if(err.name === 'ValidationError' ) {
            req.flash('error', err.message);  
            return res.redirect('/users/new');
        }

        if(err.code === 11000) {
            req.flash('error', 'Email has been used');  
            return res.redirect('/users/new');
        }

        next(err);
    }); 
};

exports.getUserLogin = (req, res, next) => {
    res.render('./user/login', { searchQuery: "" });
};

exports.login = (req, res, next)=>{
    let email = req.body.email;
    let password = req.body.password;
    model.findOne({ email: email })
    .then(user => {
        if (!user) {
            console.log('wrong email address');
            req.flash('error', 'Incorrect email!');  
            res.redirect('/users/login');
            } else {
            user.comparePassword(password)
            .then(result=>{
                if(result) {
                    req.session.user = user._id;
                    req.flash('success', 'Successfully logged in!');
                    res.redirect('/users/profile');
            } else {
                req.flash('error', 'Incorrect password!');      
                res.redirect('/users/login');
            }
            });     
        }     
    })
    .catch(err => next(err));
};

exports.profile = (req, res, next)=>{
    let id = req.session.user;

    Promise.all(
        [model.findById(id), 
        Item.find({seller: id}),
        Offer.find({user: id}).populate('item')
    ])
        .then(results=>{
            const [user, items, allOffersMade] = results;

            const offersMade = allOffersMade.filter(offer => offer.item != null);

            res.render('./user/profile', {user, items, offersMade, searchQuery: "" });
        })
        .catch(err=>next(err));
};

exports.logout = (req, res, next)=>{
    req.session.destroy(err=>{
        if(err) 
           return next(err);
       else
            res.redirect('/');  
    });
};