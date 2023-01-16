const express = require("express");
const dotenv = require("dotenv").config();
const colors=require('colors')
const {errorHandler}=require("./middleware/errorMiddleware")
const connectDb=require('./config/db')
const port = process.env.PORT || 5000;

connectDb()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const goalsRouter = require("./routes/goalRoutes");
app.use("/api/goals", goalsRouter);
//overwriting the default error handler to give us more information
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));
