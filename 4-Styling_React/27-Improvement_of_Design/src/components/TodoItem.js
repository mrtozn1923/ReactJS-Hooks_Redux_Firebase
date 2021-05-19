import React from 'react';

function TodoItem(props){
    return(
       <li className="list-group-item">
          {props.item}
          <button className="btn btn-danger btn-sm float-right" onClick={()=>props.deleteItem(props.item)}>X</button>
       </li>
    );
 }

 export default TodoItem;