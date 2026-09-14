const express = require("express");
const router = express.Router();
const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudentById,
  getStudentByName,
  deleteStudentById,
} = require("../controllers/student.controllers");

router.post("/create-student", createStudent);
router.get("/get-students", getStudents);
router.get("/get-student/:id", getStudentById);
router.put("/update-student/:id", updateStudentById);
router.get("/get-student-by-name", getStudentByName);
router.delete("/delete-student/:id", deleteStudentById);

module.exports = router;
