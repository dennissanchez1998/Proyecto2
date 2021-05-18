const {
    Schema,
    model
} = require("mongoose");

const userSchema = new Schema({
        username: {
            type: String,
            trim: true,
            required: [true, 'Nombre es requerido.'],
            unique: true
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
            unique: true
        },

        passwordHash: {
            type: String,
            required: [true, 'Clave es requerida']
        },
        telefono: {
            type: String,
            required: [true, 'Telefono es requerida']
        }

    }, {
        timestamps: true
    }

);
module.exports = model('User', userSchema);