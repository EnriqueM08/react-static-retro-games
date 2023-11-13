import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
// import { IFrame } from '../iframe'

async function AddToFavorites() {
    try {
        const response = await axios.post("https://kind-sand-0ef3bd710.4.azurestaticapps.net/api/favorite", {
            userid: sessionStorage.getItem("token"),
            gameid: sessionStorage.getItem("gameid"),
        });
        sessionStorage.setItem()
        console.log(response.data);
    } catch (error) {
        console.log(error);
        console.log("Could not favorite");
    }
};

async function RemoveFavorite() {
    try {
        const response = await axios.post("https://kind-sand-0ef3bd710.4.azurestaticapps.net/api/removeFavorite", {
            userid: sessionStorage.getItem("token"),
            gameid: sessionStorage.getItem("gameid"),
        });
        sessionStorage.setItem()
        console.log(response.data);
    } catch (error) {
        console.log(error);
        console.log("Could not favorite");
    }
}

const GamePlayer = (props) => {
    const params = useParams();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://kind-sand-0ef3bd710.4.azurestaticapps.net/api/favoritedGames", {
            params: {
                userid: sessionStorage.getItem("token")
            }
        }).then(response => {
            console.log(response); 
            console.log(sessionStorage.getItem("token"));
            setLoading(false);
        });
    });

    const url = `/iframe_window.html?platform=${params.gamePlatform}&url=${params.fileName}`;

    sessionStorage.setItem("gameid", params.gameid);

    if(isLoading)
    {
        return (
            <div>
                <iframe title="game" src={process.env.PUBLIC_URL + url} style={
                    {width: "640px", 
                     height: "480px",
                     maxWidth: "100%"}}>
                </iframe>
            </div>
        );
    }

    return (
        <div>
            <iframe title="game" src={process.env.PUBLIC_URL + url} style={
                {width: "640px", 
                 height: "480px",
                 maxWidth: "100%"}}>
            </iframe>
            <div class = "favorites"> 
                <button onClick={AddToFavorites}>Add to Favorites</button>
                <button onClick={RemoveFavorite}>Remove Favorite</button>
            </div>
        </div>
    );
};
 
export default GamePlayer;
