import axios from 'axios';
import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{
                id:"",
                name:"",
                username:"",
                email:""
            } , 
            error:{
                id:"",
                name:"",
                username:"",
                email:""
            }
        }
    }
    handleChange = (e) => {
        let {name,value} = e.target;
        let error = "";
        switch(name){
            case "id":
                break;

            case "name":
                error =value.length === 0? "Name is mandatory":(value.length <3? "Name must have atleast 3 letters":"");
                break;

            case "username":
                break;

            case "email":
                break;
        }
        this.setState({
            error:{
                ...this.state.error,
                [name]:error
            }
        })
        this.setState({
            data:{
                ...this.state.data,
                [name]:value
            }
        });
    }
    validateForm = () =>{
        let valid = true;
        Object.values(this.state.error).forEach(val => val.length >0 && (valid =false))
        return valid;
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.validateForm() && this.state.data.name != "" && this.state.data.username !=""  && this.state.data.email !="" ){
            axios.post("http://jsonplaceholder.typicode.com/users/",this.state.data).then(response =>{
                console.log(response.data);
                alert("Succesfully added");
            });
        }
        else{
            alert("Form data is invalid");
        }
    }

    render() { 
        console.log(this.state.data);
        return (  
            <div style={{ width: '300px', margin: '10px', padding: '10px', border: '2px solid blue' }}>
                <form onSubmit = {this.handleSubmit}>
                    <div className='form-group' style={{ marginBottom: '20px' }}>
                        <label>Id</label>
                        <input type='text'
                               name='id'
                               className='form-control'
                               value = {this.state.data.id}
                               onChange ={this.handleChange} />
                    </div>
                    <div className='form-group' style={{ marginBottom: '20px' }}>
                        <label>Name</label>
                        <input type='text'
                               name='name'
                               className='form-control'
                               value = {this.state.data.name}
                               onChange ={this.handleChange} />
                               {
                                   this.state.error.name.length >0 && <div className = "alert alert-danger">{this.state.error.name}</div>
                               }
                    </div>
                    <div className='form-group' style={{ marginBottom: '20px' }}>
                        <label>User Name</label>
                        <input type='text'
                               name='username'
                               className='form-control'
                               value = {this.state.data.username}
                               onChange ={this.handleChange} />
                    </div>
                    <div className='form-group' style={{ marginBottom: '20px' }}>
                        <label>Email Id</label>
                        <input type='text'
                               name='email'
                               className='form-control'
                               value = {this.state.data.email}
                               onChange ={this.handleChange} />
                    </div>
                    <div>
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Form;