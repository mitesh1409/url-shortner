import express from 'express';

import * as urlApiController from '../controllers/urlApiController.js';

const urlsApiRouter = express.Router();

urlsApiRouter.post('/', urlApiController.generateShortUrl);
urlsApiRouter.get('/:shortId', urlApiController.redirectToOriginalUrl);
urlsApiRouter.get('/analytics/:shortId', urlApiController.getUrlAnalytics);

export {
    urlsApiRouter
};
