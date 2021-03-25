
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllStudent, getSubject } from '../actions/api'
const Home = () => {
    const [value, setValue] = useState([])
    const [values, setValues] = useState({ loadding: false, error: '' })
    var [subject, setSubject] = useState([])
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
                    <td>{data.Books && data.Books.map((book, i) => (<span key={i}>{book.name} </span>))}</td>
                    <td>
                        <Link to={`/subject/${data._id}`} className="btn btn-sm btn-info">Book</Link>
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
            <div className="pt-2">
                <h4 className="text-center text-muted pb-3">Students List</h4>
                {showAllStudent()}
            </div>
        </div>

    )
}
export default Home