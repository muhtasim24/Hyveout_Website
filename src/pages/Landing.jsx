import { Link } from "react-router-dom";
import landingImg from "../assets/landing.png"
import Footer from "../components/Footer";
import StaticBackground from "../components/StaticBackground";
import '../css/landing.css';

function Landing() {
    
    return (
        <div className="main-border">
            <StaticBackground/>
            <div className="container">
                {/* <img className="site-container" src= {landingImg} alt="box page" loading="lazy"/> */}
                <h1 className="landingText">HYVEOUT</h1>
                <Link to="/home">
                    <button className="enter">&gt;ENTER&lt;</button>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}

export default Landing;