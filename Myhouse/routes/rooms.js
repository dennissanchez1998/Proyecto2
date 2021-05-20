const express = require('express');
const router = express.Router();
const Room = require('../models/Room.models')

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

router.get('/room/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const user = req.session.currentUser
  if (!user) {
    return res.redirect("/login");
}
  const { id } = req.params
  Movie.findById(id)
    .then((ToEdit => {
      console.log('edited', ToEdit)
      res.render('rooms/update-form', { room: ToEdit })
    }))
    .catch(e => next(e))
});

module.exports = router;