const express = require('express'); // import express
const controller = require('../controllers/itemController'); // import controllers
const offerRoutes = require('./offerRoutes');
const { isLoggedIn, isSeller } = require('../middlewares/auth'); 
const { validateId, validateItem, validateResult } = require('../middlewares/validator');
const { upload} = require('../middlewares/fileUpload');


// create a route object using express
const router = express.Router();

// routes go here below...

//GET /items: get all active items
router.get('/', controller.allItems);

//GET /items/new: get form to add a new item
router.get('/new', isLoggedIn, controller.new);

//POST /items: add a new item (with file upload)
router.post('/', isLoggedIn, upload, validateItem, validateResult, controller.create);

//GET /items/:id: get item identified by id
router.get('/:id', validateId, controller.show);

//GET /items/:id/edit: edit item identified by id
router.get('/:id/edit', validateId, isLoggedIn, isSeller, controller.edit);

//PUT /items/:id: update item identified by id
router.put('/:id', validateId, isLoggedIn, isSeller, upload, validateItem, validateResult, controller.update);

//DELETE /items/:id: delete item identified by id
router.delete('/:id', validateId, isLoggedIn, isSeller, controller.delete);


// mount offer routes on /items/:id/offers
router.use('/:id/offers', offerRoutes);

module.exports = router;