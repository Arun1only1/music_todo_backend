import express from "express";
import { connectDB } from "./db.connect.js";
import todoRoutes from "./todo/todo.routes.js";
import userRoutes from "./user/user.routes.js";

const app = express();
app.use(express.json());

// connect db
connectDB();

// register routes
app.use(todoRoutes);
app.use(userRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
