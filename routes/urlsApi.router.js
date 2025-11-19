import express from 'express';

import * as urlsApiController from '../controllers/urlsApiController.js';

const urlsApiRouter = express.Router();

// POST /api/urls - Generate a short URL
urlsApiRouter.post('/', urlsApiController.generateShortUrl);
// GET /api/urls/analytics/:shortId - Get URL analytics
urlsApiRouter.get('/analytics/:shortId', urlsApiController.getUrlAnalytics);

export {
    urlsApiRouter
};
