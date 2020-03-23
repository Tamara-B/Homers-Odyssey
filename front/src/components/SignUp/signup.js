import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConf: "",
      firstname: "",
      lastname: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(JSON.stringify(this.state, 1, 1));
    if (this.state.password !== this.state.passwordConf) {
      alert('Passwords aren\'t the same!');
    } else {
      alert('Confirmation e-mail sent to: ' + this.state.email)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <input type="email" name="email" placeholder="name@email.hu" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
        <br />
        <input type="password" name="password" value={this.state.password} placeholder="password" onChange={(event) => this.setState({ password: event.target.value })}></input>
        <br />
        <input type="password" name="passwordConf" value={this.state.passwordConf} placeholder="Confirm password" onChange={(event) => this.setState({ passwordConf: event.target.value })}></input>
        <br />
        <input type="text" name="firstname" value={this.state.firstname} placeholder="First name" onChange={(event) => this.setState({ firstname: event.target.value })}></input>
        <br />
        <input type="text" name="lastname" value={this.state.lastname} placeholder="Last name" onChange={(event) => this.setState({ lastname: event.target.value })}></input>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignUp;