import React from "react";
import "./Header.css";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";

function Header() {
    function setIsActive({ isActive }) {
        return isActive ? "isActive" : "";
    }
    return (
        <header className="d-flex flex-column flex-md-row">
            <NavLink to="/">
                <Logo />
            </NavLink>
            <nav className="Nav d-flex flex-row flex-md-row">
                <NavLink className={setIsActive} to="/">
                    Главная
                </NavLink>
                <NavLink className={setIsActive} to="/stores">
                    Строительные Магазины
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
