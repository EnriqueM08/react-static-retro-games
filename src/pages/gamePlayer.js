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
        if(response.data.message === "Favorite created successfully") {
            document.getElementById("remove").style.display = 'block';
            document.getElementById("add").style.display = 'none';
        }
    } catch (error) {
        console.log(error);
        console.log("Could not favorite");
    }
};

async function RemoveFavorite() {
    try {
        var userid = sessionStorage.getItem("token");
        var gameid = sessionStorage.getItem("gameid");
        const response = await axios.delete(`https://kind-sand-0ef3bd710.4.azurestaticapps.net/api/removeFavorite/${userid}/${gameid}`);
        if(response.data.message === "Favorite deleted successfully") {
            document.getElementById("add").style.display = 'block';
            document.getElementById("remove").style.display = 'none';
        }
    } catch (error) {
        console.log(error);
        console.log("Could not favorite");
    }
}

const GamePlayer = (props) => {
    const params = useParams();
    const [isLoading, setLoading] = useState(true);
    const [id, setid] = useState(sessionStorage.getItem("token"));

    useEffect(() => {
        axios.get("https://kind-sand-0ef3bd710.4.azurestaticapps.net/api/favoritedGames", {
            params: {
                userid: id
            }
        }).then(response => {
            for (let i = 0; i < response.data.data.length; i++) {
                var curRow = response.data.data[i];
                if(curRow.gameid === parseInt(sessionStorage.getItem("gameid"))) {
                    document.getElementById("remove").style.display = 'block';
                    document.getElementById("add").style.display = 'none';
                }
            }
            setLoading(false);
            console.log(isLoading);
            setid(sessionStorage.getItem("token"));
        });
    });

    const url = `/iframe_window.html?platform=${params.gamePlatform}&url=${params.fileName}`;

    sessionStorage.setItem("gameid", params.gameid);

    function handleDate(date) {
        return date.replaceAll('_', '/')
    }

    function gameInfo() {
        return (
            <div>
                <h1 class = "welcome" style={{"margin-top": "50px"}}>
                    Game Information:
                </h1>
                <p class = "devBy">
                    Developed by: {params.developer}
                </p>
                <p class = "welcome">
                    Genre(s): {params.genres}
                </p>
                <p class = "welcome">
                    Originally Released: {handleDate(params.dateReleased)}
                </p>
            </div>
        );
    }

    return (
        <div class="iframe-wrapper">
            <div class = "favorites"> 
                <button id = "add" onClick={AddToFavorites}>Add to Favorites</button>
                <button style = {{"display":'none'}} id = "remove" onClick={RemoveFavorite}>Remove Favorite</button>
            </div>
            <h1 class = "welcome">
                {params.gameName}
            </h1>
            <iframe class = "gameFrame" title="game" src={process.env.PUBLIC_URL + url} style={
                {width: "640px", 
                 height: "500px",
                 maxWidth: "100%"}}>
            </iframe>
            <div class = "gameInfo">
                {gameInfo()}
            </div>
        </div>
    );
};
 
export default GamePlayer;
