const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please Enter Student Full Name"],
        trim: true
    },
    roll: {
        type: Number,
        unique: true,
        required: [true, "Please Enter Student Roll"]
    },
    age: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [3, "Age Cannot Exceeded from 3 Figure"]
    },
    class: {
        type: String,
        required: [true, "Please Enter Student Class"],
    },
    hall: {
        type: String,
        required: [true, "Please Enter Hall Name"],
    },
    status: {
        type: String,
        required: true,
        default: "inActive",
      },
});

module.exports = mongoose.model("Student", studentSchema);