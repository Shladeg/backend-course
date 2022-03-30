import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";

import router from "./router/index.js";

const app = express();

const PORT = 5000;
const DB_URL = "MONGO_DB_URL";

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload());
app.use("/api", router);

const start = async () => {
  try {
    await mongoose.connect(DB_URL);

    app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
