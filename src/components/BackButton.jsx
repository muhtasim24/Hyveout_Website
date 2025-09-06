import backBtn from "../gifs/backBtn.gif";
import "../css/backBtn.css"

function BackButton() {
    return (
        <img className="back-button" src={backBtn} alt="back button" />
    )
}

export default BackButton;