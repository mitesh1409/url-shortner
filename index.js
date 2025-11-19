import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'node:url';

import { connectDB } from './config/db.js';
import { urlsApiRouter } from './routes/urlsApi.router.js';
import { homeController } from './controllers/homeController.js';
import * as urlsController from './controllers/urlsController.js';

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.set('view engine', 'ejs');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(__dirname, 'views'));

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;

app.get('/', homeController);
app.get('/urls', urlsController.listUrls);
app.use('/api/urls', urlsApiRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
