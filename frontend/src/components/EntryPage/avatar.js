import React,{Component} from 'react';
import '../../App.css';

class Avatar extends Component{
    constructor(props){
        super(props);
        this.state={
            avatarOpen: false
        };
    }

    render(){
        return(
            <div className="inner-container">
                <div className="avatar-grid">
                    <img className="avatar-image" src="https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157" alt="avatar01"/>
                    <img className="avatar-image" src="https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157" alt="avatar01"/>
                    <img className="avatar-image" src="https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157" alt="avatar01"/>
                    <img className="avatar-image" src="https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157" alt="avatar01"/>
                    <img className="avatar-image" src="https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157" alt="avatar01"/>
                    <img className="avatar-image" src="https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157" alt="avatar01"/>
                </div>
                <button type="button" className="login-btn">Pay</button>
            </div>


        );
    }
}


export default Avatar;