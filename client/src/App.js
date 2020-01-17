import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import PlayerGrid from "./components/PlayerGrid";
import Plot from "react-plotly.js";

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
    let playerid = this.state.player.map(p => {
      return p.id;
    });
    let playersearch = this.state.player.map(p => p.searches);
    let playername = this.state.player.map(p => p.name);
    console.log(playerid, "playerid");
    return (
      <div className='App'>
        <Header />
        <h1 style={{ textAlign: "center" }}>
          Women's World Cup players ranked by search interest from Google Trends
        </h1>
        <PlayerGrid player={this.state.player} />
        <div className='plotgraph'>
          <Plot
            data={[
              {
                type: "bar",
                x: playerid,
                y: playersearch,
                marker: { color: "purple" },
                name: playername
              }
            ]}
            layout={{
              title: "Woman World Cup Name Searches",
              font: {
                size: "15"
              },
              xaxis: {
                title: "Players"
              },
              yaxis: {
                title: "Searches"
              },
              autosize: true,
              width: "1500"
            }}
            // style={{ fontSize: "100px" }}
          />
        </div>
      </div>
    );
  }
}
