const express = require("express");
const app = express();

// Workshop 2 Variables
const cors = require("cors");
app.use(cors()); // use cors as a middleware
app.use(express.json());

const monk = require("monk");
const db = monk("localhost/meower"); // connect to a local database, name meower
const mews = db.get("mews"); // a collection
// if the db / collections doesn't exist, it will automatically create it

app.get("/", (req, res) => {
  // when client get a GET request, return a JSON object
  res.json({
    message: "Meower 🚨",
  });
});

// Workshop 2 portion starts here

function isValidMew(mew) {
  return (
    mew.name &&
    mew.name.toString().trim() !== "" &&
    mew.content &&
    mew.content.toString().trim() !== ""
  );
}

app.post("/mews", (req, res) => {
  if (isValidMew(req.body)) {
    // insert into db ...
    const mew = {
      name: req.body.name.toString(),
      content: req.body.content.toString(),
      created: new Date(),
    };
    mews.insert(mew).then((createdMew) => {
      res.json(createdMew);
    });
  } else {
    res.status(422);
    res.json({
      message: "Hey! Name nad Content are required",
    });
  }
});

// Workshop 2 portion ends here

app.listen(8080, () => {
  // Workshop 1
  console.log("Listening on http://localhost:8080");
});
