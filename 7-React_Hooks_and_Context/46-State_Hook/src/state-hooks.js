//class,state,lifecycle
//stateless function component
//react 16.8 -> function component + hook => statefull function component

// import React, { Component } from 'react'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//Class Component->Direkt olarak props parametresi ulaşılabilir
//state ve lifecycle fonksiyonları kullanmak için class component kullanmak gerekir.
// class App extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             count:0
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <p>Butona {this.state.count} kez tıkladınız.</p>
//                 <button onClick={()=>this.setState({count:this.state.count+1})}>+1</button>
//             </div>
//         )
//     }
// }

//Function Component
const App=(props)=>{
    const [count,setCount]=useState(0);
    return(
        <div>
            <p>Butona {count} kez tıkladınız.</p>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <button onClick={()=>setCount(count-1)}>-1</button>
            <button onClick={()=>setCount(props.count)}>reset</button>
        </div>
    )
}
App.defaultProps={
    count:5
}


ReactDOM.render(<App count={7}/>,document.getElementById('root'));

