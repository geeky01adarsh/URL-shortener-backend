import { app } from "./app.js";
import { connectDB } from "./database.js";
import * as dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

connectDB();
app.listen(PORT, (err) => {
  if (err) console.group(err);
  else console.log(`Sucessfully connected to port ${PORT}`);
});
