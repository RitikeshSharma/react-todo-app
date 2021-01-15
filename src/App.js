import React from 'react';
import logo from './todo-image.jpg';
import './App.css';

class App extends React.Component{

  constructor (props){
    super(props);
    this.state = {
      list : [],
      newItem : ""
    }
  }

  addItem (todoValue){
    if (todoValue != ""){
      const newItem = {
      id : Date.now(),
      isDone : false,
      value: todoValue
      }

    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list:list,
      newItem:""
    });

    }
  }

  deleteItem (id){
    const list = [...this.state.list]
    const updatedList = list.filter(item => item.id !== id);

    this.setState({
      list:updatedList
    });
  }

  updateInput (input){
    this.setState({
      newItem:input
    })
  }



  render (){
    return (
      <div>
        <img src={logo} width="100px" height="100px" className="logo"/>
        <h1  className="title">ToDo App</h1>
        <div className="container-fluid">
                 Add items......
          <br />
          <input 
          type="text" 
          className="input-text" 
          placeholder="Write a task" 
          required
          value={this.state.newItem}
          onChange={e => this.updateInput(e.target.value)}
          />
          <button 
          className="btn btn-dark"
          onClick={() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
          >
          Add Todo</button>
          <div className="list">
            <ul>
            {this.state.list.map(item=>{
              return(
                <li key={item.id}>
                <input type="checkbox" name="" id=""/>
                {item.value}
                <button className="btn" 
                onClick={() => this.deleteItem(item.id)}
                >Delete</button>
              </li>
              )
            })}
              
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
