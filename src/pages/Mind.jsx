import BackButton from "../components/BackButton";
import StaticBackground from "../components/StaticBackground";
import brainGif from "../gifs/brain.gif";
import "../css/mind.css"


function Mind() {
    return (
        <div className="main-border">
            <StaticBackground/>
            <BackButton/>
            <div className="mind-container">
                <img className="mindImg"src={brainGif} alt="brain gif" loading="lazy"/>
                <h1 className="mindText">COMING SOON</h1>
            </div>
        </div>
    )
}

export default Mind;