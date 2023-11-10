import { useParams } from "react-router-dom";
// import { IFrame } from '../iframe'

const GamePlayer = (props) => {
    const params = useParams();

    const url = `/iframe_window.html?platform=${params.gamePlatform}&url=${params.fileName}`;

    console.log(url);

    return (
        <div>
            <iframe title="game" src = "./iframe_window.html"></iframe>
        {/* <IFrame>
                <div style={{width:"640px",height:"480px",maxWidth:"100%"}}>
                    <div id='game'></div>
                </div>
                <script type='text/javascript'> 
                    EJS_player = '#game';
                    EJS_core = `{params.gamePlatform}`;  
                    EJS_gameUrl = `../games/{params.fileName}.{params.gamePlatform}`;
                    EJS_pathtodata = 'https://cdn.jsdelivr.net/gh/ethanaobrien/emulatorjs@main/data/';
                </script>
                <script src='https://cdn.jsdelivr.net/gh/ethanaobrien/emulatorjs@main/data/loader.js'></script>
        </IFrame> */}
        </div>
    );
};
 
export default GamePlayer;
