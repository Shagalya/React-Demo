import {Component} from "react";

import SenderChild from "../Sender-Child/sender-child"
import ReceiverChild from "../Receiver-child/receiver-child"

class Parent extends Component{
    constructor(props){
        super(props);
        this.state ={
            message: "<no message yet>"
        }
    }
    getValue = (e) => {
        this.setState({
            message: e
        })
    }

    render(){
        console.log("PARENT");
        return(
            <div>
                <h3>Message from child : {this.state.message}</h3>
                {/* <SenderChild onSend={ this.getValue}></SenderChild> */}
                <SenderChild onIncrement={ this.getValue}></SenderChild>
                <ReceiverChild datafromparent = {this.state.message}></ReceiverChild>
            </div>
        );
    }
} 
export  default Parent;