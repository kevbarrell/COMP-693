import express from 'express';
import {} from 'dotenv/config';
import routes from './routes/routes.js';
import './db/connect.js';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

const PORT = process.env.PORT || 5000;

const init = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Connected to the database');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));