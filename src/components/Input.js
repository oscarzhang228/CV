import { Component } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import CV from "./CV";
import React from "react";
import { StyleSheet } from "@react-pdf/renderer";

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
      styles: false,
    };
    this.returnToThis = this.returnToThis.bind(this);
    this.companyHandler = this.companyHandler.bind(this);
  }

  saveInfo = (e) => {
    let theName = document.getElementById("name").value;
    let theEmail = document.getElementById("email").value;
    let theNumber = document.getElementById("phone").value;
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

  toSubmit = () => {
    const array = [];
    for (let i = 0; i < 9 - this.state.company.length; i++) {
      array.push("");
    }
    this.setState(
      {
        company: this.state.company.concat(array),
      },
      () => {
        this.setState({
          styles: true,
        });
        const inputForm = document.querySelector(".inputForm");
        inputForm.style.display = "none";
      }
    );
  };

  returnToThis() {
    this.setState({
      styles: false,
    });
    const inputForm = document.querySelector(".inputForm");
    inputForm.style.display = "block";
  }

  companyHandler(array) {
    this.setState({ company: array });
  }

  render() {
    return (
      <div>
        <CV info={this.state} edit={this.returnToThis} />
        <form className="inputForm">
          <General information={this.state} />
          <Education information={this.state} />
          <Experience
            information={this.state}
            companyHandler={this.companyHandler}
          />
          <div className="submitButtons">
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
