import express from "express";
import cors from 'cors';
import homeRouter from "./routes/home_routes.js";
import linkRouter from "./routes/url_routes.js";


export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", homeRouter);
app.use("/url", linkRouter);

