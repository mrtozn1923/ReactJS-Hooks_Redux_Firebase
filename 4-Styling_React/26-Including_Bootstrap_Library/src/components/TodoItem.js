import React from 'react';

function TodoItem(props){
    return(
       <li>
          {props.item}
          <button onClick={()=>props.deleteItem(props.item)}>X</button>
       </li>
    );
 }

 export default TodoItem;