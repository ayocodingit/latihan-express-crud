const Joi = require('@hapi/joi')
const { options, errorMessages } = require('./index')

const defaultValidUser = Joi.object().keys({
    username: Joi.string().required().min(3),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
})

exports.store = (user) => {
    const result = Joi.validate(user, defaultValidUser, options);
    return errorMessages(result)
}