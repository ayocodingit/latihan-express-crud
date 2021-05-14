module.exports = async (model, id) => {
    let data = await model.findOne({
        where: {
            id: id
        }
    })
    if (!data) {
        return { error: true, message: 'Object Not Found'}
    }
    return data
}