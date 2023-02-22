import React from "react";
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="h">
            <NavLink className="h-name" to={"/"}>Synap</NavLink>
        </header>
    )
}

export default Header;