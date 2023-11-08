import song from './song1.mp3';
import './App.css';
// import page from './iframe_window.html';

function App() {
  return (
    <div className="App">
        <div className="music-player">
            <audio id="audio-player" controls>
                <source src={song} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
            <div class="song-info">
                <h2>Song Title</h2>
                <p>Artist Name</p>
            </div>
        </div>
        <script src="script.js"></script>
        <iframe id="frame" 
            src={process.env.PUBLIC_URL + '/iframe_window.html'}
            frameborder="1"
            title='game'
            width={"640px"}
            height={"480px"}
            max-width={"100%"}> 
        </iframe> 
    </div>
  );
}

export default App;
