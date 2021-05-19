const express = require('express');
const router = express.Router();
const Room = require('../models/Room.models')

router.get('/rooms', (req, res, next) => {
    Room.find()
    .then((prueba) => {

      res.render("rooms/listroom", {
        room: prueba
      })
    }).catch(e => {
      console.log(e);
    })


})

 //get room id   
 router.get("/room/:id", (req, res, next) => {
/*  const user = req.session.currentUser
if (!user) {
return res.redirect("/login");
}*/
console.log("yes")
    const { id } = req.params;
    Room.findById(id)
      .then((DBbyId) => {
        console.log("Chosen", DBbyId);
        res.render("rooms/room-details", { room: DBbyId });
      })
      .catch((error) => {
        console.log("Error while showing movie details", error);
      });
  });


module.exports = router;