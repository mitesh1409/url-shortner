import { User } from '../models/user.model.js';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import * as authService from '../services/auth.js';

function showSignupForm(req, res) {
    res.render('users/signup');
}

async function signup(req, res) {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res
            .status(400)
            .render('users/signup', { error: 'All fields are required.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
    } catch (error) {
        console.error('Error during user signup:', error);
        res
            .status(500)
            .render('users/signup', { error: 'An error occurred. Please try again.' });
        return;
    }

    res
        .status(201)
        .send('User registered successfully.');
}

function showSignInForm(req, res) {
    res.render('users/signin');
}

async function signin(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res
            .status(400)
            .render('users/signin', { error: 'Email and password are required.' });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res
            .status(401)
            .render('users/signin', { error: 'Invalid email or password.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res
            .status(401)
            .render('users/signin', { error: 'Invalid email or password.' });
    }

    // Generate a session token using uuidv4().
    const sessionToken = uuidv4();

    // Here you would typically store the session token in your database or in-memory store.
    authService.setUser(sessionToken, user);

    // Set the session token as a cookie in the response.
    res.cookie('sessionToken', sessionToken, { httpOnly: true });

    res.send('User signed in successfully.');
}

function showDashboard(req, res) {
    res.render('users/dashboard', { user: req.user });
}

export {
    showSignupForm,
    signup,
    showSignInForm,
    signin,
    showDashboard
};
