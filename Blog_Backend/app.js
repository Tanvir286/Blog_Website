const express = require('express');
const MongoDBConfig = require('./dbConfig/mongoDbConfig');
const userRouter = require('./routes/user.route');
const cors = require('cors');
const app = express();

// Connect to the MongoDB database
MongoDBConfig();

// Global CORS Middleware - Allow all origins (for testing)
app.use(cors());

// Middleware to parse incoming JSON request bodies
app.use(express.json());
// Middleware to serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Define the '/user' route using the imported userRouter
app.use("/user", userRouter);


//  This is demo part
app.get('/', (req, res) => {
    res.send('<h1>This is Blog Website Demo Page</h1>');
});

// Route not found middleware
app.use((req, res, next) => {
    res.status(404).json({ message: "route not found" });
});

// Server error middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: "something broke" });
});


// Export the app for use in other files
module.exports = app;