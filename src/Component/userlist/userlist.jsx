import React,{Component} from "react"
import axios from "axios"
class Userlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            loading:true
          }
    }
    loadUsers = () =>{
        let id = this.props.match.params.id;
        axios.get("http://jsonplaceholder.typicode.com/users/" +id).then(response =>{
            this.setState({
                loading:false,
                user: response.data
                
            })
        })
    }
    componentDidMount(){
        this.loadUsers();
    }

    render() { 
        return ( 
            <div>
            {
                this.state.loading? <h4>Loading...</h4>:
                <div>
                <ul>
                         <li>{this.state.user.name} </li>
                         <li>{this.state.user.username}</li>
                         <li>{this.state.user.address && this.state.user.address.street}</li>
                </ul>
            </div>
            }
            </div>
            
         );
    }
}
 
export default Userlist;