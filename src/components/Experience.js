import { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="experience">
        <h1>Experience</h1>
        <label htmlFor="company">Company</label>
        <input id="company"></input>
        <label htmlFor="position">position</label>
        <input id="position"></input>
        <label htmlFor="tasks">Main Tasks</label>
        <textarea id="tasks"></textarea>
      </div>
    );
  }
}

export default Experience;
