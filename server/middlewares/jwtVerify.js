  
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const jwtVerify = (req, res, next) => {
    //const token = req.cookies['token'];
     const token = req.header('x-auth-token');
    // if there is not token in the request
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) {
                return res.status(401).json({ msg: 'Token is not valid' });
            } else {
                req.user = decoded.user;
                next();
            }
        })
    } catch (error) {
        console.log('Auth Middleware Error');
        res.status(500).json({ msg: 'Server Error' });
    }
}

module.exports = jwtVerify;