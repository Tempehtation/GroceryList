import React, { Component } from "react";
import GroceryItems from "./GroceryItems";
constructor(props) {
  super(props);
  this.addItem = this.addItem.bind(this);
}
addItem(e) {
    if (this._inputElement.value !=="") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
    
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      
      this.inputElement.value = "";
    }
    console.log(this.state.items);
    
    e.preventDefault();
}

this.state = {
  items:[]
};


class GroceryList extends Component {
  render() {
    return (
      <div className="GroceryListMain">
        <div className="header">
          </div GroceryItems entries=(this.state.items}<div>
          <form onSubmit={this,addItem}>
            <input ref={(a) => this._inputElement = a} 
              placeholder="Item Name"></input>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
    }
  }

  export default GroceryList
