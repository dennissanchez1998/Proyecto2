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
                req.session.codTlf = usuario.telefono.slice(0, 3);
                req.session.phone = usuario.telefono.slice(4);
                req.session.currentUser = usuario
                res.redirect('/rooms');
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
        telefono,
        direccion
    } = req.body;

    const tlf = `${codTlf}-${telefono}`;
    req.session.codTlf = codTlf;
    req.session.phone = telefono;

    console.log();

    bcryptjs.genSalt(saltRounds)
        .then(salt => bcryptjs.hash(password, salt))
        .then(hashed => {
            return User.create({
                username,
                email,
                surname,
                passwordHash: hashed,
                telefono: tlf,
                    direccion
            })
        }).then(user => {

            req.session.currentUser = user;
            res.redirect('/rooms');
        }).catch(e => {
            console.log(e);
        })

});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/auth/login');
});

router.get((req, res) => {
    res.redirect('/');
})

module.exports = router;