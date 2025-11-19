import express from 'express';

import * as urlApiController from '../controllers/urlApiController.js';

const urlsApiRouter = express.Router();

// POST /api/urls - Generate a short URL
urlsApiRouter.post('/', urlApiController.generateShortUrl);
// GET /api/urls/:shortId - Redirect to original URL
urlsApiRouter.get('/:shortId', urlApiController.redirectToOriginalUrl);
// GET /api/urls/analytics/:shortId - Get URL analytics
urlsApiRouter.get('/analytics/:shortId', urlApiController.getUrlAnalytics);

export {
    urlsApiRouter
};
