import React, { useEffect, useState } from "react";
import axios from "axios";
import './gamePage.css';
import {gameImage as gameImageService} from '../images/images.ts';
import { NavLink } from "../components/Navbar/NavbarElements";

const GamePage = () => {
    const [isLoading, setLoading] = useState(true);
    const [games, setGames] = useState(0);
    const [sortType, setSortType] = useState('alphabetical');
    const [filterType, setFilterType] = useState('');
    const rows = [];

    useEffect(() => {
        axios.get("https://kind-sand-0ef3bd710.4.azurestaticapps.net/api/games", {
            params: {
                filter: filterType
            }
        }).then(response => {
            var sortedData = response.data.data.sort((a, b) => {
                if(sortType === 'alphabetical') {
                    return a.gameName.localeCompare(b.gameName);
                }
                else if (sortType === 'releaseDate') {
                    const aDateArray = a.dateReleased.split("/");
                    var aDate = new Date(aDateArray[2],aDateArray[0],aDateArray[1]);
                    const bDateArray = b.dateReleased.split("/");
                    var bDate = new Date(bDateArray[2],bDateArray[0],bDateArray[1]);
                    if(aDate < bDate) {
                        return 1;
                    } else if(bDate > aDate) {
                        return -1;
                    }
                        return 0;
                }
                return 1;
            });
            setGames(sortedData);
            setLoading(false);
        });
    });

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
                <img src={gameImage} alt={curRow.gameName} style={{width:"100%"}}/>
                <div key={i}>{curRow.gameName}</div>
                <p class="platform">{curRow.gameDevice}</p>
                <p>{curRow.developer}</p>
                <NavLink to={`/gamePlayer/${curRow.gameDevice}/${curRow.fileName}/${curRow.gameid}`}>
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
                <h1>Game Catalog:</h1>
                <div className="options">
                    <p1 className = "filterTitle">Filter by Platform: </p1>
                    <select onChange={(e) => setFilterType(e.target.value)} className="filterToggle">
                        <option value="">All</option>
                        <option value="gba">Game Boy Advance</option>
                        <option value="snes">SNES</option>
                        <option value="ds">Nintendo DS</option>
                    </select>
                    <p1 className = "sortTitle">Sort by: </p1>
                    <select onChange={(e) => setSortType(e.target.value)} className="sortToggle">
                        <option value="alphabetical">Alphabetical</option>
                        <option value="releaseDate">Release Date</option>
                    </select>
                </div>
            </div>
            <div className="row">{rows}</div>
        </div>
    );
};
 
export default GamePage;