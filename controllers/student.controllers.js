const Student = require("../models/students.models");

const createStudent = async (req, res) => {
  const { name, age, email, phone, address, course, institution } = req.body;
  try {
    const student = new Student({
      name,
      age,
      email,
      phone,
      address,
      course,
      institution,
    });
    await student.save();
    return res
      .status(201)
      .json({ message: "Student created successfully", student });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    return res
      .status(200)
      .json({ message: "Students Fetched Successfully", students });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    return res
      .status(200)
      .json({ message: "Student Fetch Successfully", student });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getStudentByName = async (req, res) => {
  const { name } = req.query;
  try {
    const students = await Student.find({ name });
    return res
      .status(200)
      .json({ message: "Students fetched successfully", students });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateStudentById = async (req, res) => {
  const { id } = req.params;
  const { name, age, email, phone, address, course, institution } = req.body;
  try {
    const student = await Student.findByIdAndUpdate(
      id,
      { name, age, email, phone, address, course, institution },
      { new: true },
    );
    return res
      .status(200)
      .json({ message: "Student Updated Successfully", student });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server error" });
  }
};

const deleteStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Student Deleted Successfully", student });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  getStudentByName,
  updateStudentById,
  deleteStudentById,
};
