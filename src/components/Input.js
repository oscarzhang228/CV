import { Component } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import CV from "./CV";
import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

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
      saved: false,
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

    if (
      theName === "" ||
      theEmail === "" ||
      theNumber === "" ||
      theSchool === "" ||
      theMajor === ""
    ) {
      alert("Please fill in all blanks.");
      return;
    }

    if (
      !theNumber.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
    ) {
      alert("Please enter a valid phone number using this format XXX-XXX-XXXX");
      return;
    }
    if (
      !theEmail.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      alert("Please enter a valid email using the format johnsmith@email.com");
      return;
    }
    if (isNaN(Date.parse(educationBegin)) || isNaN(Date.parse(educationEnd))) {
      alert(
        "Please follow the mm/dd/yy format on the dates for your education."
      );
      return;
    }

    this.setState({
      name: theName,
      email: theEmail,
      number: theNumber,
      school: theSchool,
      major: theMajor,
      eduBegin: educationBegin,
      eduEnd: educationEnd,
    });

    this.setState({
      saved: true,
    });
  };

  toSubmit = () => {
    if (this.state.saved === false) {
      alert("Please save your work first.");
      return;
    }
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
        <div className="CV">
          <CV info={this.state} edit={this.returnToThis} />
        </div>

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
