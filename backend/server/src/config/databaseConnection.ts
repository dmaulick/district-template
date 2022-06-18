import { Db, MongoClient, MongoClientOptions } from 'mongodb';

let mongoDB: Db | undefined;

const user = 'ClusterUser1';
const pw = 'kUKx8pd4mIqWZfwW';
const uri = `mongodb+srv://${user}:${pw}@cluster0.wp5wuaw.mongodb.net/?retryWrites=true&w=majority`; // uri from mongoDB atlas

const options: MongoClientOptions = {}; // No work: { useNewUrlParser: true, useUnifiedTopology: true }

export const setupDB = (callback: (msg: any) => void) => {
    MongoClient.connect(
      uri,
      options,
      (err, client) => {
        mongoDB = client?.db('full-stack-server');
  
        if (err) {
          return callback(err);
        } else {
          return callback('DB OK');
        }
      }
    );
  };
  
  export const getDB = () => {
    return mongoDB;
  };