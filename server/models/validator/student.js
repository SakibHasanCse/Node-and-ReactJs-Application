import joi from 'joi';

var schema = joi.object().keys({
    name: joi.string().min(2).required(),
    email: joi.string().email().required(),
    phone: joi.number().required(),
    Dateofbirth: joi.string()

})
var validation = (data) => {
    var result = schema.validate(data)
    result.value = data
    return result
}
export default validation