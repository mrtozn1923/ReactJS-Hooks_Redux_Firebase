import React from 'react'

const BlogDetailsItem = ({title,description}) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="mb-3">{title}</h1>
                    <p dangerouslySetInnerHTML={{__html:description}}></p>
                </div>
            </div>
            
        </div>
    )
}

export default BlogDetailsItem
