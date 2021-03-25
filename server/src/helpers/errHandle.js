import { GeneralError, BadRequest } from '../utils/error'
export const handleError = (err, req, res, next) => {
    let code = 500;
    if (err instanceof GeneralError) {
        code = err.getCode()
    }
    console.log('err', err)
    if (code === 500) {
        return res.status(code).json({ error: err.message })
    }

    return res.status(code).json({ error: err.message })
}