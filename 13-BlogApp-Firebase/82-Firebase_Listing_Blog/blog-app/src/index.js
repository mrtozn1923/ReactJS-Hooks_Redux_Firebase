import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './App.css';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';
import {getBlogsFromDatabase} from './actions/blogs'
import './firebase/firebaseConfig'

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

reportWebVitals();
