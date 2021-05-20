const {
    Schema,
    model
} = require("mongoose");

const userSchema = new Schema({
        username: {
            type: String,
            trim: true,
            required: [true, 'Nombre es requerido.'],
        },
        email: {
            type: String,
            trim: true,
            required: [true, 'Email es requerido.'],
            unique: true
        },
        surname: {
            type: String,
            trim: true,
            required: [true, 'Apellido es requerido.'],
        },

        passwordHash: {
            type: String,
            required: [true, 'Clave es requerida']
        },
        telefono: {
            type: String,
            required: [true, 'Telefono es requerida']
        },
        direccion: {
                type: String,
                required: [true, 'Direccion es requerida']
            },
    img: String,
        publicaciones: [{
            type: Schema.Types.ObjectId,
            ref: "Room"
        }]

    }, {
        timestamps: true
    }

);
module.exports = model('User', userSchema);