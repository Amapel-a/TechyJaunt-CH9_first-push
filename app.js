const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const studentsRoutes = require("./routes/student.routes");

const app = express();
dotenv.config();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use("/students", studentsRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  connectDB();
  console.log(`App is running on port ${port}`);
});
