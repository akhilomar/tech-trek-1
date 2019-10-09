import React, { Component } from 'react';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: ""
        }
    };

 
componentDidMount(){
    console.log('update')
    const localtoken=localStorage.getItem('logintoken')
        const res= fetch('http://127.0.0.1:8000/questions/',{
            method:'get',
            headers: {'Authorization' : `Bearer ${localtoken}`},
            
        }).then((response)=>response.json())
        .then((responseJson)=>{
           const ques= responseJson.question;
           this.setState({
               question: ques
           })
        }).catch((error)=>{console.log(error)})
}
    render() {
        return(
            <div className="question">
               {this.state.question}
            </div>
        )
    }
}

export default Question;