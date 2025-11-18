import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the URL Shortener Service!');
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
