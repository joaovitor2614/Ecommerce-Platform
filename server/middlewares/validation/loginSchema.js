// messages
const max20 = ' and should be 20 max long'
const max30 = ' and should be 30 max long'
const max10min6 = ' and should have a maximum of 10 characters and a minimum of 6'

function maxMessage(field, max) {
    return `${field} field should be ${max} long`
}

function maxMinMessage(field, max, min) {
    return `${field} field should have a maximum of ${max} characters and a minimum of ${min}`
}

function notEmptyMessage(field) {
    return `${field} field cannot be empty.`
}

const loginSchema = {
    email: {
        notEmpty: true,
        normalizeEmail: true,
        errorMessage: notEmptyMessage('Email'),
        isLength: {
            errorMessage: maxMessage('Email', 30),
            options: { max: 30 }
        }
    },
  
    password: {
        notEmpty: true,
        errorMessage: notEmptyMessage('Password'),
        isLength: {
            errorMessage: maxMinMessage('Password', 6, 10),
            options: { max: 10, min: 6 }
        }
    },

}

module.exports = loginSchema