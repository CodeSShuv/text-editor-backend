const express = require("express");
const cors = require("cors");

const { fileRouter } = require("./routes/file");
const app = express();
app.use(cors({
    origin: "http://localhost:5173", // Specify frontend URL
    credentials: true, // Allow cookies and credentials
  }));
app.use(express.json());
app.use("/downloads", express.static("public"));
app.use("/file", fileRouter);

app.listen(8080);