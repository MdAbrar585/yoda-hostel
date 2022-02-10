const express = require("express");
const router = express.Router();

const { createStudent, getAllStudents, getStudentDetails, updateStudent, deleteStudent } = require("../controllers/studentController");

router.route("/student/createStudent").post(createStudent);
router.route("/students").get(getAllStudents);
router.route("/students/:id").put(updateStudent).delete(deleteStudent).get(getStudentDetails);


module.exports = router;
