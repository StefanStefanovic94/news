import React from "react";
import { Link } from "react-router-dom";
import "./header.scss"

const Header = () => {
    return (
        <div>
            <h1>NEWS</h1>
            <div>
                <Link to="/sport">  <button>Sport</button></Link>
            </div>
        </div>
    )
}
export default Header