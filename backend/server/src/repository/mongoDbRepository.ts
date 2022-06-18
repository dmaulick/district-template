import { Collection } from 'mongodb';
import { getDB } from '../config/databaseConnection.js';
import { ObjectId } from 'mongodb';

// TODO: figure out types on class methods.

export class MongoDbRepo {
  collection: Collection | undefined
  
  constructor(collectionName: string) {
    this.collection = getDB()?.collection(collectionName);
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.collection?.find({}).toArray((err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  geById(_id: any) {
    return new Promise((resolve, reject) => {
      this.collection?.findOne({ _id: new ObjectId(_id) }, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  updateOne(_id: any, opt: any) {
    return new Promise((resolve, reject) => {
      this.collection?.findOneAndUpdate(
        { _id: new ObjectId(_id) },
        { $set: opt },
        {},
        (err, data) => {
          if (err) {
            reject(err);
          }

          resolve(data?.value);
        }
      );
    });
  }

  deleteOne(_id: any) {
    return new Promise((resolve, reject) => {
      this.collection?.findOneAndDelete({ _id: new ObjectId(_id) }, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  create(opt: any) {
    return new Promise((resolve, reject) => {
      this.collection?.insertOne(opt, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
      1;
    });
  }
}
