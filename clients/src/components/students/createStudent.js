import React, { useEffect, useState } from 'react'
import { createStudent } from '../../actions/api'
const Student = () => {
    var [values, setValues] = useState({
        name: '', email: '', phone: '', Dateofbirth: '', success: '', error: '', loadding: false,
    })
    const { name, email, phone, error, success, loadding, Dateofbirth } = values

    const handleSubmit = async (e) => {
        e.preventDefault()

        setValues({ ...values, error: '', success: '', loadding: true })
        var formdata = { name, email, phone, Dateofbirth }

        await createStudent(formdata)
            .then(response => {

                if (response.error) {
                    setValues({ ...values, error: response.error, success: '', loadding: false })


                } else {
                    setValues({ ...values, error: '', success: response.message, name: '', email: '', phone: '', dateofbirth: '', loadding: false })

                }
            }).catch((error) => {
                console.log(error)
            })


    }


    const handleChange = name => e => {

        setValues({ ...values, [name]: e.target.value, error: '', success: '', loadding: false })
    }
    const createFrom = () => {
        return (
            <div className="pt-4">
                <h5 className="text-center text-muted">Add new student</h5>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" value={name} onChange={handleChange('name')} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" value={email} onChange={handleChange('email')} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Phone</label>
                        <input type="text" value={phone} onChange={handleChange('phone')} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Date of birth</label>
                        <input type="date" value={Dateofbirth} onChange={handleChange('Dateofbirth')} className="form-control" />
                    </div>
                    <button className="btn btn-info">Add New</button>
                </form>
            </div>
        )
    }

    const ErrorMessage = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>{error}</div>
    )
    const LoaddingMessage = () => (
        <div className="alert alert-info" style={{ display: loadding ? '' : 'none' }}>Loadding...</div>
    )
    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>{success}</div>
    )
    return (
        <div className="container">
            <div className="pt-4">
                {LoaddingMessage()}
                {ErrorMessage()}
                {showSuccess()}
            </div>
            {createFrom()}

        </div>
    )
}
export default Student