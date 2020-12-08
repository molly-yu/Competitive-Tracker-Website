import React, { Component } from 'react';
import { Form, FormControl,  Row, Col, Button, Table } from 'react-bootstrap';
import '../css/login.css'
import logo from '../assets/cibclogo.png';
import penguin from '../assets/cibcpenguin.png';

import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value }); // set the state of the particular component
    }

    onSubmit(e) {
        e.preventDefault();
        var formData = new FormData();
        if (!this.handleValidation()){ // checks if everything is filled out
            alert("The form is incomplete.", "Error");
        }
        else {
            formData.append('username', this.state.username);
            formData.append('password', this.state.password);

            // post request to server
            axios({
                method:'post',
                url:'/login',
                data: formData
            })
            .then(function(response){
                console.log(response);
                console.log(formData);
            })
            .catch(function(response){
                console.log(response);
            })


        }

        


    }

    handleValidation(){
        let user = this.state.username;
        let pass = this.state.password;
        let isValid = true;

        if (user=='' || pass==''){
            isValid = false;
        }
        return isValid;
    }

    render() {
        return (
            <div className="Login" id="login">
                <Row>
                    <img src={logo} className="logo" alt="Logo" />
                    <h1>Competitive Tracker</h1>
                </Row>
                <div className="mm-container"/>
                <div className="content">
                <Row>
                    <Col sm="7">
                        <div className="info">
                        <h3>CT Mandate</h3>
                        <p>The Competitive Tracker is a project that helps automate the compilation of interest rate data from various
                        competitor websites into an Excel report, and detects and potential changes in such websites since the previous execution.
                        It is a one-of-a-kind collaboration between Career Programs and Business to enable productivity savings.
                        The Competitive Tracker project team aims to build automation tools that streamline this process, bringing value that
                             translates into dollars for the bank.</p>
                        </div>
                    </Col>

                    <Col sm="4">
                        <h3>Access the Reports</h3>
                        <div className="input">
                            <div className="penguin">
                        <img src={penguin} alt="Logo" />
                        </div>
                        <Form onSubmit={this.onSubmit}>

                                <Form.Group>
                                <Form.Label>Username </Form.Label>
                                    <FormControl className="inputrow" name="username" onChange={this.onChange} value={this.state.username} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className="inputrow" name="password" onChange={this.onChange} value={this.state.password} />
                                </Form.Group>

                            <button className="button" type="submit">
                                Login
                            </button>
                        </Form>
                        </div>
                    </Col>
                </Row>
                </div>
            </div>
        )
    }
}