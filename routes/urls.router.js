import express from 'express';

import * as urlsController from '../controllers/urlsController.js';
import { authenticate } from '../middlewares/authenticate.js';

const urlsRouter = express.Router();

// GET /urls - List all URLs
urlsRouter.get('/', authenticate, urlsController.listUrls);

// GET /urls/generate - Show form to generate a new short URL
urlsRouter.get('/generate', authenticate, urlsController.showFormToGenerateShortUrl);

// POST /urls/generate - Handle form submission to generate a new short URL
urlsRouter.post('/generate', authenticate, urlsController.generateShortUrl);

// GET /urls/:shortId - Redirect to original URL
urlsRouter.get('/:shortId', urlsController.redirectToOriginalUrl);

export {
    urlsRouter
};
