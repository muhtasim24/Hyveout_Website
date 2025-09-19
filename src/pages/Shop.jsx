import BackButton from "../components/BackButton";
import StaticBackground from "../components/StaticBackground";
import shopGif from "../gifs/shop.gif";
import "../css/shop.css"
import Footer from "../components/Footer";
import useLoading from "../components/useLoading";
import LoadingScreen from "../components/LoadingScreen";

function Shop() {
    const isLoading = useLoading(
    [shopGif],
    1000);
    if (isLoading) return <LoadingScreen/>
    return (
        <div className="main-border">
            <StaticBackground/>
            <BackButton/>
            <div className="shop-container">
                <img className="shopImg" src={shopGif} alt="brain gif" loading="lazy"/>
                <h1 className="shopText">COMING SOON</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Shop;