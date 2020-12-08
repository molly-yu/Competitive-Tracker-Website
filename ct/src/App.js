import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import axios from 'axios';

import Login from "./components/login.component";
import Home from "./components/home.component";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// configure axios
axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.withCredentials = true;
axios.interceptors.response.use(
  (response) => {
      return response;
  },
  (error) => {
      if (error.response && error.response.status === 401) {
          window.location = '/login';
      }
      return Promise.reject(error);
  }
);

export default class App extends Component {
    render() {
        return (
            <div className="App">
              <Router>
                <Route path="/home" component={Home} exact/>
                <Route path="/login" component={Login} exact/>
              </Router>
            </div>
        );
    }
}
