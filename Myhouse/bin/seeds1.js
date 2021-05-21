// To insert in "bin/seeds.js"

const mongoose = require('mongoose');
const Room = require('../models/room.models');

const DB_NAME = 'my-house';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const rooms= [
  {titulo: "Cuarto en Santa Fe", 
    direccion: "Av. Paseo de la Reforma 2693, Lomas de Bezares, Miguel Hidalgo, 11910 Ciudad de México, CDMX, México",
    descripcion: "Hermoso cuarto en la zona noroeste de la ciudad",
    tipo: "Cuarto Privado",
    renta: 3000,
    deposito: 3,
    hombres:1,
    mujeres:0,
    cuartos:3,
    banos:4,
    HombresPreferencias: true,
    tv: true,
    wifi: true,
    aire: true,
    elevador: true,
    lavanderia: true,
    mascotas: true,
    smoking: true,
    parejas: true,
    maintenance: true,
    servicios: true,
    estacionamiento: true,
// we will update this field a bit later when we create review model
    }, 
    {titulo: "Cuarto en Santa Fe", 
    direccion: "Av. Paseo de la Reforma 2693, Lomas de Bezares, Miguel Hidalgo, 11910 Ciudad de México, CDMX, México",
    descripcion: "Hermoso cuarto en la zona noroeste de la ciudad",
    tipo: "Cuarto Privado",
    renta: 3000,
    deposito: 3,
    banos:4,
    hombres:1,
    mujeres:0,
    cuartos:3,
    HombresPreferencias: true,
    tv: true,
    wifi: true,
    aire: true,
    elevador: true,
    lavanderia: true,
    mascotas: true,
    smoking: true,
    parejas: true,
    maintenance: true,
    servicios: true,
    estacionamiento: true,
// we will update this field a bit later when we create review model
    }, 
    {titulo: "Cuarto en Santa Fe", 
    direccion: "Av. Paseo de la Reforma 2693, Lomas de Bezares, Miguel Hidalgo, 11910 Ciudad de México, CDMX, México",
    descripcion: "Hermoso cuarto en la zona noroeste de la ciudad",
    tipo: "Cuarto Privado",
    renta: 3000,
    banos:4,
    deposito: 3,
    hombres:1,
    mujeres:0,
    cuartos:3,
    HombresPreferencias: true,
    tv: true,
    wifi: true,
    aire: true,
    elevador: true,
    lavanderia: true,
    mascotas: true,
    smoking: true,
    parejas: true,
    maintenance: true,
    servicios: true,
    estacionamiento: true,
// we will update this field a bit later when we create review model
    }, 
    {titulo: "Cuarto en Santa Fe", 
    direccion: "Av. Paseo de la Reforma 2693, Lomas de Bezares, Miguel Hidalgo, 11910 Ciudad de México, CDMX, México",
    descripcion: "Hermoso cuarto en la zona noroeste de la ciudad",
    tipo: "Cuarto Privado",
    renta: 3000,
    deposito: 3,
    banos:4,
    hombres:1,
    mujeres:0,
    cuartos:3,
    HombresPreferencias: true,
    tv: true,
    wifi: true,
    aire: true,
    elevador: true,
    lavanderia: true,
    mascotas: true,
    smoking: true,
    pareja: true,
    parejas: true,
    maintenance: true,
    servicios: true,
    estacionamiento: true,
    // we will update this field a bit later when we create review model
    }, 
  ];
  
  // Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)
  
  // ... your code here

  Room.create(rooms)
  .then(FromDB => {
    console.log(`Created ${FromDB.length} things`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating things from the DB: ${err}`));

  