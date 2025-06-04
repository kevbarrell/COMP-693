import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.DB;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

export async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db('vectacorp'); // updated to match your Atlas database name
  }
  return db;
}
