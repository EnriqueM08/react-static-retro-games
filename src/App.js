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
//import useToken from './components/useToken';
import GamePlayer from './pages/gamePlayer';
import { useState } from 'react';

const hasToken = () => {
    if(sessionStorage.getItem("token") === null)
        return false;
    return true;
};

function App() {
    var [token, setToken] = useState(hasToken());

    const handleToken = (valToSet) => {
        sessionStorage.setItem("token", valToSet);
        setToken(true);
        console.log(token);
    }
    
    if(sessionStorage.getItem("token") === null) {
        console.log(token);
        return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Login handleToken={handleToken} />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </Router>
        );
    }
           
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/gamePage' element={<GamePage />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path="/gamePlayer/:gamePlatform/:fileName" element = {<GamePlayer/>} />
            </Routes>
        </Router>
  );
}

export default App;
