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

  onSubmission = (e) => {
    let theName = document.getElementById("name").value;
    let theEmail = document.getElementById("email");
    let theNumber = document.getElementById("number");
    let theSchool = document.getElementById("school");
    let theMajor = document.getElementById("major");
    let educationBegin = document.getElementById("eduBegin");
    let educationEnd = document.getElementById("eduEnd");
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

  render() {
    return (
      <form>
        <General information={this.state} />
        <Education information={this.state} />
        <Experience information={this.state} />
        <button type="button" onClick={this.onSubmission}></button>
      </form>
    );
  }
}

export default Input;
