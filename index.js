import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import homeRouter from "./routes/home_routes.js";
import linkRouter from "./routes/url_routes.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASS}@cluster0.yf2kxjy.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Successfully connected to the database"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeRouter);
app.use("/url", linkRouter);

app.listen(PORT, (err) => {
  if (err) console.group(err);
  else console.log(`Sucessfully connected to port ${PORT}`);
});
