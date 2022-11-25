import { Component } from "react";
import Input from "./components/Input";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Input />
      </div>
    );
  }
}

export default App;
