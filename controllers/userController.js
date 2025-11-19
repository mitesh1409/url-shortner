import { User } from '../models/user.model.js';
import bcrypt from 'bcrypt';

function showSignupForm(req, res) {
    res.render('users/signup');
}

async function signup(req, res) {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res
            .status(400)
            .render('users/signup', { error: 'All fields are required.' });
        return;
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

export {
    showSignupForm,
    signup
};
