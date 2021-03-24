import React, { useEffect, useState } from 'react'

const Subject = () => {
    var [values, setValues] = useState({ studentId: '', name: '' })
    const { name, studentId } = values

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = name => e => {
        console.log(e.target.value)

    }

    const subjectFrom = () => {
        return (
            <div className="pt-4">
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
            {subjectFrom()}

        </div>

    )
}
export default Subject