import { MongoClient } from 'mongodb';
import 'dotenv/config';

const uri = process.env.DB;

async function connectToDatabase() {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log('Connected to database...');
        await client.close();
    } catch (err) {
        console.error('Error connecting to database:', err);
    }
}

connectToDatabase();
