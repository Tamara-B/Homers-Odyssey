import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  updateEmailField(event) {
    this.setState({
      email: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>E-mail address:{this.state.email}</h1>
        <input type="email" name="email" placeholder="name@email.hu" onChange={this.updateEmailField.bind(this)} />
      </div>
    );
  }
}

export default SignUp;