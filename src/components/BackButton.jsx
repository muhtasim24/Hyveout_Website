import backBtn from "../gifs/backBtn.gif";
import "../css/backBtn.css"
import { Link } from "react-router-dom";

function BackButton() {
    return (
        <Link to="/home">
            <img className="back-button" src={backBtn} alt="back button" />
        </Link>
    )
}

export default BackButton;