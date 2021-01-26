import React, { Component } from 'react';
import AddMtwlii from './AddMtwlii';
import './App.css';
import Mtwlii from './Mtwlii';
class App extends Component {

  state = {
    mtwliis: [
      { name: 'Mahmoud', age: 20, belt: 'Black', id: 1 },
      { name: 'Amira', age: 22, belt: 'green', id: 2 },
      { name: 'Mariam', age: 50, belt: 'white', id: 3 }
    ]
  }
  addMtwlii = (mtwlii) => {
    mtwlii.id = Math.random();
    let mtwliis = [...this.state.mtwliis, mtwlii]
    this.setState({
      mtwliis: mtwliis
    })
  }
  deleteMtwlli = (id) => {
    let mtwliis = this.state.mtwliis.filter((mtwlii) => {
      return mtwlii.id !== id
    })
    this.setState({
      mtwliis: mtwliis
    })
  }

  render() {
    return (

      <div className="App">
        <h1>MY First React App!</h1>
        <hr className="hr" />
        <p>Welcome For You :D </p>
        <Mtwlii deleteMtwlli={this.deleteMtwlli} mtwliis={this.state.mtwliis} />
        <AddMtwlii addMtwlii={this.addMtwlii} />
      </div>

    );
  }

}

export default App;
