import React, { useEffect, useState } from "react";
import axios from "axios";
 
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
        rows.push(<div key={i}>${curRow.gameName}</div>);
    }

    return (
        <div className="App">
            <div>{rows}</div>
        </div>
    );
};
 
export default GamePage;