const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

const goalsRouter = require("./routes/goalRoutes");
app.use("/api/goals", goalsRouter);

app.listen(port, () => console.log(`Server started on port ${port}`));
