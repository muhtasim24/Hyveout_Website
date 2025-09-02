import { Link } from "react-router-dom";
import landingImg from "../assets/landing.png"
import StaticBackground from "../components/StaticBackground";
import '../css/landing.css';

function Landing() {
    
    return (
        <div className="main-border">
            <StaticBackground/>
            <div className="container">
                <img className="site-container" src= {landingImg} alt="box page" />
                <Link to="/home">
                    <button className="enter">ENTER</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;