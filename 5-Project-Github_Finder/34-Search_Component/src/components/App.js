import React, { Component,Fragment } from 'react'
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search'
import axios from 'axios'

export class App extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:false,
            users:[]
        }
    }
    componentDidMount(){
        this.setState({loading:true});
            axios
            .get('https://api.github.com/users')
            .then(res=>this.setState({users:res.data,loading:false}));
    }
    render() {
        return (
            <Fragment>
                <Navbar />
                <Search />
                <Users users={this.state.users} loading={this.state.loading}/>
            </Fragment>
        )
    }
}

export default App
