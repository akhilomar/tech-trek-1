import React,{Component} from 'react';
import './App.css';

class Avatar extends Component{
    constructor(props){
        super(props);
        this.state={
            avatarOpen: false,
        };
    }

    render(){
        return(
            <div className="inner-container">
                <div className="avatar-grid">
                    <img className="avatar-image" src="https://www.behance.net/gallery/19223431/Avatars-Set" alt="avatar01"/>
                </div>
                <button type="button" className="login-btn">Pay</button>
            </div>


        );
    }
}


export default Avatar;