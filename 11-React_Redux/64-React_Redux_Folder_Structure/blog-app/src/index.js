import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';
import {addBlog,removeBlog,editBlog} from './actions/blogs'

const store=configureStore();

store.subscribe(()=>{
    console.log(store.getState());
})

const blog1=store.dispatch(addBlog({title:'blog title 1',description:'blog description 1'}));
const blog2=store.dispatch(addBlog({title:'blog title 2',description:'blog description 2',dateAdded:Date.now()}));

store.dispatch(removeBlog({id:blog1.blog.id}))
store.dispatch(editBlog(blog2.blog.id,{title:'updated blog title'}))

ReactDOM.render(<AppRouter />,document.getElementById('root'));


reportWebVitals();
