const Offer = require('../models/offerModel');
const Item = require('../models/itemModel');

exports.makeOffer = (req, res, next) => {
    const itemId = req.params.id;
    const { amount } = req.body;
    const userId = req.session.user;

    Item.findById(itemId)
    .then(item => {
        if(!item) {
            let err = new Error('Cannot find an item with id ' + itemId);
            err.status = 404;
            return next(err);
        }
        if (!item.active) {
            req.flash('error', 'This item is no longer available for offers.');
            return res.redirect(`/items/${itemId}`);
        }

        if(item.seller.equals(userId)) {
            let err = new Error('Unauthorized to access the resource.');
            err.status = 401;
            return next(err);
        }

        const newOffer = new Offer({
            amount: parseFloat(amount),
            item: itemId,
            user: userId
        });

        return newOffer.save()
        .then(offer => {
            return Item.findByIdAndUpdate(itemId, {
                $inc: { totalOffers: 1 },
                $max: { highestOffer: parseFloat(amount) }
            }, { new: true });
        })
        .then(() => {
            req.flash('success', 'Your offer was made successfully!');
            res.redirect(`/items/${itemId}`);
        });
    })
    .catch(err => next(err));
};

exports.viewOffers = (req, res, next) => {
    const itemId = req.params.id;
    const userId = req.session.user;

    Item.findById(itemId)
        .populate('seller')
        .then(item => {
            if (!item) {
                let err = new Error('Cannot find an item with id ' + itemId);
                err.status = 404;
                return next(err);
            }

            if (!item.seller._id.equals(userId)) {
                let err = new Error('Unauthorized to access the resource.');
                err.status = 401;
                return next(err);
            }

            Offer.find({ item: itemId })
            .populate('user', 'firstName lastName')
            .sort({ amount: -1 })
            .then(offers => {
                res.render('./offers/offers', { item, offers, searchQuery: req.query.search || "" });
            })
            .catch(err => next(err));
        })
        .catch(err => next(err));
};  

exports.acceptOffer = (req, res, next) => {
    const itemId = req.params.id;
    const offerId = req.params.offerId;
    const userId = req.session.user;

    Item.findById(itemId).populate('seller')
    .then(item => {
        if (!item) {
            let err = new Error('Cannot find an item with id ' + itemId);
            err.status = 404;
            return next(err);
        }

        if (!item.seller._id.equals(userId)) {
            let err = new Error('Unauthorized to access the resource.');
            err.status = 401;
            return next(err);
        }
    

    return Offer.findById(offerId)
        .then(offer => {
            if (!offer) {
                let err = new Error('Cannot find an offer with id ' + offerId);
                err.status = 404;
                return next(err);
            }

            if (!offer.item.equals(itemId)) {
                let err = new Error('Offer does not belong to the specified item.');
                err.status = 400;
                return next(err);    
            }

            if (offer.status !== 'pending') {
                req.flash('error', 'This offer is no longer pending.');
                return res.redirect(`/items/${itemId}`);
            }

            return Promise.all([
                Item.findByIdAndUpdate(itemId, { active: false }, { new: true }),
                Offer.findByIdAndUpdate(offerId, { status: 'accepted' }, { new: true }),
                Offer.updateMany(
                    { item: itemId , _id: { $ne: offerId } , status: 'pending' },
                    { $set: { status: 'rejected' } }
                )
        ]);
    })
    .then(() => {
        req.flash('success', 'Offer accepted and item marked as sold!');
        res.redirect(`/items/${itemId}/offers`);
    });
    })
    .catch(err => next(err));
};  