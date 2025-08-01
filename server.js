const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

const userRouter = require("./app/routes/userRoutes");
const productRouter = require("./app/routes/productRoutes");
const orderRouter = require("./app/routes/orderRoutes");

app.use("/api/v1/users", userRouter);



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
