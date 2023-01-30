import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: ["ready", "set", "GO", "running"],
      text: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      list: [...this.state.list, this.state.text]
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="textInput"
            id="textInput"
            value={this.state.text}
            onChange={(event) => {
              this.setState({
                text: event.target.value
              })
            }}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((listText, index) => {
            return <li key={index}>{listText}</li>
          })}
        </ul>
      </div>
    );
  }

}

export default App;