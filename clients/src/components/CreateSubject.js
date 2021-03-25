import React, { useEffect, useState } from 'react'
import { CreateSubject, getSubject } from '../API/api'
import { useParams, withRouter } from 'react-router-dom'

const Subject = () => {

    var { id } = useParams()
    var [values, setValues] = useState({ error: '', success: '', name: '' })
    var [subject, setSubject] = useState([])
    const { name, error, success } = values


    const handleSubmit = (e) => {
        e.preventDefault()
        setValues({ ...values, error: '', success: '' })
        var form = { student: id, name }
        CreateSubject(form)
            .then((data) => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: '' })
                }
                else {
                    setValues({ ...values, error: '', success: data.message, name: '' })
                    fetchSubject()
                }
            })
    }

    const handleChange = name => e => {
        setValues({ ...values, [name]: e.target.value, error: '', success: '' })

    }

    useEffect(() => {
        fetchSubject()
    }, [])

    const fetchSubject = () => {
        getSubject(id)
            .then((response) => {
                if (response.error) {
                    setValues({ ...values, error: response.error, success: '' })
                } else {
                    setSubject(response)
                }
            })
    }

    var subjectName = subject[0];
    const showBooks = () => {
        return (subjectName && subjectName.subjects.map((book, i) => {
            return (
                <li key={i} className="list-group-item">{book.name}</li>
            )
        }))

    }


    const showError = () => {
        return (
            <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>{error}</div>
        )
    }
    const showMessages = () => {
        return (
            <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>{success}</div>
        )
    }
    const subjectFrom = () => {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Book Name</label>
                        <input type="text" className="form-control" value={name} onChange={handleChange('name')} />
                    </div>
                    <button className="btn btn-info">Add Book</button>
                </form>
            </div>
        )
    }


    return (
        <div className="container">
            <div className="pt-4">
                {showMessages()}
                {showError()}
            </div>
            <div className="row">
                <div className="col-md-6">
                    <ul className="list-group">
                        <li className="list-group-item active" aria-current="true">{`${subjectName && subjectName.name}'s Books `}</li>
                        {showBooks()}
                    </ul>
                </div>
                <div className="col-md-6">

                    {subjectFrom()}
                </div>
            </div>

        </div>

    )
}
export default Subject