const mongoose = require("mongoose");

const distributionSchema = mongoose.Schema({
    
    studentId: {
        type: String,
        required: [true, "Please Enter Student Id"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    shift: {
        type: String,
        required: [true, "Please Enter Shift"],
    },
    status: {
        type: String,
        required: true,
        default: "notServed",
      },
    foodItemList: {
        name: {
            type: String,
            required: [true, "Please Enter Food Name"]
        },
        price: {
            type: Number,
            required: [true, "Please Enter Food Price"],
            maxLength: [8, "Price Cannot Exceeded from 8 Figure"]
        }
    }
        
            
});

module.exports = mongoose.model("Distribution", distributionSchema);
