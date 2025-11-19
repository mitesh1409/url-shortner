import express from 'express';

import * as usersController from '../controllers/usersController.js';

const usersRouter = express.Router();

usersRouter.get('/signup', usersController.showSignupForm);
usersRouter.post('/signup', usersController.signup);
usersRouter.get('/signin', usersController.showSignInForm);
usersRouter.post('/signin', usersController.signin);

export {
    usersRouter
};
