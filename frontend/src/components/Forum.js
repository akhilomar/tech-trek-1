import React,{Component} from 'react';
import Header from './header-footer/header';
import Footer from './header-footer/footer';

class Forum extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    };

    render(){
        return(
            <div>
                <header>
                    <Header />
                </header>
                <h1>QUESTION</h1>
                
                <footer>
                    <Footer />
                </footer>    
            </div> 
        );
    }
}
export default Forum; 