//class,state,lifecycle
//stateless function component
//react 16.8 -> function component + hook => statefull function component

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//Class Component->Direkt olarak props parametresi ulaşılabilir
//state ve lifecycle fonksiyonları kullanmak için class component kullanmak gerekir.
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 class component
//             </div>
//         )
//     }
// }

//Function Component
// const App=(props)=>{
//     return(
//         <div>
//             function component
//         </div>
//     )
// }

function App(props) {
    return(
        <div>
            function component
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));

