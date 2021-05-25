import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import { createStore,combineReducers } from 'redux';

const state={
    blogs:[
        {
            id:1,
            title:'blog title 1',
            description:'blog description 1',
            dateAdded:0
        }
    ],
    auth:{
        userid:1,
        username:'mertozen',
        email:'mert@gmail.com'
    }
}
const blogState=[];
const blogReducer=(state=blogState,action)=>{
    switch (action.type){
        default:
            return state;
    }
}
const authState={};
const authReducer=(state=authState,action)=>{
    switch(action.type){
        default:
            return state
    }
}
const store=createStore(
    combineReducers({
        blogs:blogReducer,
        auth:authReducer
    })
);
console.log(store.getState());


ReactDOM.render(<AppRouter />,document.getElementById('root'));


reportWebVitals();
