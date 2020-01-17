import React from "react";
import axios from "axios";
import PLayerCard from "./PlayerCard";
import "../App.css";

class Players extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data);
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="cards">
        {this.state.players.map(player => (
          <PLayerCard
            name={player.name}
            id={player.id}
            country={player.country}
            searches={player.searches}
          />
        ))}
      </div>
    );
  }
}
export default Players;
