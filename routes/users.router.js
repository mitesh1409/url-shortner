import express from 'express';

import * as usersController from '../controllers/usersController.js';

const usersRouter = express.Router();

usersRouter.get('/signup', usersController.showSignupForm);
usersRouter.post('/signup', usersController.signup);

export {
    usersRouter
};
