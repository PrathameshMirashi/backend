const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose.set("strictQuery", true);

const port = 5000;
const mongoDB = require("./db");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://e-comm-backend-qffw.onrender.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
  );
  next();
});

mongoDB();
app.use(express.json());
// app.use("/api", require("./Routes/CreatUser"));
app.use("/api", require("./DisplayData"));
// app.use("/api", require("./Routes/DisplayPop"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`sever is running  on port ${port}`);
});
