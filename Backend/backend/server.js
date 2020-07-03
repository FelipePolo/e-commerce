import express from "express";
import data from "./data";

import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";

import userRoute from "./routes/userRoutes";
import productsRoutes from './routes/productsRoutes'

import bodyparser from 'body-parser'

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
const app = express();
app.use(bodyparser.json())

mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => {
    console.log(error.reason);
  });

app.use("/api/users", userRoute);
app.use("/api", productsRoutes);
app.listen(5000, () => console.log("server start at http://localhost:5000"));
