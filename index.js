import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './config/db.js';
import { urlRouter } from './routes/url.router.js';

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the URL Shortener Service!');
});
app.use('/url', urlRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
