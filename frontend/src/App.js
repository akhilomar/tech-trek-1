import React, {Component} from 'react';
import './components/App.css';
import Register from './components/Register';
import Login from './components/Login';
import Avatar from './components/avatar';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      isLoginOpen: true,
      isRegisterOpen: false,
      isAvatarOpen: false,
    }

  }
  showlogin=()=>{
    this.setState({
      isLoginOpen: true,
      isRegisterOpen: false
    });
  }
  showRegister=()=>{
    this.setState({
      isLoginOpen: false,
      isRegisterOpen: true
    });
  }
  showAvatar=()=>{
    this.setState({
      isLoginOpen:false,
      isRegisterOpen:false,
      isAvatarOpen: true
    });
  }
render(){
  return(
   <div className="centering">
   <div className="root-container">
     <div className="box-controller">
       <div className={"controller " + (this.state.isLoginOpen? "selected-controller":"")} onClick={this.showlogin}>
         Login
       </div>
       <div className={"controller " + (this.state.isRegisterOpen? "selected-controller":"")} onClick={this.showRegister}>
         Register
       </div>
      </div>
    <div className="box-container">
      {this.state.isLoginOpen && <Login/>}
      {this.state.isRegisterOpen && <Register/>}
      {this.state.isAvatarOpen && <Avatar/>}
    </div>
    </div>
    </div>
  )
}
}

export default App;