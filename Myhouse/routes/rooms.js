const express = require('express');
const router = express.Router();
const Room = require('../models/Room.models');
const User = require('../models/User.models');

const multer = require('multer');
const upload = multer({
  dest: './public/uploads/'
});

/* router.get((req, res) => {
  res.redirect('/');
})
 */

router.get('/rooms', (req, res, next) => {
  const user = req.session.currentUser
  if (!user) {
    res.redirect("/auth/login");
    return
  }
  Room.find()
    .then((prueba) => {
console.log(prueba);
      res.render("rooms/listroom", {
        room: prueba
      })
    }).catch(e => {
      console.log(e);
    })


})

//get movie id   
router.get("/room/:id", (req, res, next) => {
  const user = req.session.currentUser
  if (!user) {
    res.redirect("/auth/login");
    return
  }
  const {
    id
  } = req.params;
  Room.findById(id)
    .then((DBbyId) => {
      console.log("Chosen", DBbyId);
      res.render("rooms/room-details", DBbyId);
    })
    .catch((error) => {
      console.log("Error while showing movie details", error);
    });
});


/* 
router.get('/room/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const user = req.session.currentUser
  if (!user) {
    return res.redirect("/login");
  }
  const {
    id
  } = req.params
  Movie.findById(id)
    .then((ToEdit => {
      console.log('edited', ToEdit)
      res.render('rooms/update-form', {
        room: ToEdit
      })
    }))
    .catch(e => next(e))
});
 */

//get crear Publicaciones

router.get('/publicaciones', (req, res) => {
  const user = req.session.currentUser
  if (!user) {
    res.redirect("/auth/login");
    return
  }
  res.render('rooms/myRooms')
})

//post crear Publicaciones

router.post('/publicaciones', upload.array('photo', 10), (req, res) => {
  const user = req.session.currentUser
  if (!user) {
    res.redirect("/auth/login");
    return
  }

  let path = []

  req.files.map(producto => {
    path.push(`/uploads/${producto.filename}`);

  });

  const {
    direccion,
    tipo,
    hombres,
    mujeres,
    titulo,
    renta,
    deposito,
    cuartos,
    banos,
    descripcion,
    HombresPreferencias,
    mascotas,
    pareja,
    smoking,
    tv,
    wifi,
    aire,
    lavanderia,
    elevador,
    estacionamiento
  } = req.body

  Room.create({
    direccion,
    tipo,
    hombres,
    mujeres,
    renta,
    deposito,
    titulo,
    cuartos,
    banos,
    descripcion,
    HombresPreferencias,
    mascotas,
    pareja,
    smoking,
    tv,
    wifi,
    aire,
    lavanderia,
    elevador,
    estacionamiento,
    imageP: path[0],
    user: user._id,
    image: [...path]
  }).then(prueba => {
    User.findByIdAndUpdate(user._id, {
      $push: {
        publicaciones: prueba._id
      }

    }).then(creado => {
      req.session.currentUser = creado;
      res.locals.currentUser = creado;
      res.redirect('/rooms');
    })
  }).catch(e => {
    console.log(e);
  })
})

//get mis publicaciones

router.get('/misPublicaciones', (req, res) => {
  const user = req.session.currentUser
  if (!user) {
    res.redirect("/auth/login");
    return
  }
  User.findById(user._id)
    .populate('publicaciones')
    .then(prueba => {


      res.render('rooms/myPublic', prueba)

    })

})

router.get('/publicacion/:id/delete', (req, res) => {
      const user = req.session.currentUser
      if (!user) {
        res.redirect("/auth/login")
        return
      }

      const {
        id
      } = req.params
      Room.findByIdAndDelete(id).then(prueba => {
        res.redirect("/misPublicaciones")
      })

})

module.exports = router;