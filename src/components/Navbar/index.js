import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/gamePage" activeStyle>
                        Game Catalog
                    </NavLink>
                    <NavLink to="/favorites" activeStyle>
                        Favorites
                    </NavLink>
                    <NavLink to ="/logout" activeStyle>
                        Logout
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;