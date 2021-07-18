const axios = require('axios')
const dotenv = require('dotenv');
const emailValidator = require('deep-email-validator');

dotenv.config();
const isEmailValid = async (email) => {
  return emailValidator.validate(email)
}

const emailVerify = async (req, res, next) => {
  // check if if there's email in the body
  if (!req.body.email) {
    return res.status(401).json({ msg: 'No email was sent' });
    next()
  }
  const { email } = req.body.email;
  try {
    // validatar email
    const { valid, reason, validators } = await isEmailValid(email)
    // if valid let's close our middleware
    if (valid) {
      next();
    }
    // if its not valid lets send a feedback
    return res.status(400).send({
      message: "Please provide a valid email address",
      reason: validators[reason].reason
    })
      
      
  } catch (err) {
      console.log(err)
    console.log('Email Verify Middleware Error')
    res.status(500).json({ msg: 'Server Error' });
  }
}

module.exports = emailVerify

/*
// get email from body
      const { email } = req.body;
      const key = process.env.EMAIL_VERIFY_KEY;
  
      // build api endpoint
      const endpoint = `https://emailverification.whoisxmlapi.com/api/v1?apiKey=${key}&emailAddress=${email}`
      let APIresponse = await axios.get(endpoint);
      if (APIresponse == 200) {
          // check if email is valid here
          if (APIresponse.data.smtpCheck === 'true') {
              next()
          } else {
            return res.status(401).json({ msg: 'Email is not valid' });
          }
      } else {
        return res.status(401).json({ msg: 'Email Validator Error' });
      }

      */