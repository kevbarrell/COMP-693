import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create express app
const app = express();

// Set 'public' folder as a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server on port 5000
app.listen(5000, () => {
  console.log('Server is running at http://localhost:5000');
});
