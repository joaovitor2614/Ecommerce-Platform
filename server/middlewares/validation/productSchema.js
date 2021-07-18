
function minMessage(field, min) {
    return `${field} field should be ${min} minimum long`
}


function maxMessage(field, max) {
    return `${field} field should be ${max} max long`
}

function maxMinMessage(field, max, min) {
    return `${field} field should have a maximum of ${max} characters and a minimum of ${min}`
}

function notEmptyMessage(field) {
    return `${field} field cannot be empty.`
}

const productSchema = {
   
    productName: {
        notEmpty: true,
       errorMessage: notEmptyMessage('Product name'),
       isLength: {
           options: { min: 2, max: 30 },
           errorMessage: maxMinMessage('Product name', 30, 2)
       }
    },
    productImage: {
         notEmpty: true,
        errorMessage: notEmptyMessage('Product image'),
    },
    productAmount: {
        notEmpty: true,
        isInt: true,
        toInt: true,
        errorMessage:  notEmptyMessage('Product amount'),
        isLength: {
            options: { min: 1 },
            errorMessage: minMessage('Product amount', 1)
        }
    },
    productPrice: {
         notEmpty: true,
        errorMessage: notEmptyMessage('Product Price'),
        toInt: true,
        isInt: true
    },
   

}

module.exports = productSchema;
/*
 date: {
        isDate: true
    }
*/