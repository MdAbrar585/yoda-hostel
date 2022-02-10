const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Distribution = require("../modals/distributionModal");
const ApiFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorhandler");

//Create Distribution Items -- Admin
exports.createDistribution = catchAsyncErrors(async (req, res, next) => {
    const distribution = await Distribution.create(req.body);

    res.status(201).json({
        success: true,
        distribution
    });
});


// Get all Distribution list -- user
exports.getAllDistribution = catchAsyncErrors(async (req, res, next) => {
    const resultPerPage = 4;

  const distributionItemsCount = await Distribution.countDocuments();
    const apiFeature = new ApiFeatures(Distribution.find(), req.query)
        .pagination(resultPerPage);
    const distribution = await apiFeature.query;

    res.status(200).json({
        success: true,
        distribution,
        distributionItemsCount
    });
    
});

// Update Distribution  -- Admin
// exports.updateDistribution = catchAsyncErrors(async (req, res, next) => {

//     let distribution = await Distribution.findById(req.params.id);
    
//     if (!distribution) {
//         return next(new ErrorHandler("Food Item Not Found", 404));
//     }
    
//     distribution = await Distribution.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//         runValidators: true,
//         useFindAndModify: false,
//       });
//     res.status(200).json({
//         success: true,
//         foodItem
//     });
// });