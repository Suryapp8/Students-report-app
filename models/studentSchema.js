const mongoose = require("mongoose")


const studentsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    batch:{
        type: String,
        required: true
    },
    college:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },score:{
        type: String,
        required: true
    },company:{
        type: String,
        required: true
    },results:{
        type: String,
        required: true
    }
})

const Students = mongoose.model("Students" , studentsSchema);

module.exports = Students;