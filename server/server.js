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

  exp.get("/", async (req, res) => {
    return res.json({ message: "hallo" });
  });
  exp.post("/insert", async (req, res) => {
    console.log(req.body);
    return res.json({ message: "hier" });
  });

  server.listen(3001, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
}
