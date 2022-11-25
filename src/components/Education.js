import { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="education">
        <h1>Education</h1>
        <div className="eduForm">
          <div className="school">
            <label htmlFor="school">School Name</label>
            <input
              id="school"
              defaultValue={this.props.information.school}
            ></input>
          </div>
          <div className="major">
            <label htmlFor="major">Field of Study</label>
            <input
              id="major"
              defaultValue={this.props.information.major}
            ></input>
          </div>
          <div className="eduBegin">
            <label htmlFor="eduBegin">Start Date</label>
            <input
              id="eduBegin"
              defaultValue={this.props.information.eduBegin}
            ></input>
          </div>
          <div className="eduEnd">
            <label htmlFor="eduEnd">Graduation Date</label>
            <input
              id="eduEnd"
              defaultValue={this.props.information.eduEnd}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
