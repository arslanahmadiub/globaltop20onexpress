const express = require("express");
const path = require("path");
const cors = require("cors");
const expressStaticGzip = require("express-static-gzip");

const PORT = process.env.PORT || 7000;
const app = express();

app.use(cors());

// app.use(express.json({ extended: false }));

// app.use(express.static(path.join(__dirname, "build")));

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// app.listen(3000);

const buildPath = path.join(__dirname, "build");
app.use(
  "/",
  expressStaticGzip(buildPath, {
    enableBrotli: true,
    orderPreference: ["br", "gz"],
  })
);

// Fallback to index.html when something that doesn't exist is requested
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
