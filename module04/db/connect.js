import { MongoClient } from 'mongodb';

let client;

const connectDB = async (uri) => {
    if (!client) {
        client = new MongoClient(uri);
        await client.connect();
        console.log('Connected to database...');
    }
    return client.db('vectacorp');
};

export default connectDB;
