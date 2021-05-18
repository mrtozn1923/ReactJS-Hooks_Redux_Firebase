// const Header=function(){
//    return <h1>Hello React</h1>
// }

// class Header extends React.Component{
//    render(){
//       return (<h1>Hello React</h1>);
//    }
// }

// const template=<Header/>

// ReactDOM.render(template,document.getElementById('root'));

//------------------------

// class Header extends React.Component{
//    render(){
//       return (
//          <div>
//             <h1>Todo Application</h1>
//             <div>Lorem, ipsum dolor.</div>
//          </div>
//       );
//    }
// }

// class Todo extends React.Component{
//    render(){
//       return(
//          <ul>
//             <li>Item 1</li>
//             <li>Item 2</li>
//             <li>Item 3</li>
//          </ul>
//       );
//    }
// }

// class Action extends React.Component{
//    render(){
//       return(
//          <div>
//             <p>
//                <button>Clear Items</button>
//             </p>
//             <form>
//                <input type="text" name="txtItem"/>
//                <button type="submit">Add Item</button>
//             </form>
//          </div>
//       );
//    }
// }

// const template=(
//    <div>
//       <Header />
//       <Todo />
//       <Action />
//    </div>
// );

// ReactDOM.render(template,document.getElementById('root'));

//-----------------

class TodoApp extends React.Component{
   render(){
      return(
         <div>
            <Header />
            <TodoList />
            <Action />
         </div>
      );
   }
}

class Header extends React.Component{
   render(){
      return (
         <div>
            <h1>Todo Application</h1>
            <div>Lorem, ipsum dolor.</div>
         </div>
      );
   }
}

class TodoList extends React.Component{
   render(){
      return(
         <ul>
            <TodoItem />
            <TodoItem />
            <TodoItem />
         </ul>
      );
   }
}

class TodoItem extends React.Component{
   render(){
      return(
         <li>Todo Item</li>
      );
   }
}

class Action extends React.Component{
   render(){
      return(
         <div>
            <p>
               <button>Clear Items</button>
            </p>
            <form>
               <input type="text" name="txtItem"/>
               <button type="submit">Add Item</button>
            </form>
         </div>
      );
   }
}
ReactDOM.render(<TodoApp/>,document.getElementById('root'));

