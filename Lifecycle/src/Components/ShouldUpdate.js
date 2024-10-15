import React, { Component } from 'react'

export default class ShouldUpdate extends Component {

    constructor(){
        super();
        this.state={
            count:0
        }
    }

    shouldComponentUpdate(){
        console.log(this.state.count);

        if(this.state.count <5){
            return true
        }

        return false
        
    }






  render() {
    return (
      <div>
       <h2>Should Component Update</h2>
       <h2>Count: {this.state.count}</h2>
       <button onClick={()=>this.setState({
        count:this.state.count+1
       })}>
        update
        </button>
      </div>
    )
  }
}
