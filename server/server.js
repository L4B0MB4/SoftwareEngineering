// allgemeine Voreinstellungen für Express-Server
const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const exp = express();
import * as databaseutils from "./database";
const server = http.createServer(exp);

//Middleware Initialisierung
exp.use(bodyParser.json());
exp.use(bodyParser.urlencoded({ extended: true }));
exp.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

startServer();

//Startet den Server mit den definierten Routen
async function startServer() {
  const database = await databaseutils.connect(); // wartet asynchron auf Datenbankverbindung

  exp.post("/insert", async (req, res) => {
    // localhost:30001/insert nimmt Items entgegen die in die NoSQL DB geschrieben werden sollen
    if (!req.body) return res.json({ success: false });
    else {
      let result = await databaseutils.insertData(req.body);
      return res.json(result);
    }
  });

  // localhost:30001/delete nimmt Items entgegen die in der NoSQL DB gelöscht werden sollen
  exp.post("/delete", async (req, res) => {
    if (!req.body) return res.json({ success: false });
    else {
      let result = await databaseutils.deleteItemByShortname(req.body);
      return res.json(result);
    }
  });

  // localhost:30001/get schickt alle Items aus der Datenbank zum Client
  exp.get("/get", async (req, res) => {
    const result = await databaseutils.getData();
    return res.json(result);
  });

  server.listen(3001, err => {
    // startet den Server
    if (err) throw err;
    console.log("> Ready on http://localhost:3001");
  });
}
