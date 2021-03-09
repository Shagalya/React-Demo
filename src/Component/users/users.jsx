import React,{Component} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading:true
          }
    }
   
    loadUsers = () =>{
        axios.get("http://jsonplaceholder.typicode.com/users").then(response =>{
            this.setState({
                loading : false,
                users: response.data
            })
        })
    }
    componentDidMount(){
        this.loadUsers();
    }

    render() { 
        return ( 
            <div>
                <ol>
                    {
                        this.state.loading ? <p>Loading...</p> :this.state.users.map(user => <li key={user.id}><Link to ={'/users/' + user.id}>{user.name}</Link></li>)
                    }
                </ol>
            </div>
         );
    }
}
 
export default Users;