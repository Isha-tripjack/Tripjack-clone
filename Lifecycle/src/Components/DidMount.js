import React, { Component } from 'react'

export default class DidMount extends Component {


  constructor(){
    super();
    console.log('Constructor called')
  };

  componentDidMount(){
    console.log("Component Did Mount")
  }
  render() {
    console.log('render called')
    return (
      <div>
        
      </div>
    )
  }
}

