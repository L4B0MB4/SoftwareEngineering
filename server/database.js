const mongoUrl = "mongodb://127.0.0.1:27017/local";
const { MongoClient } = require("mongodb");
let db;

//connects with MongoDB
const connect = () => {
  if (db) {
    return Promise.resolve(db);
  }
  return new Promise((resolve, reject) => {
    MongoClient.connect(mongoUrl, (err, database) => {
      if (err) reject(err);
      db = database;
      resolve(db);
    });
  });
};

// inserts Data into DB -- if shortname already exists -> update Data
const insertData = obj =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    db.collection("sedata").findOne({ "data.shortname": "" + obj.data.shortname }, {}, (err, res) => {
      if (err) {
        resolve({ sucess: false });
      }
      if (res !== null) {
        db.collection("sedata").updateOne({ "data.shortname": "" + obj.data.shortname }, obj, (e, r) => {
          if (e) throw e;
          resolve({ success: true, message: "Update Erfolgreich" });
        });
      } else {
        db.collection("sedata").save(obj, { w: 1 }, () => {
          resolve({ success: true, message: "Eintrag Erfolgreich" });
        });
      }
    });
  });

// deletes Items by shortname of obj
const deleteItemByShortname = obj =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    db.collection("sedata").findOne({ "data.shortname": "" + obj.shortname }, {}, (err, res) => {
      if (err) {
        resolve({ sucess: false });
      }
      if (res !== null) {
        db.collection("sedata").remove({ "data.shortname": "" + obj.shortname });
        resolve({ success: true, message: "Löschen Erfolgreich" });
      }
    });
  });

//gets all the Data out of the Collection "sedata"
const getData = () =>
  new Promise((resolve, reject) => {
    db
      .collection("sedata")
      .find({})
      .toArray(function(err, res) {
        if (err) throw err;
        resolve(res);
      });
  });

module.exports = {
  connect,
  insertData,
  getData,
  deleteItemByShortname
};
