import React,{Component} from 'react';
import Header from './header-footer/header';
import Footer from './header-footer/footer';
import '../App.css';

class Leaderboard extends Component{

    constructor(props){
        super(props);
        this.state={

        };
    };
    
    render(){
        return(
            <div>
                <Header/>
                hello world
                <Footer/>
            </div>
        );
    }

}

export default Leaderboard;