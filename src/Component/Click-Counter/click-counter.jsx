import {Component} from "react";

class ClickCounter extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    incrementCounter = () => {
       this.setState({
           count: this.state.count + 1
       })
        console.log(this.state.count);
    }

    render = () =>{
        return(
            <div>
                <button onClick = {this.incrementCounter}>Click me To Increment</button>
            </div>
        );
    }
}
export default ClickCounter;