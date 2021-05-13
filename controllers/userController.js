const { user: User } = require('../models')

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