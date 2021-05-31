import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './App.css';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';
import {getBlogsFromDatabase} from './actions/blogs'
import {firebase} from './firebase/firebaseConfig'

const store=configureStore();

const result=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>,document.getElementById('root'));
store.dispatch(getBlogsFromDatabase()).then(()=>{
    ReactDOM.render(result,document.getElementById('root'));
})

firebase.auth().onAuthStateChanged(function(user){
    if(user){
        console.log("giriş yapılmış");
        console.log(user);
    }else{
        console.log("giriş yapılmamış");
    }
})

reportWebVitals();
