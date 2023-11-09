import React, { useEffect, /*useState*/ } from 'react';
import axios from 'axios';

const Home = () => {
    //const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log("BEFORE")
        axios.get('https://kind-sand-0ef3bd710.4.azurestaticapps.net/api/server-Connect')
            .then(
            response => 
            {
                //setPosts(response.data);
                console.log(response.data);
            }
            )
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
            {/* <ul>
                {posts.map((post) => (
                    <>
                        <li key={post.id}>{post.title}</li>
                        <p>{post.body}</p>
                    </>
                ))}
            </ul> */}
        </div>
    );
};
 
export default Home;