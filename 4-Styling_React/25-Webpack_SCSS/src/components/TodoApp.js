import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Action from './Action';

export default class TodoApp extends React.Component{
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