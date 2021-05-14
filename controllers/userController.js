const { user: User } = require('../models')
const validation = require('../validations/userValidation')

const getReqBody = (req) => {
    return {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
}

exports.index = async (req, res) => {
    const user = await User.findAll();
    res.json(user);
}

exports.show = async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!user) {
        return res.status(404).json({message: 'Object Not Found ...'})
    }
    res.json(user);
}

exports.store = async (req, res) => {
    const data = getReqBody(req)
    const errors = validation.store(data)
    if (errors) {
        return res.status(422).json(errors)
    }
    let user = await User.create(data)
    res.json(user)
}

exports.update = async (req, res) => {
    const data = getReqBody(req)
    const id = req.params.id
    
    const errors = validation.store(data)
    if (errors) {
        return res.status(422).json(errors)
    }
    let user = await User.findOne({ 
        where: {
            id: id
        }
    })
    if (!user) {
        return res.status(404).json({
            message: 'Object Not Found ...'
        })
    }
    user = await user.update(data)
    res.json(user);
}

exports.destroy = async (req, res) => {
    const id = req.params.id
    let user = await User.findOne({ 
        where: {
            id: id
        }
    })
     if (!user) {
         return res.status(404).json({
             message: 'Object Not Found ...'
         })
     }
    await user.destroy()
    res.json({
        message: 'DELETED'
    });
}