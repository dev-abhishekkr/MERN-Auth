import express from "express";
import { mongoose } from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connect to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
