import React from "react";
import { Link } from "react-router-dom";
import "./header.scss"

const Header = () => {
    return (
        <div>
            <Link to="/"><h1>NEWS</h1></Link>
            <div className="categories">
                <div>
                    <Link to="/sport">  <button>Sport</button></Link>
                </div>
                <div>
                    <Link to="/technologies"> <button>Technologies</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Header