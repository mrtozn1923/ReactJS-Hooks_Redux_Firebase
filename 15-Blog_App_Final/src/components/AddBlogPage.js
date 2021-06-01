import React from 'react'
import BlogForm from './BlogForm'
import {connect} from 'react-redux'
import {addBlogToDatabase} from '../actions/blogs'

const AddBlogPage = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="mt-3 col-lg-8 offset-lg-2">
                    <h1 className="bg-secondary p-2 text-white">Add Blog</h1>
                    <BlogForm onSubmit={(blog)=>{
                        props.dispatch(addBlogToDatabase(blog));
                        props.history.push('/blogs');
                    }}/>
                </div>
            </div>
            
        </div>
    )
}

export default connect()(AddBlogPage)
