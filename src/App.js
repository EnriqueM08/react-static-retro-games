import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div style='width:640px;height:480px;max-width:100%'>
    <div id='game'></div>
</div>
 
<script type='text/javascript'>
 
    EJS_player = '#game';
    EJS_core = 'gba';  
    EJS_gameUrl = 'dbz.gba';
    EJS_pathtodata = 'https://cdn.jsdelivr.net/gh/ethanaobrien/emulatorjs@main/data/';
 
</script>
<script src='https://cdn.jsdelivr.net/gh/ethanaobrien/emulatorjs@main/data/loader.js'></script>
    </div>
  );
}

export default App;
