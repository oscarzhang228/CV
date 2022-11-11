import { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="education">
        <h1>Education</h1>
        <label htmlFor="school">School Name</label>
        <input id="school" value={this.props.information.school}></input>
        <label htmlFor="major">Field of Study</label>
        <input id="major" value={this.props.information.major}></input>
        <label htmlFor="eduBegin">Start Date</label>
        <input id="eduBegin" value={this.props.information.eduBegin}></input>
        <label htmlFor="eduEnd">Graduation Date</label>
        <input id="eduEnd" value={this.props.information.eduEnd}></input>
      </div>
    );
  }
}

export default Education;
