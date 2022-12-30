const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
//mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () =>{
    console.log('Connected to database' + config.database);
});

// On Error
mongoose.connection.on('error', (err) =>{
    console.log('Database error' + err);
});

const app = express();

const users = require('./routes/users');

const port = 3000;

// Middleware
    // CORS
app.use(cors()); // allows request to API from different domian name
    // Body Parser
app.use(bodyParser.json())

// Set Static Folder
app.use(express.static(path.join(__dirname,'public')));

// Routes
app.use('/users', users);

// Index Route
app.get('/', (req, res)=>{
    res.send("Invalid Endpoint");
});

// Start Server
app.listen(port, () => {
    console.log("Server started on port " + port);
});