import React, { Component } from "react";
import Header from "./header-footer/header";
import Footer from "./header-footer/footer";
import Question from "./Question";
import Achievements from "./Achievements";
import Timer from "./timer";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      errorMsg: [
        "Oops!! Try Again",
        "You are almost there",
        "Better Luck Next Time",
        "Wrong!!",
        "Try! Try! Try!",
        "Far from Bingo"
      ],
      successMsg: [
        "Bingo",
        "Congratulations",
        "Correct",
        "Target Accomplish",
        "One step ahead",
        "Level up",
        "Hurray!!!",
        "Yay"
      ],
      selectedError: "",
      selectedSuccess: "",
      currQ: "",
      score: "",
      question: "",
      isTimeLeft: false,
      remainingTime: 0
    };
  }

  componentDidMount() {
    const localtoken = localStorage.getItem("logintoken");

    fetch("http://127.0.0.1:8000/questions/", {
      method: "get",
      headers: { Authorization: `Bearer ${localtoken}` }
    })
      .then(response => response.json())
      .then(responseJson => {
        const ques =
          responseJson && responseJson.detail && responseJson.detail.question;

        if (responseJson.isTimeLeft === true) {
          this.setState({
            isTimeLeft: true,
            remainingTime: responseJson.detail.time_left
          });
        } else {
          this.setState({
            question: ques
          });
        }
      })
      .catch(error => {
        console.log(error);
      });

    fetch("http://127.0.0.1:8000/accounts/api/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localtoken}`
      }
    })
      .then(res => res.json())
      .then(response => {
        this.setState({
          currQ: response.current_question,
          score: response.score
        });
      });
  }

  onAnswerChange = e => {
    this.setState({ answer: e.target.value });
  };

  answerSubmit = e => {
    e.preventDefault();
    const localtoken = localStorage.getItem("logintoken");

    fetch("http://127.0.0.1:8000/questions/", {
      method: "post",
      headers: {
        Authorization: `Bearer ${localtoken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        answer: this.state.answer
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success === false && this.state.answer.length > 0) {
          this.setState({
            selectedSuccess: ""
          });
          this.getRandomErr();
        } else {
          fetch("http://127.0.0.1:8000/questions/", {
            method: "get",
            headers: { Authorization: `Bearer ${localtoken}` }
          })
            .then(response => response.json())
            .then(responseJson => {
              const ques =
                responseJson &&
                responseJson.detail &&
                responseJson.detail.question;
              if (responseJson.isTimeLeft === true) {
                this.setState({
                  isTimeLeft: true,
                  remainingTime: responseJson.detail.time_left
                });
              } else {
                this.setState({
                  question: ques
                });
              }
            })
            .catch(error => {
              console.log(error);
            });

          fetch("http://127.0.0.1:8000/accounts/api/", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localtoken}`
            }
          })
            .then(res => res.json())
            .then(response => {
              this.setState({
                currQ: response.current_question,
                score: response.score
              });
            });

          this.setState({
            selectedError: ""
          });
          this.getRandomSuccess();
        }
      })
      .catch(error => {
        console.log(error);
      });

    this.refs.answer.value = "";
  };

  displayQuestion = () => {
    const localtoken = localStorage.getItem("logintoken");

    fetch("http://127.0.0.1:8000/questions/", {
      method: "get",
      headers: { Authorization: `Bearer ${localtoken}` }
    })
      .then(response => response.json())
      .then(responseJson => {
        const ques =
          responseJson && responseJson.detail && responseJson.detail.question;
        if (responseJson.isTimeLeft === true) {
          this.setState({
            isTimeLeft: true,
            remainingTime: responseJson.detail.time_left
          });
        } else {
          this.setState({
            isTimeLeft: false,
            question: ques
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  getRandomSuccess = () => {
    var item = this.state.successMsg[
      Math.floor(Math.random() * this.state.successMsg.length)
    ];
    this.setState({
      selectedSuccess: item
    });
  };
  getRandomErr = () => {
    var item = this.state.errorMsg[
      Math.floor(Math.random() * this.state.errorMsg.length)
    ];
    this.setState({
      selectedError: item
    });
  };

  render() {
    return (
      <div className="dashboard">
        <Header />

        <div className="dashboard-content">
          <div className="question-container">
            <div style={{ margin: "auto" }}>
              <div className="input-group d-inline">
                {" "}
                {this.state.isTimeLeft ? (
                  <Timer
                    displayQuestion={this.displayQuestion}
                    time={Math.ceil(this.state.remainingTime)}
                  />
                ) : (
                  <>
                    <h1 className="font-weight-bold">QUESTION</h1>
                    <h4 className="text-left">Tier:</h4>
                    <Question ques={this.state.question} />
                    <form onSubmit={this.answerSubmit}>
                      <input
                        className="answer-block"
                        type="text"
                        placeholder="I seek an Answer...."
                        ref="answer"
                        onChange={this.onAnswerChange}
                        required
                      />

                      <button className="login-btn answer-button">CHECK</button>
                    </form>
                  </>
                )}
              </div>

              <div style={{ color: "red" }}>{this.state.selectedError}</div>
              <div style={{ color: "green" }}>{this.state.selectedSuccess}</div>
              <br />
            </div>
          </div>

          <div>
            <h2 className="text-center text-primary font-weight-bolder">0</h2>
            <h3 className="text-center font-weight-bold">
              Level : {this.state.currQ} &nbsp; Score: {this.state.score}
            </h3>
            <hr className="styled-hr" />
            <h3 className="text-center font-weight-bold">Achievements</h3>
            <Achievements />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Dashboard;
