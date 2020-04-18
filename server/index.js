const express = require("express");
const app = express();
var fs = require("fs");
const algs = require("./alg-data.json");

app.use(express.json());

//To be able to send requests locally
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Z-Key",
  });
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
  if (!req.body.recommended || !req.body.alternative) {
    res
      .status(400)
      .send("Both 'Recommended' and 'Alternative' algs must be set");
    return;
  }
  fs.readFile("./alg-data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const alg = {
        id: Math.floor(Math.random() * 1000),
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

//Handle put request to update
app.put("/api/algs/:name", (req, res) => {
  fs.readFile("./alg-data.json", "utf8", (err, data) => {
    if (err) {
      res.status(400).send("Can not update");
      return;
    } else {
      obj = JSON.parse(data);

      obj.find((o) => {
        if (o.name === req.params.name) {
          o.recommended = req.body.recommended;
          o.alternative = req.body.alternative;
        }
      });
      json = JSON.stringify(obj);
      fs.writeFile("./alg-data.json", json, "utf8", () => {
        res.send(json);
      });
    }
  });
});

//Handle delete request
app.delete("/api/algs/:name", (req, res) => {
  fs.readFile("./alg-data.json", "utf8", (err, data) => {
    if (err) {
      res.status(400).send("Can not update");
      return;
    } else {
      obj = JSON.parse(data);

      const pllCase = obj.find((alg) => alg.name === req.params.name);
      const index = obj.indexOf(pllCase);
      if (index >= 0) {
        obj.splice(index, 1);
      } else {
        res.send(`Can not find case ${req.params.name}`);
      }
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
