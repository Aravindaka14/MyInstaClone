import React from "react";
import "./home.css"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="homeDiv">
            <img id="homeLogo" src="homeLogo.png" alt="" />
            <div className="homeCol2">
                <h3 id="title">Memories</h3>
                <Link to="/postView">
                    <button id="homeButton">Enter</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;