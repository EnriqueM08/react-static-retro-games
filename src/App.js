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
import useToken from './components/useToken';

function App() {
    var { token, setToken } = useToken();
    
    if(!token) {
        return <Login setToken={setToken}/>
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
            </Routes>
        </Router>
  );
}

export default App;
