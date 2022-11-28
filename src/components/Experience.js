import { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasGrid: false,
      experience: [],
      tempFix: false,
    };
  }

  submitExperience = () => {
    if (this.state.experience.length >= 9) {
      alert("There is a maximum of 3 experiences.");
      return;
    }
    let company = document.getElementById("company");
    let position = document.getElementById("position");
    let tasks = document.getElementById("tasks");
    if (company.value === "" || position.value === "" || tasks.value === "") {
      alert("All sections are required.");
      return;
    }
    let tempArr = [company.value, position.value, tasks.value];
    company.value = "";
    position.value = "";
    tasks.value = "";
    this.setState(
      {
        experience: this.state.experience.concat(tempArr),
      },
      () => this.props.companyHandler(this.state.experience)
    );
    if (this.state.hasGrid === false) {
      this.setState({ hasGrid: true });
      let grid = document.createElement("div");
      grid.classList.add("expGrid");
      document.querySelector(".experience").appendChild(grid);
    }
    if (this.state.experience.length <= 3) {
    }
    let block = document.createElement("div");
    block.classList.add("expCard");
    let blockText = document.createElement("h1");
    blockText.classList.add("expText");
    blockText.innerText = tempArr[0];
    document.querySelector(".expGrid").appendChild(block);
    block.appendChild(blockText);
  };

  render() {
    return (
      <div className="experience">
        <h1>Experience</h1>
        <div className="expForm">
          <div className="company">
            <label htmlFor="company">Company</label>
            <input id="company"></input>
          </div>
          <div className="position">
            <label htmlFor="position">Position</label>
            <input id="position"></input>
          </div>
          <div className="tasks">
            <label htmlFor="tasks">Main Tasks</label>
            <textarea id="tasks"></textarea>
          </div>
          <button type="button" onClick={this.submitExperience}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default Experience;
