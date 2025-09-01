import { Link } from "react-router-dom";
import landingImg from "../assets/landing.png"
import '../css/landing.css';

function Landing() {
    
    return (
        <div className="main-border">
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