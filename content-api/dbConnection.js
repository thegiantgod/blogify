const mongoose = require('mongoose');

const connectToDatabase = async () => {
    let dbUrl = process.env.DATABASE_CONNECTION_URL;
    if (process.env.NODE_ENV?.trim() === 'test') {
        console.log("TEST ! \n")
        mongod = await MongoMemoryServer.create();
        dbUrl = mongod.getUri();
    }

    mongoose.connect(dbUrl);
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    
    db.once('open', () => {
    console.log("Connection Successful!");
    });
}

module.exports = { connectToDatabase }