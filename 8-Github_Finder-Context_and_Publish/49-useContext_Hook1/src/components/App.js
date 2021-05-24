import React, { userState } from 'react'
import {BrowserRouter,Route, Switch, Link, NavLink} from 'react-router-dom'
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search'
import Alert from './Alert'
import About from './About'
import axios from 'axios'
import UserDetails from './UserDetails'

App=()=> {
    const [users,setUsers]=userState([])
    const [user,setUser]=userState({})
    const [loading,setLoading]=userState(false)
    const [alert,setAlert]=userState(null)
    const [repos,setRepos]=userState([])

    const searchUsers = (keyword)=>{
        setLoading(true)
            axios
            .get(`https://api.github.com/search/users?q=${keyword}`)
            .then(res=>{
                setUsers(res.data.items)
                setLoading(false)
            });
    }
    const getUser=(username)=>{
        setLoading(true)
            axios
            .get(`https://api.github.com/users/${username}`)
            .then(res=>{
                setUser(res.data)
                setLoading(false)
            });
    }
    const getUserRepos=(username)=>{
        setLoading(true)
            axios
            .get(`https://api.github.com/users/${username}/repos`)
            .then(res=>{
                setRepos(res.data)
                setLoading(false)
            });
    }
    const clearUsers=()=>{
        setUsers([])
    }
    const showAlert=(msg,type)=>{
        setAlert({msg,type})
        setTimeout(() => {
            setAlert({alert:null})
        }, 3000);
    }
    return (
        <BrowserRouter>
            <Navbar />
            <Alert alert={alert}/>
            <Switch>
                <Route exact path="/" render={props=>(
                    <>
                        <Search 
                            searchUsers={searchUsers} 
                            clearUsers={clearUsers}
                            showClearButton={users.length>0?true:false}
                            setAlert={showAlert}
                            />
                        <Users users={users} loading={loading}/>
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
    )
}

export default App
