import React, { Component,Fragment } from 'react'
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search'
import axios from 'axios'

export class App extends Component {
    constructor(props){
        super(props);
        this.searchUsers=this.searchUsers.bind(this);
        this.clearUsers=this.clearUsers.bind(this);
        this.state={
            loading:false,
            users:[]
        }
    }
    searchUsers(keyword){
        this.setState({loading:true});
            axios
            .get(`https://api.github.com/search/users?q=${keyword}`)
            .then(res=>this.setState({users:res.data.items,loading:false}));
    }
    clearUsers(){
        this.setState({users:[]});
    }
    render() {
        return (
            <Fragment>
                <Navbar />
                <Search 
                    searchUsers={this.searchUsers} 
                    clearUsers={this.clearUsers}
                    showClearButton={this.state.users.length>0?true:false}/>
                <Users users={this.state.users} loading={this.state.loading}/>
            </Fragment>
        )
    }
}

export default App
