import React, { useState } from "react";
import axios from 'axios';
import { NavLink } from "../components/Navbar/NavbarElements";

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
        console.log(response);
    }
    )
    .catch(error => {
        console.error(error);
    }); 
    console.log(data);
    return data;
}

export default function Login(props){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
        
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser(
          username,
          password
        );
        if(token.length !== 0){
            sessionStorage.setItem('username', username);
            props.handleToken(token[0].id);
        }
        else
            alert("Username or Password is incorrect");
    }

    // function handleFixer(valToSet) {
    //     //handleToken(valToSet);
    // }

    return( 
        <div className={"mainContainer"}>
            <div className={"titleContainer"}>
                <div class = "welcome">Welcome, Please Login</div>
            </div>
            <br />
                <form onSubmit={handleSubmit}>
                    <div class="container">
                        <div class="userInput">
                            <label class = "welcome"for="uname"><b>Username: </b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required onChange={e => setUserName(e.target.value)}/>
                        </div>
                    <div class = "passInput">
                            <label class = "welcome" for="psw"><b>Password  : </b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div class = "login">
                        <button class = "loginBtn" type="submit">Login</button>
                        </div>
                    </div>
                </form>
                <div class = "signUp">
                    <NavLink to={{pathname:'/sign-up', handleToken: props.handleToken}}>
                            <button class = "createBtn">
                                Create Account
                            </button>
                    </NavLink>
                </div>
        </div>
    );
};