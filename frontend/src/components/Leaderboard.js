import React, { Component } from "react";
import Header from "./header-footer/header";
import Footer from "./header-footer/footer";
import UserList from "./UserList";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/questions/leaderboard/", {
      method: "get"
    })
      .then(response => response.json())
      .then(jsonresponse => {
        console.log(jsonresponse);
        if (jsonresponse) {
          this.setState({
            list: jsonresponse
          });
        }
      })
      .then(err => console.log(err));
  }

  render() {
    return (
      <div className="leaderboard">
        <Header />
        <UserList list={this.state.list} />
        <Footer />
      </div>
    );
  }
}
export default Leaderboard;
