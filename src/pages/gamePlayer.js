import { useParams } from "react-router-dom";
import { IFrame } from '../iframe'

const GamePlayer = (props) => {
    const params = useParams();
    
    console.log(params.gamePlatform);
    console.log(params.fileName);

    return (
        <div>
        <h1>TESTING</h1>
        <IFrame>
            <div>
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
            </div>
        </IFrame>
        </div>
    );
};
 
export default GamePlayer;
