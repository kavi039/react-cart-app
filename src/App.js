import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './itemList';
import InputItem from './saveCart';
import Total from './total';

class App extends Component {
  constructor(props){
      super(props);
      this.state={items:[{name:'Mango',qty:2,price:15}]};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro" style={{margin:'0px auto',width:'50%'}}>
            <h2>My Cart</h2>
            <div style={{padding:'1%'}}>
            <InputItem insertItem={this.insertItem}/>
            </div>
            <div>
            <ItemList items={this.state.items} removeItem={this.removeItem} increaseItemQty={this.increaseItemQty}
                      decreaseItemQty={this.decreaseItemQty}/>
            </div>
            <div>
                <Total total={this.getTotal()}/>
            </div>
        </div>
      </div>
    );
  }

  insertItem=(event)=>{
      if(event.keyCode===13) {
          var input = event.target.value;
          if(input!=='');
          {
              let arr=input.split('-');
              let item={name:arr[0],qty:Number(arr[1]),price:Number(arr[2])};
              this.state.items.push(item);
              this.setState({items:this.state.items});
          }
      }
  };

  getTotal=()=>{
      let sum=0;
      this.state.items.map((obj)=>{
      sum+=App.getTotalCostOfItem(obj);
      });
      return sum;
  };

  static getTotalCostOfItem(obj){
      return obj.qty*obj.price;
  }

  removeItem=(index)=>{
      this.state.items.splice(index,1);
      this.setState({items:this.state.items});
  }

  increaseItemQty=(index)=>{
      let item=this.state.items[index];
      console.log(Number(item.qty)+1);
      item.qty+=1;
      this.setState({items:this.state.items});
  }
    decreaseItemQty=(index)=>{
        let item=this.state.items[index];
        if(item.qty>1) {
            item.qty -= 1;
            this.setState({items: this.state.items});
        }
    }

}

export default App;
