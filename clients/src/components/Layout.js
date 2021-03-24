import React from 'react'
import { Link } from 'react-router-dom'
const Layout = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">CRUD APP</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link">Home</Link>
                    <Link to="/create" className="nav-item nav-link">Add New</Link>
                </div>
            </div>
        </nav>

    )
}
export default Layout