import BackButton from "../components/BackButton";
import StaticBackground from "../components/StaticBackground";
import brainGif from "../gifs/brain.gif";
import "../css/mind.css"
import Footer from "../components/Footer";


function Mind() {
    return (
        <div className="main-border">
            <StaticBackground/>
            <BackButton/>
            <div className="mind-container">
                <img className="mindImg"src={brainGif} alt="brain gif" loading="lazy"/>
                <h1 className="mindText">COMING SOON</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Mind;