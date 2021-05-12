const user = require('../models/userModel')

exports.index = (req, res) => {
    user.getAll((err, user) => {
        if (err) {
            res.json(err)
        }

        res.json(user)
    })
}

exports.show = (req, res) => {
    user.getByID(req.params.id, (err, user) => {
        if (err) {
            res.json(err)
        }

        res.json(user)
    })
}