import React, { useState } from 'react'
import {BrowserRouter,Route, Switch, Link, NavLink} from 'react-router-dom'
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search'
import Alert from './Alert'
import About from './About'
import axios from 'axios'
import UserDetails from './UserDetails'
import GithubState from '../context/githubState'

const App=()=> {
    const [users,setUsers]=useState([]);
    const [user,setUser]=useState({});
    const [loading,setLoading]=useState(false);
    const [alert,setAlert]=useState(null);
    const [repos,setRepos]=useState([]);

    
    const getUser=(username)=>{
        setLoading(true);
            axios
            .get(`https://api.github.com/users/${username}`)
            .then(res=>{
                setUser(res.data)
                setLoading(false)
            });
    }
    const getUserRepos=(username)=>{
        setLoading(true);
            axios
            .get(`https://api.github.com/users/${username}/repos`)
            .then(res=>{
                setRepos(res.data)
                setLoading(false)
            });
    }
    const clearUsers=()=>{
        setUsers([]);
    }
    const showAlert=(msg,type)=>{
        setAlert({msg,type})
        setTimeout(() => {
            setAlert({alert:null})
        }, 3000);
    }
    return (
        <GithubState>
            <BrowserRouter>
            <Navbar />
            <Alert alert={alert}/>
            <Switch>
                <Route exact path="/" render={props=>(
                    <>
                        <Search 
                            clearUsers={clearUsers}
                            showClearButton={users.length>0?true:false}
                            setAlert={showAlert}
                            />
                        <Users />
                    </>
                    )
                }/>
                <Route path="/about" component={About}/>   
                <Route path="/user/:login" render={props=>(
                    <UserDetails 
                        {...props} 
                        getUser={getUser}
                        getUserRepos={getUserRepos} 
                        user={user} 
                        repos={repos}
                        loading={loading}
                    />
                )}/>   
            </Switch>            
        </BrowserRouter>
        </GithubState>
    )
}

export default App
