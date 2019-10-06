import React,{Component} from 'react';
import { browserHistory } from 'react-router';
import {PrivateRoute} from '../PrivateRoute';
import Rules from '../Rules';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { BrowserRouter, Route ,Link} from 'react-router-dom';
import {NavLink,NavItem} from 'reactstrap';
import { Redirect } from 'react-router-dom'
import '../../App.css';
import PropTypes from 'prop-types'
import { setInterval } from 'timers';



class Login extends Component{
constructor(props){
    super(props);
    this.state={
        username: "",
        password: "",
        errors: []
    };
}

componentDidMount(){
    this.gettoken();
    this.interval=setInterval(()=>{this.gettoken();},180000);
}
componentWillMount(){
    clearInterval(this.interval);
}
gettoken=()=>{ 
    fetch('http://127.0.0.1:8000/accounts/api/token/',{
   method:'post',
   headers: {'Content-Type' : 'application/json'},
   body: JSON.stringify({
       username: this.state.username,
       password: this.state.password 
   }),

}).then((response)=>response.json())
.then((responseJson)=>{
       const token=responseJson.access
       localStorage.setItem('logintoken',token);
}).catch((error)=>{console.log(error)})
}

componentDidUpdate(){
  
     this.gettoken();
}

validation=(elm,msg)=>{
this.setState((prevState)=>({errors:[...prevState.errors,{elm,msg}]}));
}
clearValidation=(elm)=>{
    this.setState((prevState)=>{
        let newArr=[]
        for(let err of prevState.errors)
        {
            if(err.elm!==elm)
            {
                newArr.push(err)
            }
        }
        return {errors: newArr}
    });
}
onUsernameChange=(e)=>{
    this.setState({username: e.target.value});
    this.clearValidation("username");
}
onPasswordChange=(e)=>{
    this.setState({password: e.target.value});
    this.clearValidation("password");
}


  

handleloginJwt=()=>{
    const res= fetch('http://127.0.0.1:8000/accounts/api/token/',{
        method:'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password 
        }),

    }).then((response)=>response.json())
    .then((responseJson)=>{
            const token=responseJson.access
            localStorage.setItem('logintoken',token);
    }).catch((error)=>{console.log(error)})
}


render(){
    let usernameErr=null, passwordErr=null;
    for(let err of this.state.errors){
        if(err.elm==="username"){
            usernameErr=err.msg;
        }if(err.elm==="password"){
            passwordErr=err.msg;
        }
    }
    return(
    
    <div className="inner-container">
        <div className="header">
            Login
        </div>
        <div className="box">
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" className="login-input" placeholder="Username"
                onChange={this.onUsernameChange}
                />
                 <small className="danger-error">{usernameErr?usernameErr:""}</small>
            </div>

            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="login-input" placeholder="Password"
                onChange={this.onPasswordChange}
                />
                 <small className="danger-error">{passwordErr?passwordErr:""}</small>
            </div>
          
          <NavLink>
            
            <Link to='/Rules' >
            <button 
                type="button"
                className="login-btn"         
               >Login</button>
            </Link>
            </NavLink>
          
               
            </div>
        </div>
     
    );
        }
    }

export default Login;