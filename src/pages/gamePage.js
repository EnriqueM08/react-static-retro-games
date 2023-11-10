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

    return (
        <div className="App">
        <h1>{games.name}</h1>
        </div>
    );
};
 
export default GamePage;