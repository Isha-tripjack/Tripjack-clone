import React, { Component } from 'react'

export default class DidUpdate extends Component {

    constructor(){
        super();
        console.log('Constructor called')
        this.state={
            count:0
        }
    }

    componentDidUpdate(prevProps,prevState){
        console.log('did updated', this.state.count);

        console.log(prevState.count,this.state.count)
        if((this.state.count,prevState.count)){
            alert('working')
            console.log('component didUpadte', prevState.count,this.state.count,prevProps)
        }
  

    if(this.state.count){
        this.setState({
         count:this.state.count+1
        })
    }
}
  render() {
    console.log('render called')
    return (
      <div>
        <h2>Component did update method</h2>
        <h2>You pressed the button {this.state.count} times</h2>
        <button onClick={()=>this.setState({count:this.state.count+1})}>update count</button>
    
      </div>
    )
  }
}

