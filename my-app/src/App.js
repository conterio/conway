import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board/>
      </div>
    );
  }
}

class Board extends Component{
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      nodes: this.buildNodes()
    }
  }

  buildNodes() {
    var nodes = [];
    var index = 0;
    for(var i = 0; i < 30; ++i) {
      for(var j = 0; j < 30; ++j) {        
        nodes.push(<Node 
          index={index}
          xcord={i} 
          ycord={j} 
          state={" "} 
          onClick={(index,x,y,state) => this.handleClick(index,x,y,state)}
          key={`${i}/${j}`}          
          />);
          ++index;
      }
    }
    return nodes;
  }

  handleClick(index,x,y,state) {
    let items = [...this.state.nodes];
    items[index] = (<Node 
    index={index}
    xcord={x} 
    ycord={y} 
    state={(state == "X" ? " ": "X")} 
    onClick={(index,x,y,state) => this.handleClick(index,x,y,state)}
    key={`${x}/${y}`}          
    />);

    this.setState({nodes:items});
    this.runYear();    
  }

  runYear(){
    this.state.nodes.forEach(element => {
      
    });
  }

  render(){
    return(
      <div className="container">
        {this.state.nodes}
      </div>
    );
  }
}




class Node extends Component{

  render(){
    var button = (<button className="btn" onClick={() => this.props.onClick(this.props.index,this.props.xcord, this.props.ycord, this.props.state)}>{this.props.state}</button>);
    

    return(
      <span >
        {button}
      </span>
    )
  }
}

export default App;
