import React,{Component} from 'react';
import Header from './header-footer/header';
import Footer from './header-footer/footer';
import Question from './Question';
import {random} from 'lodash';
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            answer:"",
            errorMsg: ["Oops!! Try Again","You are almost there","Better Luck Next Time","Wrong!!","Try! Try! Try!","Far from Bingo"],
            selectedError: ''
        };
    };
    onAnswerChange=(e)=>{
        this.setState({answer: e.target.value});
    }
    gettoken=()=>{ 
        const localtoken=localStorage.getItem('logintoken')
        fetch('http://127.0.0.1:8000/questions/',{
       method:'post',
       headers: {'Authorization' : `Bearer ${localtoken}`,'Content-Type' : 'application/json'},
       body: JSON.stringify({
           answer: this.state.answer
       }),
    
    }).then((response)=>response.json())
    .then((responseJson)=>{
        if(responseJson.success===false)
        {
           this.getRandomErr();
        }
        
    }).catch((error)=>{console.log(error)})
    }
    getRandomErr(){
        var item = this.state.errorMsg[Math.floor(Math.random()*this.state.errorMsg.length)];
        this.setState({
            selectedError: item,
        })
      }
    render(){
        return(
            <div className="dashboard">
                <Header />
                <div>
                    <h1 style={{display: "flex",justifyContent:"center"}}>QUESTION</h1>
                    <div className="input-group">  
                        <Question />
                        <input type="text" 
                            className="login-input"
                            placeholder="Your Answer"
                            onChange={this.onAnswerChange}/>
                    </div>
                    <div>
                        {this.state.selectedError}
                    </div>
                    <button className="login-btn" onClick={this.gettoken}>CHECK</button>
                </div>
                <Footer />
            </div> 
        );
    }
}
export default Dashboard; 