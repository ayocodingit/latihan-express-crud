module.exports = (sequelize, type) => {
    const user = sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: type.STRING,
        email: type.STRING,
        password: type.STRING,
    }, {
        freezeTableName: true
    })
    
    return user
}