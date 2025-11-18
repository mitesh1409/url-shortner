import mongoose from "mongoose";

const MONGO_DB_URI = process.env.MONGO_DB_URI || 'mongodb://localhost:27017/urlShortnerDB';

async function connectDB() {
    try {
        await mongoose.connect(MONGO_DB_URI);
    } catch (error) {
        logError(error);
        process.exit(1);
    }
}

// Connection event listeners:
// connected, disconnected, error
mongoose.connection.on('connected', () => console.log('MongoDB connected successfully!'));
mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected.'));
mongoose.connection.on('error', error => {
    logError(error);
    process.exit(1);
});

function logError(error) {
    console.error('DB Connection Error -', error.message || error);
}

export {
    connectDB
};
