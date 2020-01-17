import React, { Component } from "react";
import axios from "axios";
import Player from "./components/Player";

export default class App extends Component {
  state = {
    player: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data, `data`);
        this.setState({
          player: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='App'>
        <h1>
          Women's World Cup players ranked by search interest from Google Trends{" "}
        </h1>
        <Player />
      </div>
    );
  }
}
