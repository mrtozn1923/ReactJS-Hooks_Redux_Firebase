import React from 'react'

const BlogDetailsItem = ({id,title,description}) => {
    return (
        <div>
            <p>Blog Id:{id}</p>
            <p>Blog Title:{title}</p>
            <p>Blog Description:{description}</p>
        </div>
    )
}

export default BlogDetailsItem
