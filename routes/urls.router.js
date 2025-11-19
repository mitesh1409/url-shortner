import express from 'express';

import * as urlsController from '../controllers/urlsController.js';

const urlsRouter = express.Router();

// GET /urls - List all URLs
urlsRouter.get('/', urlsController.listUrls);
// GET /urls/:shortId - Redirect to original URL
urlsRouter.get('/:shortId', urlsController.redirectToOriginalUrl);

export {
    urlsRouter
};
