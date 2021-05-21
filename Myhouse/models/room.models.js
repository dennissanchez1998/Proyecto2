const {
    Schema,
    model
} = require("mongoose");
const roomSchema = new Schema({
    direccion: {
        type: String
    },
    tipo: {
            type: String,
            enum: ["Cuarto Privado", 'Casa Entera', "Cuarto Compartido"]
        },
        titulo: {
        type: String
    },
    renta: {
            type: Number
        },
        hombres: {
            type: Number
        },
        mujeres: {
            type: Number
        },
        deposito: {
            type: Number
        },
        cuartos: {
            type: Number
        },
        banos: {
            type: Number
        },
        descripcion: {
        type: String
    },
    HombresPreferencias: {
            type: Boolean,
            default: false
        },
        mascotas: {
            type: Boolean,
            default: false
        },
        pareja: {
            type: Boolean,
            default: false
        },
        smoking: {
            type: Boolean,
            default: false
        },
        tv: {
            type: Boolean,
            default: false
    },
    servicios: {
        type: Boolean,
        default: false},
        maintenance:{
            type: Boolean,
            default: false},
    wifi: {
            type: Boolean,
            default: false
        },
        aire: {
            type: Boolean,
            default: false
        },
        lavanderia: {
            type: Boolean,
            default: false
        },
        elevador: {
            type: Boolean,
            default: false
        },
        estacionamiento: {
            type: Boolean,
            default: false
    },
    image: [{
        type: String
    }],
}, {
    timestamps: true
})
module.exports = model('Room', roomSchema);
