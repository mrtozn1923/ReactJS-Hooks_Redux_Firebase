import React from 'react';
import BlogForm from './BlogForm';
import {connect} from 'react-redux';
import {editBlogFromDatabase,removeBlogFromDatabase} from '../actions/blogs';

const EditBlogPage = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="mt-3 col-lg-8 offset-lg-2">
                    <h1 className="bg-secondary p-2 text-white">Edit Blog</h1>
                    <BlogForm 
                        blog={props.blog}
                        onSubmit={(blog)=>{
                            props.dispatch(editBlogFromDatabase(props.blog.id,blog));
                            props.history.push('/blogs');
                        }}
                    />
                    <button className="btn btn-danger w-100 my-1" onClick={()=>{
                        props.dispatch(removeBlogFromDatabase(props.blog.id));
                        props.history.push('/blogs');
                    }}>Delete</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    return{
        blog:state.blogs.find((b)=>{
            return b.id===props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditBlogPage)
