const { validationResult } = require('express-validator')

module.exports = validate = (req, res, next) => {
    const errors = validationResult(req)
    
    if (errors.isEmpty()) {
        next()
    } else {
        res.status(422).json({
            success: false,
            errors: errors.array().map(err => {
                return {
                    attribute: err.param,
                    message: err.msg
                }
            })
        })
    }
}
