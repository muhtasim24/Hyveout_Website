import hyveArrow from "../assets/hyveoutArrow.png";
import "../css/loading.css"
import "../css/index.css"
import Footer from "./Footer";

function LoadingScreen() {
    return (
        <div className="main-border">
            <div className="loadingScreen">
                <img className="loading" src={hyveArrow} alt="hyveoutArrow"/>
            </div>
        </div>
    )
}

export default LoadingScreen;