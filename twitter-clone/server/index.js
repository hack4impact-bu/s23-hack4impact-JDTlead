const express = require("express");
const app = express();

// Workshop 2 Variables
const cors = require("cors");
app.use(cors()); // use cors as a middleware
app.use(express.json());

const monk = require("monk");
// local database - keep this before workshop 4
// const db = monk("localhost/meower"); // connect to a local database, name meower
// deploy database 
const db = monk(process.env.MONGO_URI || "localhost/meower");
const mews = db.get("mews"); // a collection
// if the db / collections doesn't exist, it will automatically create it

// Workshop 4 variables
const Filter = require("bad-words");
const filter = new Filter();
const rateLimit = require("express-rate-limit");

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
    mew.name.toString().trim().length <= 50 &&
    mew.content &&
    mew.content.toString().trim() !== "" &&
    mew.content.toString().trim().length <= 140
  );
}

// Workshop 4 Portion
/*app.use(
  rateLimit({
    windowMs: 30 * 1000, // 30 seconds
    max: 1,
  })
);*/
// insert into db
app.post("/mews", (req, res) => {
  if (isValidMew(req.body)) {
    // insert into db ...
    const mew = {
      name: req.body.name.toString(),
      content: req.body.content.toString(),
      created: new Date(),
    };
    /** Workshop 4, when we npm bad-words and use filter
     * const mew = {
      name: filter.clean(req.body.name.toString())
      content: filter.clean(req.body.content.toString()),
      created: new Date(),
    };
     */
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

// Workshop 3 portion starts here
app.get("/mews", (req, res) => {
  mews
    .find() // find all of the things
    .then((mews) => {
      res.json(mews);
    });
});
// Workshop 3 portion ends here

app.listen(8080, () => {
  // Workshop 1
  console.log("Listening on http://localhost:8080");
});
