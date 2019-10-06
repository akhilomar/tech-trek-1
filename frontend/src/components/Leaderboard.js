import React,{Component} from 'react';
import Header from './header-footer/header';
import Footer from './header-footer/footer';
import UserList from './UserList';

class Leaderboard extends Component{

    constructor(props){
        super(props);
        this.state={
          list: []    
        };
    };                  

    componentDidMount(){
      const localtoken=localStorage.getItem('logintoken')
        fetch('http://127.0.0.1:8000/questions/leaderboard/',{
          method:'get',
          headers: {'Authorization' : `Bearer ${localtoken}`},
          
      })
          .then(response => response.json())
          .then(jsonresponse => {
            if(jsonresponse){
              this.setState({
                list: jsonresponse
              })
              console.log(jsonresponse)
            }
          }
         
          )
          .then(err => console.log(err));
      }
    
    render(){
        return(
            <div className="leaderboard">
                <Header/>
                <UserList list={this.state.list} />
                <Footer/>
            </div>
        );
    }

}
export default Leaderboard;