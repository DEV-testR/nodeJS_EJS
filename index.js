const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const flash = require('connect-flash');

//controller
const indexController = require('./controllers/indexController');
const loginController = require('./controllers/loginController');
const registerController = require('./controllers/registerController');
const storeUserController = require('./controllers/storeUserController');

//MongoDB Connect
const conString = 'mongodb+srv://reebok11042:FlG1TBf280DlOjCP@nodejs-tes.vz05lh8.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(conString);

app.use(express.static('public'));
app.use(express.json());
//app.use(express.urlencoded());
app.use(express.urlencoded({extended: true}));
app.use(flash());
app.use(expressSession({ cookie: { maxAge: 60000 }, 
    secret: 'node secret',
    resave: false, 
    saveUninitialized: false
}));


app.set('view engine', 'ejs');

app.get('/',indexController);
app.get('/login',loginController);
app.get('/register',registerController);
app.post('/user/register', storeUserController);

app.listen(4000, () => {
    console.log('App listening on port 4000')
})
