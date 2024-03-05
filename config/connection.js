const { connect, connection } = require("mongoose"); // Imports the connection object and connect function from mongoose

const connectionString = "mongodb://127.0.0.1:27017/socialNetwork_DB"; // defining our connection string

connect(connectionString); // connecting to the MongoDB

module.exports = connection; // export our connection