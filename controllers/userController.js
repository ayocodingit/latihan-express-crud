const { user: User } = require('../models')
const validation = require('../validations/userValidation')

exports.index = async (req, res) => {
    try {
        const user = await User.findAll();
        res.send(user);
    } catch (err) {
        console.log(err);
    }
}

exports.show = async (req, res) => {
   try {
       const user = await User.findOne({
           where: {
               id: req.params.id
           },
           attributes: ['id', 'username', 'email']
       });
       res.send(user);
   } catch (err) {
       console.log(err);
   }
}

exports.store = async (req, res) => {
    try {
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        const errors = validation.store(user)
        if (errors) {
            return res.status(422).json(errors)
        }
        await User.create(user)
        res.send(user);
    } catch (err) {
        console.log(err);
    }
}