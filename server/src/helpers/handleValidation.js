import { BadRequest } from '../utils/error'
export const handleValidation = (validate) => {
    return (req, res, next) => {
        const result = validate(req.body)
        if (result.error == null) {
            return next()
        }

        const { details } = result.error
        const messages = details.map(msg => msg.message)
        var msg = messages.join(',')

        throw new BadRequest(msg)


    }
}