import React from 'react'

class Unmount extends React.Component{
    componentDidMount(){
        this.intervalId=setInterval(()=>{
            console.log("Interval Hits");
            
        },1000)
    };

    componentWillUnmount(){
        clearInterval(this.intervalId);
        console.log("Interval Removed");
        
    };

    render(){
        return <h2>Child component will Unmount</h2>
    }
};

export default Unmount;