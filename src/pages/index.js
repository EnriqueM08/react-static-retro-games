import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log("BEFORE")
        axios.get('https://retroapi.azurewebsites.net/server-Connect')
            .then(response => {
            setPosts(response.data);
        })
        .catch(error => {
            console.error(error);
        });
        console.log("RAN");
    }, []);

    return (
        <div className="mainContainer">
            <div className={"titleContainer"}>
                <div>Welcome to RetroGames!</div>
            </div>
            <div>
                Please login to Continue!
            </div>
            <ul>
                {posts.map(post => (
                    <li key={post.username}>{post.password}</li>
                ))}
            </ul>
        </div>
    );
};
 
export default Home;