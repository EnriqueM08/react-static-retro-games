import { useState } from 'react';
import axios from "axios";
import { NavLink } from "../components/Navbar/NavbarElements";

export default function SignUp(props) {

	// States for registration
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
    const [errorCode, setErrorCode] = useState('');

	// Handling the name change
	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};

	// Handling the email change
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

	// Handling the password change
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        setSubmitted(false);
    };

    async function userSignUp() {
        try {
            const response = await axios.post("https://kind-sand-0ef3bd710.4.azurestaticapps.net/api/signUp", {
                username: `${name}`,
                password: `${password}`,
                email: `${email}`
            });
            if(response.data.message === "Account with that email already exists!"){
                setErrorCode("Account with that Email Exists");
                setError(true);
            }
            else {
                setSubmitted(true);
                console.log(submitted);
			    document.getElementById("registerForm").remove();
                sessionStorage.setItem('username', name);
				let temp = response.data.message;
				let id = temp[0];
				let idNum = id.id;
				console.log(JSON.stringify(idNum));
                sessionStorage.setItem('token', idNum);
                props.handleToken(response.data.message);
            }
        } catch (error) {
            if (error.response) {
                setErrorCode("Server response error");
            } else if (error.request) {
                setErrorCode("Network error");
            } else {
                setErrorCode(error);
            }
            setError(true);
        }
    }

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setErrorCode("Please fill out fields");
            setError(true);
		}
        else if(password !== confirmPassword) {
            setErrorCode("Passwords do not match");
            setError(true);
        } 
        else {
            userSignUp();
		}
	};

	// Showing error message if error is true
	const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Error: {errorCode}</h1>
            </div>
        );
	};

	return (
        
		<div className="form">
			<div>
				<h1 class="welcome">User Registration</h1>
			</div>

			{/* Calling to the methods */}
			<div className="messages">
				{errorMessage()}
			</div>

			<form id = "registerForm">
				{/* Labels and inputs for form data */}
				<label className="label">Username</label>
				<input onChange={handleName} className="input"
					value={name} type="text" />

				<label className="label">Email</label>
				<input onChange={handleEmail} className="input"
					value={email} type="email" />

				<label className="label">Password</label>
				<input onChange={handlePassword} className="input"
					value={password} type="password" />

                <label className="label">Retype Password</label>
                <input onChange={handleConfirmPassword} className="input"
					value={confirmPassword} type="password" />

				<button onClick={handleSubmit} className="btn"
						type="submit">
					Sign Up
				</button>
                <div class = "signUp">
                    <NavLink to={'/'}>
                            <button className='btn2'>
                                Cancel
                            </button>
                    </NavLink>
                </div>
			</form>
		</div>
	);
}