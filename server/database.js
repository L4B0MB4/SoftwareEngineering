const mongoUrl = "mongodb://127.0.0.1:27017/local";
const { MongoClient } = require("mongodb");
let db;

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

const insertData = data =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    db.collection("sedata").save(data, { w: 1 }, resolve);
  });

const getData = () =>
  // this is using the same db connection
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
  getData
};
