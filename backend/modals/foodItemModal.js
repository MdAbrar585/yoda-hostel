const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [8, "Price Cannot Exceeded from 8 Figure"]
    },
});

module.exports = mongoose.model("FoodItem", foodSchema);