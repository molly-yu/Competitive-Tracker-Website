import React, { Component } from "react";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/login.component";
import Home from "./components/home.component";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
              <Login/>
              <Home/>
            </div>
        );
    }
}
