import { Component } from "react";

class ReceiverChild extends Component {
    constructor(props){
        super(props);
        this.state = {
            datafromparent: props.datafromparent
        }
    }
  render() {
      console.log("RECEIVER");
    return (<div>
        
         <h4> The data from parent is:{this.state.datafromparent}</h4>
        </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
      if(prevProps.datafromparent !== this.props.datafromparent){
          this.setState({
              datafromparent:this.props.datafromparent
          })
      }
  }
}
export default ReceiverChild;
