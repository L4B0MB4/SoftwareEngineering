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

module.exports = {
  connect
};
