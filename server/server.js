const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const exp = express();
import * as databaseutils from "./database";
const server = http.createServer(exp);
startServer();

async function startServer() {
  const database = await databaseutils.connect();

  exp.use(bodyParser.json());
  exp.use(bodyParser.urlencoded({ extended: true }));
  exp.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  exp.get("/", async (req, res) => {
    return res.json({ message: "hallo" });
  });
  exp.post("/insert", async (req, res) => {
    if (!req.body) return res.json({ success: false });
    else {
      let result = await databaseutils.insertData(req.body);
      return res.json(result);
    }
  });
  exp.get("/get", async (req, res) => {
    const result = await databaseutils.getData();
    return res.json(result);
  });

  server.listen(3001, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3001");
  });
}
