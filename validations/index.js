exports.options = {
    abortEarly: false,
} 

exports.errorMessages = (result) => {
    const { error } = result
    if (error) {
        const { details } = error;
        const mappingError = details.map(e => {
            var obj = {}
            obj[e.context.key] = e.message
            return obj 
        })
        return {
            message: "Please check again ...",
            errors: mappingError
        }
    }
}