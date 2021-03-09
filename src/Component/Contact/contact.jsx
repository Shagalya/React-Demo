import { Component } from "react";
import  "./contact.css"
import classNames from 'classnames';

// //Function Component
// const Contact = (props) => {
//     let name = "Shagalya";
//     let mobile = "89898989";
//     let email = "sha@capgemini.com";
//     let styleobj = {
//         textDecoration : "underline"
//     }
//     let title = props.gender ==="M"?"Mr":"Mrs";
//     let classes = props.gender === "M"?"contactCard male":"contactCard female";
//         return ( 
//         <div className = {classes}>
//             <div>
//             <h2 style = {styleobj}>{title} .{props.name} </h2>
//             <hr/>
//             {
//                 props.mobile && <h3>Mobile : {props.mobile} </h3>
//             }
            
//             <h3>Email Id :{props.email? props.email: <span>No mail provided</span> } </h3>
//             {/* props.email?<h3>Email Id :{props.email}</h3>:<h3>No Email provided</h3> */}
//             </div>
//             <input type = "checkbox" checked = {props.contacted}/>Contacted
//         </div>
//      );
// }

//Class Component
 
class Contact extends Component{
  constructor(props){
      super(props);
      this.styleobj = {
        textDecoration : "underline"
      }
      this.title = props.gender ==="M"?"Mr":"Mrs";
      this.classes = props.gender === "M"?"contactCard male":"contactCard female";
      //this.style = this.state.contacted === true ?"contactedCard":"";
       this.state = {
      contacted: props.contacted
    }
  }
  
  contactedChage = () => {
      this.setState({
          contacted: !this.state.contacted
      });
   }
    
   render(){
     console.log(this.state.contacted);
     this.style = this.state.contacted === true ?"contactedCard":"";
      return ( 
      <div className = {classNames(this.classes, this.style)}>
          <div>
          <h4 style = {this.styleobj}>{this.title}.{this.props.name} </h4>
          <hr/>
          {
              this.props.mobile && <h3>Mobile: {this.props.mobile} </h3>
          }
          
          <h4>Email Id: {this.props.email? this.props.email: <span>No mail provided</span> } </h4>
          {/* props.email?<h3>Email Id: {props.email}</h3>:<h3>No Email provided</h3> */}
          </div>
          <input type = "checkbox" checked = {this.state.contacted} onChange={this.contactedChage}/>Contacted
      </div>
   );
}
}
 export default Contact;