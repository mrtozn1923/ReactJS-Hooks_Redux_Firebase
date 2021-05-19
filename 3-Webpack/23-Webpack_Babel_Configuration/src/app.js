import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component{
   constructor(props){
      super(props);
      this.clearItems=this.clearItems.bind(this);
      this.addItem=this.addItem.bind(this);
      this.deleteItem=this.deleteItem.bind(this);
      this.state={
         items:[]
      }
   }
   componentDidMount(){
      console.log('Bileşen oluşturuldu.');
      const json=localStorage.getItem('items');
      const items=JSON.parse(json);
      if(items){
         this.setState({
            items:items
         })
      }
   }
   componentDidUpdate(prevProps,prevState){
      console.log('Bileşen güncellendi.');
      if(prevState.items.length!==this.state.items.length){
         const json=JSON.stringify(this.state.items);
         localStorage.setItem('items',json);
      }
   }
   componentWillUnmount(){
      console.log('Bileşen silindi.');
   }
   clearItems(){
      this.setState({
         items:[]
      });
   }
   deleteItem(item){
      this.setState((prevState)=>{
         const arr=prevState.items.filter((i)=>{
            return item!=i
         })
         return{
            items:arr
         }
      })
   }
   addItem(item){
      if(!item){
         return "Eklemek istediğiniz elemanı girin";
      }else if(this.state.items.indexOf(item)>-1){
         return "Aynı elemanı ekleyemezsiniz.";
      }
      this.setState((prevState)=>{
         return {items:prevState.items.concat(item)}
      })
   }
   render(){
      const app={
         title:"Todo Application",
         description:"Lorem, ipsum dolor."
      };
      return(
         <div>
            <Header title={app.title} description={app.description}/>
            <TodoList items={this.state.items} deleteItem={this.deleteItem} clearItems={this.clearItems}/>
            <Action addItem={this.addItem}/>
         </div>
      );
   }
}

function Header(props){
      return (
         <div>
            <h1>{props.title}</h1>
            <div>{props.description}</div>
         </div>
      );
}

function TodoList(props){
   return(
      <div>
         <ul>
         {
            props.items.map((item,index)=>
                  <TodoItem deleteItem={props.deleteItem} key={index} item={item}/>
            )
         }
         </ul>
         <p>
            <button onClick={props.clearItems}>Clear Items</button>
         </p>
      </div>
   );
}

function TodoItem(props){
   return(
      <li>
         {props.item}
         <button onClick={()=>props.deleteItem(props.item)}>X</button>
      </li>
   );
}

class Action extends React.Component{
   constructor(props){
      super(props);
      this.onFormSubmit=this.onFormSubmit.bind(this);
      this.state={
         error:''
      }
   }
   onFormSubmit(e){
      e.preventDefault();
      const item=e.target.elements.txtItem.value.trim();
      const error=this.props.addItem(item);
      this.setState({
         error:error
      })
      e.target.elements.txtItem.value="";
   }
   render(){
      return(
         <div>       
            <form onSubmit={this.onFormSubmit}>
               <input type="text" name="txtItem"/>
               <button type="submit">Add Item</button>
            </form>
            {this.state.error&&<p>{this.state.error}</p>}
         </div>
      );
   }
}
ReactDOM.render(<TodoApp/>,document.getElementById('root'));

