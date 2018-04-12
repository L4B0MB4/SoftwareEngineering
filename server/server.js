const express = require("express");
const http = require("http");
const path = require("path");
const exp = express();
//const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const server = http.createServer(exp);

exp.use(bodyParser.json());
exp.use(bodyParser.urlencoded({ extended: true }));

exp.get("/", async (req, res) => {
    return res.json({ message: "hallo" });
});

server.listen(3001, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
});
