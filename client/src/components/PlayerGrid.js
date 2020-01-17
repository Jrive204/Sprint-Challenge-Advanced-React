import React from "react";
import noImage from "../img/no_image2.png";
// import Player from './Player'

export default function PlayerGrid(props) {
  return (
    <div data-testid='PlayerGrid' className='PlayerGrid'>
      {props.player
        .map(players => (
          <div key={players.id} className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img
                  src={noImage}
                  alt='Avatar'
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
              <div className='flip-card-back'>
                <h1>{players.name}</h1>
                <p>{players.country}</p>
                <p>Searches: {players.searches}</p>
              </div>
            </div>
          </div>
        ))
        .sort()}
    </div>
  );
}
