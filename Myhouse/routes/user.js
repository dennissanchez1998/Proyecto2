const express = require('express');
const router = express.Router();
const User = require('../models/User.models');
const multer = require('multer');
const upload = multer({
    dest: './public/uploads/'
});

router.get('/view', (req, res) => {
    const user = req.session.currentUser
    if (!user) {
        res.redirect("/auth/login");
        return
    }
    res.render('user/viewUser');
})


router.post('/edit', upload.single('photo'), (req, res) => {
    const user = req.session.currentUser
    if (!user) {
        res.redirect("/auth/login");
        return
    }

    const {
        username,
        img,
        email,
        surname,
        codTlf,
        telefono,
        direccion
    } = req.body;


    const tlf = `${codTlf}-${telefono}`;
    req.session.codTlf = codTlf;
    req.session.phone = telefono;


    User.findByIdAndUpdate(user._id, {
        username,
        email,
        surname,
        telefono: tlf,
        direccion,
        img: `/uploads/${req.file.filename}`
    }).then(user => {
        console.log(user);
        User.findById(user._id)
            .then(prueba => {
                req.session.currentUser = prueba;
                res.locals.currentUser = prueba;
                res.redirect('/user/view');


            })
    }).catch(e => {
        console.log(e);
    })


})



module.exports = router;