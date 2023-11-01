const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const DoctorSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    phone:{
        type: Number,
        required:true,
        unique:true,
    },
    photo: {type: String,},
    ticketPrice: {type: Number,},
    role: { type: String,},

    //Fields for doctors only
    specialization: { type: String},
    qualification: { 
        type: Array,
    },
    experiences: {
        type: Array,
    },
    bio: {type: String, maxLenght: 50},
    about: {type: String},
    timeSlots: { type: Array},
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Review"}],
    averangeRating: {
        type: Number,
        default: 0,
    },
    totalRating: {
        type: Number,
        default: 0,
    },
    isApproved: {
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending",
    },
    appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment"}],
});

//Export the model
module.exports = mongoose.model('Doctor', DoctorSchema);