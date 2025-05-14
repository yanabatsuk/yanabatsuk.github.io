// import model of items
const model = require('../models/itemModel');

// import multer middleware
const upload = require('../middlewares/fileUpload'); 

// function to capitalize selected options in form
function capitalize(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// get all active items
exports.allItems = (req, res, next) => {
    let searchQuery = req.query.search || "";

    let query = model.find({ active: true }); // only fetch active items

    if (searchQuery) {
        query = query.or([
            { title: { $regex: searchQuery, $options: 'i' } },
            { details: { $regex: searchQuery, $options: 'i' } }
        ]);
    }

    query.sort({ price: 1})
    .then(items => {
        const capitalizedItems = items.map(item => ({
            ...item.toObject(),
            condition: capitalize(item.condition)
        }));
        res.render('items', { items: capitalizedItems, searchQuery });
    })
    .catch(err => next(err));
};

// get form to add a new item
exports.new = (req, res) => {
    res.render('new', { searchQuery: req.query.search || "" });
};

// add a new item
exports.create = (req, res, next) => {
    let item = new model(req.body);

    item.seller = req.session.user;

    if (req.file) {
        item.image = `/images/${req.file.filename}`;
    }

    item.save()
    .then(item=> {
        req.flash('success', 'Your item was created successfully!');
        res.redirect('/items');
    })
    .catch(err=>{
        if (err.name === 'ValidationError') {
            err.status = 400;
            next(err);
        } else {
            next(err);
        }
    });
};

// show details of a specific item
exports.show = (req, res, next) => {
    let id = req.params.id;

    model.findById(id).populate('seller', 'firstName lastName')
    .then(item => {
        if (item) {
            item.condition = capitalize(item.condition);
            res.render('item', { item, searchQuery: req.query.search || "" });
        } else {
            let err = new Error('There is no item with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => next(err));
};

//edit details of a specific item
exports.edit = (req, res, next) => {
    let id = req.params.id;

    model.findById(id)

    .then(item => {
        if(item) {
            item.condition = capitalize(item.condition);
            res.render('edit', { item , searchQuery: req.query.search || "" });
        } else {
            let err = new Error('There is no item with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => next(err));

};

//update the details of a specific item
exports.update = (req, res, next) => {
    let id = req.params.id;
    let updatedItem = req.body;

    if (req.file) {
        updatedItem.image = `/images/${req.file.filename}`;
    }

    model.findByIdAndUpdate(id, updatedItem, { new: true, runValidators: true })
    .then(item => {
        if (item) {
            req.flash('success', 'Your item was updated successfully!');
            res.redirect('/items/' + id);
        } else {
            let err = new Error('There is no item with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => {
        if (err.name === 'ValidationError'){
            err.status = 400;
        }
        next(err);
    });
};


// delete a specific item
exports.delete = (req, res, next) => {
    let id = req.params.id;

    model.findByIdAndDelete(id, { useFindAndModify: false })
    .then(item => {
        if (item) {
            req.flash('success', 'Your item was deleted successfully!');
            res.redirect('/items');
        } else {
            let err = new Error('There is no item with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => next(err));
};