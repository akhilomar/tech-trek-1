import React, { Component } from 'react';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: ""
        }
    };
    questionAccess=()=>{
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
    componentDidMount(){
        this.questionAccess();
}
componentDidUpdate(){
    this.questionAccess();
}
    render() {
        return(
            <div>
               {this.state.question}
            </div>
        )
    }
}

export default Question;