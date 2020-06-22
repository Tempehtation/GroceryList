import React, { Component } from "react";

createTasks(item) {
return <li key={item.key}>{item.text}<</li>
}

render() {
  var groceryEntries = this.props.entries;
  var listItems = groceryEntries.map(this.createTasks);

  return (
    <ul className="theList">
      {listItems}
    </ul>
  );
}
};