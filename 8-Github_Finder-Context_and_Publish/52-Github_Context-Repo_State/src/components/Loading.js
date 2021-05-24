import React, { Component } from 'react'
import loading from '../assets/loading.gif'

export class Loading extends Component {
    render() {
        return (
            <React.Fragment>
                <img src={`/${loading}`} alt="Loading" style={{width:'100px',display:'block',margin:'auto'}}/>
            </React.Fragment>
        )
    }
}
export default Loading