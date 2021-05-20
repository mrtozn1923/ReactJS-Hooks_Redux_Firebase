import React, { Component,Fragment } from 'react'
import Navbar from './Navbar'
import Users from './Users'

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Users />
            </Fragment>
        )
    }
}

export default App
