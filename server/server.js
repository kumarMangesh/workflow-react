const fs = require("fs");
const { parse } = require("csv-parse");

const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const PORT = 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload", upload.array("file"), function (req, res, next) {
  console.log(req.body);
  res.json({ message: "Successfully uploaded files" });
});

app.listen(PORT, () => {
  console.log("Running  Server");
});

// const results = [];

// fs.createReadStream("kepler_data.csv")
//   .pipe(parse({ comment: "#", columns: true }))
//   .on("data", (data) => {
//     results.push(data);
//   })
//   .on("error", (err) => {
//     console.log(err);
//   })
//   .on("end", () => {
//     console.log(results);
//   });
