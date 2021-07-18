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

const registerSchema = {
    firstName: {
        notEmpty: true,
        errorMessage: notEmptyMessage('First name'),
        isLength: {
            errorMessage: maxMessage('First name', 20),
            options: { max: 20 }
        }
    },
    lastName: {
        notEmpty: true,
        errorMessage: notEmptyMessage('Last name'),
        isLength: {
            errorMessage: maxMessage('Last name', 20),
            options: { max: 20 }
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
    email: {
        notEmpty: true,
        normalizeEmail: true,
        errorMessage: notEmptyMessage('Email'),
        isLength: {
            errorMessage: maxMessage('Email', 30),
            options: { max: 30 }
        }
    },
   
}

module.exports = registerSchema
/*
 useEmailAvatar: {
        notEmpty: false,
        isBoolean: true,
        errorMessage: 'Use email avatar field should be a boolean'
    },
    date: {
        isDate: true,
        notEmpty: false,
    }
    */