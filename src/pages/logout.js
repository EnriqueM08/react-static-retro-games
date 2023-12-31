import { NavLink } from "../components/Navbar/NavbarElements";

const Logout = ({handleToken}) => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    handleToken(false);

    return (
        <div className="App">
            <h1 class = "welcome">Successfully Logged Out!</h1>
            <NavLink to={'/'}>
                <button className='btn2'>
                    Go To Login Page
                </button>
            </NavLink>
        </div>
    );
};
 
export default Logout;