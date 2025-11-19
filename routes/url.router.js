import express from 'express';

import * as urlController from '../controllers/urlController.js';

const urlRouter = express.Router();

urlRouter.post('/', urlController.generateShortUrl);
urlRouter.get('/:shortId', urlController.redirectToOriginalUrl);
urlRouter.get('/analytics/:shortId', urlController.getUrlAnalytics);

export {
    urlRouter
};
