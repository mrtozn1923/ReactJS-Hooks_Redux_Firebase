import React from 'react'
import {Link} from 'react-router-dom'

const BlogListItem = ({id,title}) => {
    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card bg-light my-3">
                    <div className="card-body text-center">
                        <h4 className="card-text">{title}</h4>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <Link className="btn btn-primary" to={`/blogs/${id}`}>Details</Link>
                        <Link className="btn btn-warning" to={`/edit/${id}`}>Edit</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogListItem
