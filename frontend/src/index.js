import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Leaderboard from './components/Leaderboard';
import Rules from './components/Rules';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<Router>
    <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/Rules" component={Rules}/>
        <Route exact path="/Dashboard" component={Dashboard}/>
        <Route exact path="/Leaderboard" component={Leaderboard}/>
    </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

