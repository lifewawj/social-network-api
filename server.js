const express = require('express'); // Import the express npm package
const db = require('./config/connection'); // Import the MongoDB connection
const routes = require('./routes/api');

const PORT = process.env.PORT || 3001; // Create a const var for a PORT for our server to run
const app = express(); // Call express() and store it within an app const var

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}/`)
    });
});