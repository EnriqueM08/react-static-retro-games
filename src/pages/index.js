import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { response } from 'express';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log("BEFORE")
        axios.get('https://retroapi.azurewebsites.net/server-Connect')
            .then(resoinse => {
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