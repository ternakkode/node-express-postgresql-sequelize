module.exports = (err, req, res, next) => {
    res.status(400).json({
        success: false,
        errors: err.message
    })
}