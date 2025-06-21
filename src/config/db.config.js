const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');

async function connectToDB() {
    try {
        if (NODE_ENV === "development") {
            await mongoose.connect(ATLAS_DB_URL);
            console.log("✅ Connected to MongoDB (development)");
        } else {
            console.log(`⚠️ Not connecting to DB. NODE_ENV is set to '${NODE_ENV}'`);
        }
    } catch (error) {
        console.log('❌ Unable to connect to the DB server');
        console.error(error);
    }
}

module.exports = connectToDB;
