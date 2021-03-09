import {PureComponent} from "react";

class SenderChild extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            count:0

        }
    }
    sendIncrement = () =>{
        this.setState({
            count: this.state.count + 0
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count)
        this.props.onIncrement(this.state.count);
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.num !== nextState.num
    // }

    render(){
        console.log("SENDER");
        return(
            <div>
                {/* <button onClick = { ()=> this.props.onSend("This mesage from child to parent")}>Send To parent</button> */}
                <button onClick = { this.sendIncrement}>Send To parent</button>
            </div>
        );
    }

}

export default SenderChild;