import { Component } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      number: "",
      school: "",
      major: "",
      eduBegin: "",
      eduEnd: "",
      company: [],
    };
  }

  saveInfo = (e) => {
    let theName = document.getElementById("name").value;
    let theEmail = document.getElementById("email").value;
    let theNumber = document.getElementById("number").value;
    let theSchool = document.getElementById("school").value;
    let theMajor = document.getElementById("major").value;
    let educationBegin = document.getElementById("eduBegin").value;
    let educationEnd = document.getElementById("eduEnd").value;
    this.setState({
      name: theName,
      email: theEmail,
      number: theNumber,
      school: theSchool,
      major: theMajor,
      eduBegin: educationBegin,
      eduEnd: educationEnd,
    });
  };

  toSubmit = () => {};

  render() {
    return (
      <div className="inputForm">
        <form>
          <General information={this.state} />
          <Education information={this.state} />
          <Experience information={this.state} />
          <div class="submitButtons">
            <button type="button" onClick={this.saveInfo}>
              Save
            </button>
            <button type="button" onClick={this.toSubmit}>
              Create CV
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Input;
