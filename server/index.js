const express = require("express");
const app = express();
var fs = require("fs");
const algs = require("./alg-data.json");

app.use(express.json());

//To be able to send requests locally
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//respond with all algs
app.get("/api/algs", (req, res) => {
  res.send(algs);
});

//respond with one alg by ID
app.get("/api/algs/:name", (req, res) => {
  const alg = algs.find((a) => a.name === req.params.name);
  if (!alg) res.status(404).send("The alg with given id was not found");
  res.send(alg);
});

//Handle post request with new alg
app.post("/api/algs", (req, res) => {
  fs.readFile("./alg-data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const alg = {
        id: algs.length + 1,
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        recommended: req.body.recommended,
        alternative: req.body.alternative,
      };
      obj = JSON.parse(data);
      obj.push(alg);
      json = JSON.stringify(obj);
      fs.writeFile("./alg-data.json", json, "utf8", () => {
        res.send(json);
      });
    }
  });
});

//PORT
const port = process.env.PORT || 8080; //
app.listen(port, () => console.log(`listening on port ${port}...`)); //Starta servern genom port
