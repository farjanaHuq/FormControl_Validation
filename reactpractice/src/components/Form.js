import React, { Component } from "react";


export default class Example extends Component {

  state = {
    username: '',
    email:'',
    password:'',
    confirmPassword: ''
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          value ={this.state.username}
          onChange = {this.handleInputChange.bind(this)}
          name= "username"
          type="text"
          placeholder="Username"
        />
        <input
           value ={this.state.email}
           onChange = {this.handleInputChange.bind(this)}
           name = "email"
           type= "text"
           placeholder="Email"
        />
        <input
           value ={this.state.password}
           onChange = {this.handleInputChange.bind(this)}
           name = "password"
           type= "text"
           placeholder="Password"
        />
        <input
           value ={this.state.confirmPassword}
           onChange = {this.handleInputChange.bind(this)}
           name = "confirmPassword"
           type= "text"
           placeholder="Confirm Password"
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

