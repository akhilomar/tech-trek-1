import React, {Component} from 'react';
import './App.css';
import Register from './components/EntryPage/Register'
import Login from './components/EntryPage/Login';
import Avatar from './components/EntryPage/avatar';

class App extends Component{

  constructor(props){
    super(props)
    this.state={
      isLoginOpen: true,
      isRegisterOpen: false,
      isAvatarOpen: false,
    }
    this.showAvatar=this.showAvatar.bind(this);
  }

  showlogin = () => {
    this.setState({
      isLoginOpen: true,
      isRegisterOpen: false,
      isAvatarOpen: false
    });
  }

  showRegister = () => {
    this.setState({
      isLoginOpen: false,
      isRegisterOpen: true,
      isAvatarOpen: false
    });
  }

  showAvatar() {
    this.setState({
      isLoginOpen:false,
      isRegisterOpen:false,
      isAvatarOpen: true
    });
  }
  
render(){
  if(this.props.isavataropen===true)
  {
    this.showAvatar();
  }
  return(
    <React.Fragment>
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
              {this.state.isRegisterOpen && <Register func={this.showAvatar}/>}
              {this.state.isAvatarOpen && <Avatar/>}
              
            </div>
          </div>
        </div>
        
    </React.Fragment>
  )
}
}

export default App;