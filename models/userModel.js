const conn = require('../config/db')

const user = (user) => {
    this.username = user.username
    this.email = user.email
    this.password = user.password
    this.created_at = new Date()
    this.updated_at = new Date()
}

user.getAll = (result) => {
    conn.query('SELECT * FROM user', (err, res) => {
        if (err) {
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

user.getByID = (id, result) => {
    conn.query('SELECT * FROM user WHERE id=?', id, (err, res) => {
        if (err) {
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

module.exports = user