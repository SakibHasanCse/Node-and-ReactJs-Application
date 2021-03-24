
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllStudent } from '../actions/api'
const Home = () => {
    const [value, setValue] = useState([])
    const [values, setValues] = useState({ loadding: false, error: '' })
    const { loadding, error } = values



    const getStudents = () => {
        setValues({ ...values, error: '', loadding: true })
        getAllStudent()
            .then(data => {

                if (data.error) {
                    setValues({ ...values, error: data.error, loadding: false })

                } else {
                    setValues({ ...values, error: '', loadding: false })
                    setValue(data)
                }

            })
    }

    useState(() => {
        getStudents()
    }, [])

    const singleStudentshow = () => {
        return (
            value && value.map((data, i) => (
                <tr key={i}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.Dateofbirth}</td>
                    <td>Bangla, English</td>
                    <td>
                        <Link to={`/subject/${data._id}`} className="btn btn-sm btn-info">Add Book</Link>
                    </td>

                </tr >
            ))
        )

    }
    const LoaddingMessage = () => {
        return (
            <div className="alert alert-info" style={{ display: loadding ? '' : 'none' }}>Loadding...</div>
        )
    }
    const ErrorMessage = () => {
        return (
            <div className="alert alert-info" style={{ display: error ? "" : 'none' }}>'Somthing went wrong...'</div>
        )
    }
    const showAllStudent = () => {
        return (

            <div className="table-responsive">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Date of birth</th>
                            <th scope="col">Subjects</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {singleStudentshow()}
                    </tbody>
                </table>
            </div>

        )
    }


    return (
        <div className="container pt-4">
            {LoaddingMessage()}
            {ErrorMessage()}
            {showAllStudent()}
        </div>

    )
}
export default Home