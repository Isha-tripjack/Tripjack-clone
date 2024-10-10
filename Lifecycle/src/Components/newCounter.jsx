import {Component} from "react";

class NewCounter extends Component{
    constructor(){
        super()
        this.state ={
            count:0,
        }
        // const division = document.createElement('div');
        // division.style.backgroundColor = 'yellow'
        // division.style.height = '300px'
        // division.style.width = '300px'
        // document.body.appendChild(division)

        
    }
    componentDidMount(){
        console.log('component did mount')
    }
    render(){
//        // console.log(this) //render ke andr this ka access rahenga
//        const { name } = this.props // this ke andr props naam ki property hai iske andr name ko access kr sakte h. //destructure
//       return <h1>{name} hey</h1>
// }
        console.log('render called ....')
 return <>
{/* <div>
<button onClick={()=>{this.setState({count:this.state.count -1})}}>-</button>
<h2>{this.state.count}</h2>
<button onClick={()=>{this.setState({count:this.state.count +1})}}>+</button>
</div> */}



</>

}

}
export default NewCounter
