import React from "react";
import { IFrame } from '../iframe'

function GamePlayer(props) {
    const { gameName, gameDevice } = props.match.params;
    
    return (
        <div>
        <h1>TESTING</h1>
        <IFrame>
            <div>
                <div style={{width:"640px",height:"480px",maxWidth:"100%"}}>
                    <div id='game'></div>
                </div>
                <script type='text/javascript'> 
                    EJS_player = '{gameName}';
                    EJS_core = '{gameDevice}';  
                    EJS_gameUrl = 'pkmRed.gba';
                    EJS_pathtodata = 'https://cdn.jsdelivr.net/gh/ethanaobrien/emulatorjs@main/data/';
                </script>
                <script src='https://cdn.jsdelivr.net/gh/ethanaobrien/emulatorjs@main/data/loader.js'></script>
            </div>
        </IFrame>
        </div>
    );
};
 
export default GamePlayer;
