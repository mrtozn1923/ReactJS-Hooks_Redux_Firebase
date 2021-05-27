import React from 'react';
import {connect} from 'react-redux';

const BlogList = (props) => {
    console.log(props);
    return (
        <div>
            {props.blogs.length}
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        blogs:state.blogs
    }
}

export default connect(mapStateToProps)(BlogList);
