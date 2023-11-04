const user = require('../models/User');

module.exports = (req, res) => {
    user.create(req.body).then(() => {
        console.log('User registered successfully!');
        res.redirect('/');
    }).catch((error) => {
        //console.error(error);
        if(error) {
            const validationError = Object.keys(error.errors)
            .map(key => error.errors[key].message);
            req.flash('validationError',validationError);
            req.flash('data', req.body);
            return res.redirect('/register');
        }
    });
}
