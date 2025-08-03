const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./app/config/database"); // Adjust the path to your connectDB file

dotenv.config();

const app = express();
app.use(express.json());

const userRouter = require("./app/routes/userRoutes");
const productRouter = require("./app/routes/productRoutes");
//const orderRouter = require("./app/routes/orderRoutes");

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
// You can add productRouter and orderRouter similarly if needed

// ⏳ Connect to DB before starting the server
connectDB().then(() => {
  app.listen(3000, () => {
    console.log("✅ Server is running on port 3000");
  });
});

const errorHandler = require('./app/middleware/errorHandler');
app.use(errorHandler);

