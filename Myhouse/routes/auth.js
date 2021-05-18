const express = require('express');
const router = express.Router();
const User = require('../models/User.models');
const bcryptjs = require('bcryptjs');
const saltRounds = 10 // SALTI


/* GET home page */
/* 
Login GET
*/
router.get('/login', (req, res, next) => {
    res.render('auth/login');
});

/* 
Login POST
 */
router.post('/login', (req, res, next) => {
    console.log(req.body);

    const {
        email,
        password
    } = req.body;

    User.findOne({
            email
        })
        .then(usuario => {
            if (!usuario) {
                res.render('auth/login');
                return;
            } else if (bcryptjs.compareSync(password, usuario.passwordHash)) {
                req.session.currentUser = usuario
                res.redirect('/')
                return;
            } else {
                res.render('auth/login');
                return;
            }
        }).catch(e => {
            console.log(e);
        })
});

/* 
Register GET
*/
router.get('/register', (req, res, next) => {
    res.render('auth/register');
});

/* 
Register POST

*/
router.post('/register', (req, res, next) => {
    console.log("el body", req.body);
    const {
        username,
        password,
        email,
        surname,
        confirmPassword,
        codTlf,
        telefono
    } = req.body;

    const tlf = `${codTlf}-${telefono}`;

    bcryptjs.genSalt(saltRounds)
        .then(salt => bcryptjs.hash(password, salt))
        .then(hashed => {
            return User.create({
                username,
                email,
                surname,
                passwordHash: hashed,
                telefono: tlf
            })
        }).then(user => {

            req.session.currentUser = user;
            res.redirect('/');
        }).catch(e => {
            console.log(e);
        })

});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/auth/login');
});

module.exports = router;