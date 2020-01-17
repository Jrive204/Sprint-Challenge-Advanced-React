import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import PlayerGrid from "./components/PlayerGrid";

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
        <Header />
        <h1 style={{ textAlign: "center" }}>
          Women's World Cup players ranked by search interest from Google Trends
        </h1>
        <PlayerGrid player={this.state.player} />
      </div>
    );
  }
}
