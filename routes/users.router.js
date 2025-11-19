import express from 'express';

import * as userController from '../controllers/userController.js';

const usersRouter = express.Router();

usersRouter.get('/signup', userController.showSignupForm);
usersRouter.post('/signup', userController.signup);

export {
    usersRouter
};
