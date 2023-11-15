//import song from './song1.mp3';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Login from './pages/login';
import GamePage from './pages/gamePage';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Logout from './pages/logout';
import GamePlayer from './pages/gamePlayer';
import Favorites from './pages/favorites';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const hasToken = () => {
    if(sessionStorage.getItem("token") === null)
        return false;
    return true;
};

function App() {
    useEffect(() => {
        document.title = 'Retro Games Player';
    }, []);
    var [token, setToken] = useState(hasToken());

    const handleToken = (valToSet) => {
        sessionStorage.setItem("token", valToSet);
        setToken(true);
    }

    const deleteToken = () => {
        setToken(false);
    }
    
    if(sessionStorage.getItem("token") === null) {
        console.log(token);
        return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Login handleToken={handleToken} />} />
                <Route path='/sign-up' element={<SignUp handleToken={handleToken}/>} />
                <Route path='/logout' element={<Logout handleToken = {deleteToken}/>}/>
            </Routes>
        </Router>
        );
    }
           
    return (
        <Router>
            <Navbar id = "nav"/>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/gamePage' element={<GamePage />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path="/gamePlayer/:gamePlatform/:fileName/:gameid/:gameName/:developer/:genres/:dateReleased" element = {<GamePlayer/>} />
                <Route path='/logout' element={<Logout handleToken={deleteToken} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
  );
}

///gamePlayer/${curRow.gameDevice}/${curRow.fileName}/${curRow.gameid}/${curRow.gameName}/${curRow.developer}/${curRow.genres}/${curRow.dateReleased}
export default App;
