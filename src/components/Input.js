import { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  onSubmission = (e) => {
    let theName = document.getElementById("name").value;
    this.setState({ name: theName });
  };

  render() {
    return (
      <form>
        <div class="general">
          <h1>General Information</h1>
          <label htmlFor="name">Name</label>
          <input id="name"></input>
          <label htmlFor="email">Email</label>
          <input id="email"></input>
          <label htmlFor="phone">Phone Number</label>
          <input id="phone"></input>
        </div>

        <div class="education">
          <h1>Education</h1>
          <label htmlFor="school">School Name</label>
          <input id="school"></input>
          <label htmlFor="major">Field of Study</label>
          <input id="major"></input>
          <label htmlFor="eduBegin">Start Date</label>
          <input id="eduBegin"></input>
          <label htmlFor="eduEnd">Graduation Date</label>
          <input id="eduEnd"></input>
        </div>
        <div class="experience">
          <h1>Experience</h1>
          <label htmlFor="company">Company</label>
          <input id="company"></input>
          <label htmlFor="position">position</label>
          <input id="position"></input>
          <label htmlFor="tasks">Main Tasks</label>
          <textarea id="tasks"></textarea>
        </div>
        <button type="button" onClick={this.onSubmission}></button>
      </form>
    );
  }
}

export default Input;
