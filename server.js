const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const bodyParser = require('body-parser')
const app = express()


// const db = require('./config/keys').MongoURI;
// // Connect to MongoDB
// mongoose.connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err));

// const Product = require('./models/Product');



// Middleware
app.use(bodyParser.json());

// Static
app.use(express.static('public'));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));




// Routes

app.use('/', require('./routes/index'));
app.use('/admin', require('./routes/admin'));
app.use('/canna-girls', require('./routes/canna-girls'));
// app.use('/user', require('./routes/user'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on ${PORT}`))