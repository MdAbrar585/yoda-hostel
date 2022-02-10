const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error")

app.use(express.json());

const food = require("./routes/foodRoute");
const student = require("./routes/studentRouts");
const distribution = require("./routes/distributionRoute");
// Route Imports
app.use("/api/v1", food);
app.use("/api/v1", student);
app.use("/api/v1", distribution);

app.use(errorMiddleware);

module.exports = app;