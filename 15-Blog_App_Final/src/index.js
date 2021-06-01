import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.slim.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Loading from './components/Loading'
import {Provider} from 'react-redux';
import AppRouter,{history} from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';
import {getBlogsFromDatabase,clearBlogs} from './actions/blogs'
import {firebase} from './firebase/firebaseConfig'
import {loginAction,logoutAction} from './actions/auth'

const store=configureStore();

const result=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<Loading/>,document.getElementById('root'));
let isRendered=false;
const renderApp=()=>{
    if(!isRendered){
        ReactDOM.render(result,document.getElementById('root'));
        isRendered=true;
    }
}
firebase.auth().onAuthStateChanged(function(user){
    if(user){
        store.dispatch(loginAction(user.uid));
        store.dispatch(getBlogsFromDatabase()).then(()=>{
            renderApp();

            if(history.location.pathname==="/"){
                history.push('/blogs');
            }
        })
    }else{
        store.dispatch(logoutAction());
        store.dispatch(clearBlogs());
        renderApp();
        history.push("/");
    }
})

reportWebVitals();
