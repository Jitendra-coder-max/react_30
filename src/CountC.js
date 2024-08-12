import React, {Component}from 'react'



class CountC extends  React.Component{

    constructor(){
super()
       this.state={

        count : 0
       };
    //    this.increment = this.increment.bind(this);
    }
 

     increment=()=>{

        this.setState({ count: this.state.count + 1})
    }

    // increment = () => {
    //     this.setState(prevState => ({
    //       count: prevState.count + 1
    //     }));
    //   };



    // increment(){
    //     this.setState(prevState =>({
    //         count: prevState.count+1
    //     }))
    // }
    

render(){




    return(
        <div>
            Hello

            <p>{this.state.count}</p>
            <button onClick={ this.increment}>Click</button>
        </div>
    )

}


}


export default CountC