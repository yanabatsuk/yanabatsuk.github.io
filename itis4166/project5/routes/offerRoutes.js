const express = require('express');
const controller = require('../controllers/offerController')
const { isLoggedIn } = require('../middlewares/auth');
const { validateId, validateOffer, validateResult } = require('../middlewares/validator');

const router = express.Router({mergeParams: true});

// POST /items/:id/offers: make an offer on an item
router.post('/', isLoggedIn, validateId, validateOffer, validateResult, controller.makeOffer);

// GET /items/:id/offers: view all offers for an item
router.get('/', isLoggedIn, validateId, controller.viewOffers);

// POST /items/:itemId/offers/:offerId/accept: accept a specific offer 
router.post('/:offerId/accept', isLoggedIn, validateId, controller.acceptOffer);


module.exports = router;