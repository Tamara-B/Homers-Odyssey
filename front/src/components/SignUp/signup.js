import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConf: "",
      name: "",
      lastname: "",
      flash: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    /*     console.log(JSON.stringify(this.state, 1, 1)); */
    if (this.state.password !== this.state.passwordConf) {
      alert("Passwords aren't the same!");
    } else {
      fetch("/auth/signup", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(this.state),
      })
        .then((res) => res.json())
        .then(
          (res) => this.setState({ flash: res.flash }),
          (err) => this.setState({ flash: err.flash })
        );
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <input
          type="email"
          name="email"
          placeholder="name@email.hu"
          value={this.state.email}
          onChange={(event) => this.setState({ email: event.target.value })}
        />
        <br />
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="password"
          onChange={(event) => this.setState({ password: event.target.value })}
        ></input>
        <br />
        <input
          type="password"
          name="passwordConf"
          value={this.state.passwordConf}
          placeholder="Confirm password"
          onChange={(event) =>
            this.setState({ passwordConf: event.target.value })
          }
        ></input>
        <br />
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="First name"
          onChange={(event) => this.setState({ name: event.target.value })}
        ></input>
        <br />
        <input
          type="text"
          name="lastname"
          value={this.state.lastname}
          placeholder="Last name"
          onChange={(event) => this.setState({ lastname: event.target.value })}
        ></input>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignUp;
