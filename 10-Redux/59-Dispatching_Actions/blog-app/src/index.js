import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux'

const initialState={
    count:0
}
//store
const store=createStore((state=initialState,action)=>{
    switch(action.type){
        case "INCREMENT":
            const incrementBy=typeof action.incrementBy==='number'?action.incrementBy:1;
            return{
                count:state.count+incrementBy
            }
        case "DECREMENT":
            return{
                count:state.count-1
            }
        case "RESET":
            return{
                count:0
            }
        default:
            return state
    }
});

// //get state
// console.log(store.getState());

store.subscribe(()=>{
    console.log(store.getState());
})

//increment,decrement,reset
store.dispatch({
    type:"INCREMENT",
    incrementBy:10
})

store.dispatch({
    type:"INCREMENT"
})

store.dispatch({
    type:"DECREMENT"
})

store.dispatch({
    type:"RESET"
})



ReactDOM.render(<AppRouter />,document.getElementById('root'));


reportWebVitals();
