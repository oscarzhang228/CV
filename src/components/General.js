import { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="general">
        <h1>General Information</h1>
        <div className="genForm">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input id="name" defaultValue={this.props.information.name}></input>
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              defaultValue={this.props.information.email}
            ></input>
          </div>
          <div className="phone">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              defaultValue={this.props.information.number}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default General;
