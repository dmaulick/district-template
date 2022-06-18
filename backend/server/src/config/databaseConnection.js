const { MongoClient } = require("mongodb");

let mongoDB;

const user = 'ClusterUser1';
const pw = 'kUKx8pd4mIqWZfwW';
const uri = `mongodb+srv://${user}:${pw}@cluster0.wp5wuaw.mongodb.net/?retryWrites=true&w=majority`; // uri from mongoDB atlas

const setupDB = callback => {
    MongoClient.connect(
      uri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        mongoDB = client.db('full-stack-server');
  
        if (err) {
          return callback(err);
        } else {
          return callback('DB OK');
        }
      }
    );
  };
  
  const getDB = () => {
    return mongoDB;
  };
  
  module.exports = { setupDB, getDB };