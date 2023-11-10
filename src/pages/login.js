import React, { useState } from "react";
import axios from 'axios';
import PropTypes from 'prop-types';

var data;

async function loginUser(user, pass) {
    await axios.get('https://kind-sand-0ef3bd710.4.azurestaticapps.net/api/login', {
        params: {
            username: user,
            password: pass
        }
    })
    .then(
    response => 
    {
        data = (response.data.data);
        console.log(data);
    }
    )
    .catch(error => {
        console.error(error);
    }); 
    return data;
}

export default function Login({ setToken }){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
        
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser(
          username,
          password
        );
        if(token !== null){
            setToken(token, username);
            sessionStorage.setItem('username', username);
        }
        else
            alert("Username or Password is incorrect");
    }

    return( 
        <div className={"mainContainer"}>
            <div className={"titleContainer"}>
                <div>Please Login</div>
            </div>
            <br />
                <form onSubmit={handleSubmit}>
                    <div class="container">
                        <div class="testing">
                            <label for="uname"><b>Username: </b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required onChange={e => setUserName(e.target.value)}/>
                        </div>
                    <div class = "testing">
                            <label for="psw"><b>Password  : </b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div class = "testing">
                        <button type="submit">Login</button>
                        </div>
                    </div>

                </form>
        </div>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};