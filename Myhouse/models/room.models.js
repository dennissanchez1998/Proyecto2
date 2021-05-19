const {
    Schema,
    model
} = require("mongoose");

const roomSchema = new Schema({
    ciudad: {
        type: String
    },
    direccion: {
        type: String
    },
    pisopuerta: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    testimageUrl: {
        type: String
    },
    housetype: {type: String, enum :[ "Cuarto Privado",'Casa Entera',"Cuarto Compartido"]},
    rent: {type: Number},
    deposit: {type: Number},
    manroomate:{type: Number},
    girlroomate:{type:Number},
    housesize:{type:Number},
    roomsize:{type: Number},
    rooms:{type:Number},
    bathrooms: {type:Number},
    minstay: {type: Number, enum :[ 1,2,3,4,5,6]},
    maxstay: {type: Number, enum :[ 1,2,3,4,5,6,7,8,9,10,11,12]},
    singlerooms:{type:Number},
    doublerooms: {type:Number},
    Bedsize: {type: String, enum :[ "Sin Cama",'Sofa cama','Cama Individual', "Cama Doble","Cama Queen", "Cama Rey"]},
    TV: {type: Number, enum :[ 0,1]},
    Wifi: {type: Number, enum :[ 0,1]},
    AC: {type: Number, enum :[ 0,1]},
    elevator: {type: Number, enum :[ 0,1]},
    laundry: {type: Number, enum :[ 0,1]},
    privatebathroom: {type: Number, enum :[ 0,1]},
    petsallowed: {type: Number, enum :[ 0,1]},
    smokingallowed: {type: Number, enum :[ 0,1]},
    couplesallowed: {type: Number, enum :[ 0,1]},
    parkingavailable: {type: Number, enum :[ 0,1]},
    contract: {type: Number, enum :[ 0,1]},
    cleaning: {type: Number, enum :[ 0,1]},
    maintenance: {type: Number, enum :[ 0,1]},
    servicios:  {type: Number, enum :[ 0,1]},
    videocall: {type: Number, enum :[ 0,1]},
    homevisit: {type: Number, enum :[ 0,1]},
    startvisitdate: {type: Date},
    visitmonday: {type: Number, enum :[ 0,1]},
    visituesday: {type: Number, enum :[ 0,1]},
    visitwednesday: {type: Number, enum :[ 0,1]},
    visithursday: {type: Number, enum :[ 0,1]},
    visitfriday: {type: Number, enum :[ 0,1]},
    visitsaturday: {type: Number, enum :[ 0,1]},
    visitsunday: {type: Number, enum :[ 0,1]},
    visitmorning: {type: Number, enum :[ 0,1]},
    visitafternoon:{type: Number, enum :[ 0,1]},
    visitnight:{type: Number, enum :[ 0,1]},
    manpreference:{type: Number, enum :[ 0,1]},
    girlpreference: {type: Number, enum :[ 0,1]},
    
    minage: {type: Number},
    maxage: {type: Number},
    gueststudy: {type: Number, enum :[ 0,1]},
    guestwork: {type: Number, enum :[ 0,1]},
    rented: {type: Number, enum :[ 0,1]},
    author: {type: String},
    ownerid: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [], // we will update this field a bit later when we create review model

},
{ timestamps: true }
)

module.exports = model('Room', roomSchema);