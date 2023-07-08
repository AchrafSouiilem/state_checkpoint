import './App.css';
import React from 'react'
import Profile from './Profile';
import Button from "react-bootstrap/Button";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      shows: false,
    }
    }
    toggleshow = () => {
      this.setState({shows: !this.state.shows})
  }

render() {
  return (
    <div className='App'>
    {this.state.shows && <Profile/>}
    <Button onClick={this.toggleshow}>{this.state.shows ? "Hide" : "Show"}</Button>
    </div>
  )

}
};

export default App;
