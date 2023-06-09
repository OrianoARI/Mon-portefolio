const userModel = require('../models/userModel');

let authguard = async (req, res, next) => {
    let user = await userModel.findById(req.session.userId);
    if (user) {
        next()
    } else {
        res.redirect('/login')
    }
}

module.exports = authguard;