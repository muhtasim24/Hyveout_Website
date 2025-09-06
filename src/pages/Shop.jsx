import BackButton from "../components/backButton";
import StaticBackground from "../components/StaticBackground";
import shopGif from "../gifs/shop.gif";
import "../css/shop.css"


function Shop() {
    return (
        <div className="main-border">
            <StaticBackground/>
            <BackButton/>
            <div className="shop-container">
                <img className="shopImg" src={shopGif} alt="brain gif"/>
                <h1 className="shopText">COMING SOON</h1>
            </div>
        </div>
    )
}

export default Shop;