import { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="general">
        <h1>General Information</h1>
        <label htmlFor="name">Name</label>
        <input id="name" value={this.props.information.name}></input>
        <label htmlFor="email">Email</label>
        <input id="email" value={this.props.information.email}></input>
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" value={this.props.information.number}></input>
      </div>
    );
  }
}

export default General;
