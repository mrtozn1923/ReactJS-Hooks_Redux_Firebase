import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux'

const initialState={
    count:0
}

const store=createStore((state=initialState)=>{
    return state
});

//INCREMENT, DECREMENT, RESET =>ACTIONS (OBJECT)

//DISPATCH: Action gönderip ilgili state içerisinde icra ettirme işlemi
//REDUCERS: State ile Action bilgisini paketleyip gönderdiğimiz yapılar

console.log(store.getState());

ReactDOM.render(<AppRouter />,document.getElementById('root'));


reportWebVitals();
