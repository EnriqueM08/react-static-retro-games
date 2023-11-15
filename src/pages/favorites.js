import React, { useEffect, useState } from "react";
import axios from "axios";
import './gamePage.css';
import {gameImage as gameImageService} from '../images/images.ts';
import { NavLink } from "../components/Navbar/NavbarElements";

const Favorites = () => {
    const [isLoading, setLoading] = useState(true);
    const [games, setGames] = useState(0);
    const [id, setUserID] = useState(sessionStorage.getItem("token"));
    const rows = [];

    useEffect(() => {
        axios.get(`https://kind-sand-0ef3bd710.4.azurestaticapps.net/api/favorite-Games`,{
            params: {
                userid: id
            }
        })
        .then(response => {
            setGames(response.data.data);
            setLoading(false);
            setUserID(sessionStorage.getItem("token"));
        });
    });

    function handleDevice(deviceName) {
        switch(deviceName) {
            case "gba":
              return "Game Boy Advance";
            case "smc":
            case "sfc":
              return "SNES";
            default:
              return "Nintendo DS";
        }
    }

    function handleDate(dateReleased){
        return dateReleased.replaceAll('/', '_')
    }

    if(games.length === 0) {
        rows.push(
            <div class = "center">
                You do not have any favorited games!
            </div>
        );
    }

    for (let i = 0; i < games.length; i++) {
        var curRow = games[i];
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        var toPush;
        const gameImage = gameImageService.GetImage(
            `${curRow.pictureName}`,
        ); 
        
        toPush = 
        <div class = "column">
            <div class="card">
                <img class = "image" src={gameImage} alt={curRow.gameName} style={{width:"100%"}}/>
                <div key={i}>{curRow.gameName}</div>
                <p class="platform">Platform: {handleDevice(curRow.gameDevice)}</p>
                <p class ="release">{curRow.dateReleased}</p>
                <NavLink to={`/gamePlayer/${curRow.gameDevice}/${curRow.fileName}/${curRow.gameid}/${curRow.gameName}/${curRow.developer}/${curRow.genres}/${handleDate(curRow.dateReleased)}`}>
                    <button>
                        Play Game
                    </button>
                </NavLink>
            </div>
        </div>
        rows.push(toPush);
    }

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <div className="App">
            <div className="header">
                <h1 class = "favs">Favorites:</h1>
            </div>
            <div className="row">{rows}</div>
        </div>
    );
};
 
export default Favorites;