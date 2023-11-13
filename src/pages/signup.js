import { useState } from 'react';
import axios from "axios";
import { NavLink } from "../components/Navbar/NavbarElements";

export default function SignUp() {

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
            console.log(response.data);
            setSubmitted(true);
			document.getElementById("registerForm").remove();
            sessionStorage.setItem('username', name);
            sessionStorage.setItem('token', response.data.message);
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

	// Showing success message
	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? '' : 'none',
				}}>
				<h1>User {name} successfully registered!</h1>
			</div>
		);
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
				<h1>User Registration</h1>
			</div>

			{/* Calling to the methods */}
			<div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>

			<form id = "registerForm">
				{/* Labels and inputs for form data */}
				<label className="label">Name</label>
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
					Submit
				</button>
                <div class = "signUp">
                    <NavLink to={'/'}>
                            <button className='btn2'>
                                Go Back
                            </button>
                    </NavLink>
                </div>
			</form>
		</div>
	);
}