import backBtn from "../gifs/hyveout_gif.gif";
import "../css/backBtn.css"
import { Link } from "react-router-dom";

function BackButton() {
    return (
        <Link to="/home">
            <img className="back-button" src={backBtn} alt="back button" loading="lazy"/>
        </Link>
    )
}

export default BackButton;