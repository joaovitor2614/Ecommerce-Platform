const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const {body, checkSchema, validationResult, check} = require('express-validator');

// models
const User = require('../models/User');
const emailVerify = require('../middlewares/emailVerify');

// schema
const registerSchema = require('../middlewares/validation/registerSchema')

// create router
const router = express.Router()

//method POST /api/auth
//desc register users
// Public
router.post('/', checkSchema(registerSchema), emailVerify, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const { firstName, lastName, email, password } = req.body;

    try {
        // check if there is a user already with the email provided
        let user = await User.findOne({ email });
        if (user) {
            return 
            res.status(400)
            .json({ errors: [{ msg: 'A user with the email provided already exists' }] })
        }
        // generate avatar from user's provided email
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })
        // register new user
        user = new User({
            email,
            firstName,
            lastName,
            password,
            avatar
        })
        //password hashing
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // jwt payload
        const payload = {
            user: {
                id: user.id
            }
        }
        // sign token
        jwt.sign(
            payload, 
            process.env.JWT_SECRET,
            { expiresIn: '2h' },
            (err, token) => {
                if (err) throw err;
                // return token
                res.json({ token })
        });

        await user.save();
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
        
    }

})

module.exports = router