import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column">
            <h1 className="text-center text-white bg-danger p-3">PAGE NOT FOUND</h1>
            <NavLink to="/" className="btn btn-secondary">Turn Back</NavLink>
        </div>
        
    </div>
    )
}

export default NotFoundPage
