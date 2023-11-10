import React, { useEffect, useState } from "react";
import axios from "axios";
import './gamePage.css';
import {gameImage as gameImageService} from '../images/images.ts';

const GamePage = () => {
    const [isLoading, setLoading] = useState(true);
    const [games, setGames] = useState();

    useEffect(() => {
        axios.get("https://kind-sand-0ef3bd710.4.azurestaticapps.net/api/games").then(response => {
            setGames(response.data);
            console.log(response.data);
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    const rows = [];
    for (let i = 0; i < games.data.length; i++) {
        var curRow = games.data[i];
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        var toPush;
        const gameImage = gameImageService.GetImage(
            `${curRow.pictureLocation}.jpg`,
        ); 
        
        toPush = 
        <div class = "column">
            <div class="card">
                <img src={gameImage} alt={curRow.gameName} style={{width:"100%"}}/>
                <div key={i}>{curRow.gameName}</div>
                <p class="platform">{curRow.gameDevice}</p>
                <p>{curRow.developer}</p>
                <p><button>Play Game</button></p>
            </div>
        </div>
        rows.push(toPush);
    }

    return (
        <div className="App">
            <div className="row">{rows}</div>
        </div>
    );
};
 
export default GamePage;