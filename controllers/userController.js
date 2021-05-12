const User = require('../models/userModel')

exports.index = async (req, res) => {
    try {
        const user = await User.findAll({ limit: 1 });
        res.send(user);
    } catch (err) {
        console.log(err);
    }
}

exports.show = async (req, res) => {
   try {
       const user = await User.findAll({
           where: {
               id: req.params.id
           }
       });
       res.send(user[0]);
   } catch (err) {
       console.log(err);
   }
}