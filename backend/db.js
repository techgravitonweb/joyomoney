const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// path to .env file
dotenv.config({ path: path.join(__dirname, 'config.env') })

const mongoURL = process.env.DATABASE_URL;
// connection to mongodb Atlas
// const uri = 'mongodb://db_admin:Mh34Ghdk82An934Jdn82A01AB@localhost:27017/admin';
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURL);
        mongoose.set('debug', true);
        console.log("Connected to mongo successfully");
    } catch (error) {
        console.log(error);
    }
}



// Connection URL





module.exports = { connectToMongo };