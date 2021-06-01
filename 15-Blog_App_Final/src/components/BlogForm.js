import React, { Component } from 'react'

export default class BlogForm extends Component {
    constructor(props){
        super(props);
        this.state={
            title:props.blog?props.blog.title:'',
            description:props.blog?props.blog.description:'',
            error:''
        }
    }
    onTitleChange=(e)=>{
        const title=e.target.value;
        this.setState(()=>({title}));
    }
    onDescriptionChange=(e)=>{
        const description=e.target.value;
        this.setState(()=>({description}));
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.title || !this.state.description){
           this.setState({error:'Lütfen tüm alanları doldurunuz.'})
        }else{
            this.setState({error:''});
            this.props.onSubmit({
                title:this.state.title,
                description:this.state.description,
                dateAdded:Date.now(),
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <div className="alert alert-danger" role="alert">{this.state.error}</div>}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="input-title" className="font-weight-bold">Blog Title</label>
                        <input id="input-title" className="form-control" value={this.state.title} onChange={this.onTitleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-description" className="font-weight-bold">Blog Description</label>
                        <textarea name="blog-editor" rows="10" id="input-description" className="form-control" value={this.state.description} onChange={this.onDescriptionChange}></textarea>
                    </div>
                    <div>
                        <button className="btn btn-primary w-100 my-1" type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
        )
    }
}
