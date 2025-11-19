import * as authService from '../services/auth.js';

function authenticate(req, res, next) {
    const sessionToken = req.cookies.sessionToken;

    if (!sessionToken) {
        return res.redirect('/users/signin');
    }

    const user = authService.getUser(sessionToken);
    if (!user) {
        return res.redirect('/users/signin');
    }

    req.user = user;
    next();
}

export {
    authenticate
};
