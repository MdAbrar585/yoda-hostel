const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const FoodItem = require("../modals/foodItemModal");
const ApiFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorhandler");


//Create FoodItems -- Admin
exports.createFoodItems = catchAsyncErrors(async (req, res, next) => {
    const foodItem = await FoodItem.create(req.body);

    res.status(201).json({
        success: true,
        foodItem
    });
});


// Get all Foods -- user
exports.getAllFoods = catchAsyncErrors(async (req, res, next) => {
    const resultPerPage = 100;

  const foodItemsCount = await FoodItem.countDocuments();
    const apiFeature = new ApiFeatures(FoodItem.find(), req.query)
        .pagination(resultPerPage);
    const foodItems = await apiFeature.query;

    res.status(200).json({
        success: true,
        foodItems,
        foodItemsCount
    });
    
});
  
// Get Food Details By Id
exports.getFoodDetails = catchAsyncErrors(async (req, res, next) => {
    const foodItem = await FoodItem.findById(req.params.id);

    if (!foodItem) {
        return next(new ErrorHandler("Food Item Not Found", 404));
    }
    res.status(200).json({
        success: true,
        foodItem
    });
});

// Update FoodItems  -- Admin
exports.updateFoods = catchAsyncErrors(async (req, res, next) => {

    let foodItem = await FoodItem.findById(req.params.id);
    
    if (!foodItem) {
        return next(new ErrorHandler("Food Item Not Found", 404));
    }
    
    foodItem = await FoodItem.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
    res.status(200).json({
        success: true,
        foodItem
    });
});

// Delete FoodItems -- Admin
exports.deleteFoods = catchAsyncErrors(async (req, res, next) => {
    const foodItem = await FoodItem.findById(req.params.id);

    if (!foodItem) {
        return next(new ErrorHandler("Food Item Not Found", 404));
    }

    await foodItem.remove();

    res.status(200).json({
        success: true,
        message: "Food Item Deleted Successfully."
    });

});