const express = require('express');
const router = express.Router();
const Room = require('../models/Room.models');

const multer = require('multer');
const upload = multer({
  dest: './public/uploads/'
});


router.get('/rooms', (req, res, next) => {
  const user = req.session.currentUser
  if (!user) {
    res.redirect("/auth/login");
    return
  }
  Room.find()
    .then((prueba) => {

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
      res.render("rooms/room-details", {
        room: DBbyId
      });
    })
    .catch((error) => {
      console.log("Error while showing movie details", error);
    });
});
router.get((req, res) => {
  res.redirect('/');
})


//get misPublicaciones

router.get('/publicaciones', (req, res) => {


  console.log("mis publicaciones");
  res.render('rooms/myRooms')
})

//post misPublicaciones

router.post('/publicaciones', upload.array('photo', 5), (req, res) => {

  console.log(req.files);
  console.log(req.body);
})

module.exports = router;