import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'node:url';

import { connectDB } from './config/db.js';
import { urlsRouter } from './routes/urls.router.js';
import { urlsApiRouter } from './routes/urlsApi.router.js';
import { homeController } from './controllers/homeController.js';
import { usersRouter } from './routes/users.router.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// parse cookies from incoming requests (makes `req.cookies` available)
app.use(cookieParser());
app.set('view engine', 'ejs');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(__dirname, 'views'));

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;

app.get('/', homeController);
app.use('/urls', urlsRouter);
app.use('/api/urls', urlsApiRouter);
app.use('/users', usersRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
