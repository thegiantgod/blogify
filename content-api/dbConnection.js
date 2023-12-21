const mongoose = require('mongoose');

const connectToDatabase = async () => {
    let dbUrl = "mongodb+srv://admin:admin@blogify-database-instan.eky15hd.mongodb.net/?retryWrites=true&w=majority";

    mongoose.connect(dbUrl);
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    
    db.once('open', () => {
    console.log("Connection Successful!");
    });
}

module.exports = { connectToDatabase }