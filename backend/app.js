import express from 'express';
import cors from 'cors';
import connect from './Config/db.js';
import router from './Routes/user.route.js';
import path from 'path';
import dotenv from 'dotenv';


const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const __dirname = path.resolve();
const PORT = process.env.PORT || 5000; // Use environment variable for the port

// Connect to the database
connect();

// API Routes
app.use('/api', router);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '/frontend/dist')));

// The "catchall" handler: for any request that doesn't match one above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
