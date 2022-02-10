const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Student = require("../modals/studentModal");
const ApiFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorhandler");

//Create Student -- Admin
exports.createStudent = catchAsyncErrors(async (req, res, next) => {
    const student = await Student.create(req.body);

    res.status(201).json({
        success: true,
        student
    });
});

// Get all Students -- user
exports.getAllStudents = catchAsyncErrors(async (req, res, next) => {
    const resultPerPage = 4;

  const studentItemsCount = await Student.countDocuments();
    const apiFeature = new ApiFeatures(Student.find(), req.query)
        .pagination(resultPerPage);
    const students = await apiFeature.query;

    res.status(200).json({
        success: true,
        students,
        studentItemsCount
    });
    
});

// Get Student Details By Id
exports.getStudentDetails = catchAsyncErrors(async (req, res, next) => {
    const student = await Student.findById(req.params.id);

    if (!student) {
        return next(new ErrorHandler("Student Not Found", 404));
    }
    res.status(200).json({
        success: true,
        student
    });
});

// Update FoodItems  -- Admin
exports.updateStudent = catchAsyncErrors(async (req, res, next) => {

    let student = await Student.findById(req.params.id);
    
    if (!student) {
        return next(new ErrorHandler("Student Not Found", 404));
    }
    const newStudentData = {
        fullName: req.body.fullName,
        age: req.body.age,
        class: req.body.class,
        hall: req.body.hall,
        status: req.body.status
    } 
    student = await Student.findByIdAndUpdate(req.params.id, newStudentData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
    res.status(200).json({
        success: true,
        student
    });
});

// Delete Student -- Admin
exports.deleteStudent = catchAsyncErrors(async (req, res, next) => {
    const student = await Student.findById(req.params.id);

    if (!student) {
        return next(new ErrorHandler("Student Not Found", 404));
    }

    await student.remove();

    res.status(200).json({
        success: true,
        message: "Student Deleted Successfully."
    });

});