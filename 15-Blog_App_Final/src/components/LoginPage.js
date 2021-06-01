import React from 'react';
import {login} from '../actions/auth';

export const LoginPage=()=>(
    <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column">
            <h1 className="text-center">React Blog Application</h1>
            <button className="btn btn-danger" onClick={login}>Sign in with Google Account</button>
        </div>
    </div>
);

export default LoginPage;