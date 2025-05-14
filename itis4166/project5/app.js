// require modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const path = require('path');

// require routes
const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');

const model = require('./models/itemModel');

// create express app
const app = express();

// configure app
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// connect to MongoDB Atlas
const mongoUri = 'mongodb+srv://admin:admin123@cluster0.k20juwp.mongodb.net/project5-mock-test?retryWrites=true&w=majority&appName=Cluster0'

// connect to mongodb
mongoose.connect(mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: false,
})
.then(()=>{
    // start the server (moved from the bottom of the file)
    app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
    });
}) 
.catch(err=>console.log(err.message));


// mount middleware

//new added middleware
app.use(
    session({
        secret: "a9wn1n29a1n2ak3tw48hf49wgw4ekj78sd",
        resave: false,
        saveUninitialized: false, 
        store: new MongoStore({mongoUrl: 'mongodb://localhost:27017/project5-mock-test'}),
        cookie: {maxAge: 60*60*1000}
    })
);

app.use(flash());

app.use((req, res, next) => {
    res.locals.user = req.session.user || null; // now "res.locals.user" is accessible in all the views templates

    res.locals.errorMessages = req.flash('error');
    res.locals.successMessages = req.flash('success');

    next();

});



// original mounted middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use('/images', express.static(path.join(__dirname, 'public/images')));


app.get('/', (req, res, next) => { 
    const searchQuery = req.query.search || ""; 

    // REMOVE :Fetch all items from the model
    model.find({
        active: true,
        $or: [
            { title:  { $regex: searchQuery, $options: 'i' } },
            { detail: { $regex: searchQuery, $options: 'i' } }
        ]
    })
    .then(items => {
        res.render('index', { searchQuery, items });
    })
    .catch(err => next(err));
});

// mount itemRoutes on /items
app.use('/items', itemRoutes);

//added mount userRoutes on /users
app.use('/users', userRoutes);


// error handler middleware of 404 errors
app.use((req, res, next) => {
    let err = new Error('The server cannot locate resource at ' + req.url);
    err.status = 404;
    next(err);
});
    

// error handler middleware of 500 errors
app.use((err, req, res, next) => {
    console.log(err.stack);

    if (err.code === 11000) {
        req.flash('error', 'Email has been used');
        return res.status(409).redirect('/users/new');
    }

    if(!err.status) {
        err.status = 500;
        err.message = ('Internal Server Error');
    }

    res.status(err.status).render('error', { 
        error: err,
        searchQuery: req.query.search || ""
    });
});