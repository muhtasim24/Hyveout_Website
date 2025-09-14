import StaticBackground from "../components/StaticBackground";
import homeBorder from "../assets/home-page.png";
import mediaGif from "../gifs/media.gif";
import contactGif from "../gifs/contact.gif";
import mindGif from "../gifs/brain.gif";
import gamesGif from "../gifs/games.gif";
import aboutGif from "../gifs/book.gif";
import shopGif from "../gifs/shop.gif";
import videoGif from "../gifs/GHOST_GAME.gif"
import "../css/home.css"
import GifLink from "../components/GifLink";
import arrowPng from "../assets/arrow.png";
import Footer from "../components/Footer";


function Home() {
    return (
        <div className="main-border">
            <StaticBackground/>
            <div className="container">
                <div className="left-side-gifs">
                    <a href="https://www.youtube.com/@HYVEOUT/videos" target="_blank">
                        <img className="gifs" src={mediaGif} alt="media gif" />
                    </a>
                    <h1 className="caption" style={ {color: "#ec00ce"}}>MEDIA</h1>
                    <GifLink 
                        title="MIND"
                        image = {mindGif}
                        alt = "mind"
                        path = "/mind"
                        color = "#fd395e"
                    />
                    <GifLink 
                        title="ABOUT"
                        image = {aboutGif}
                        alt = "about"
                        path = "/about"
                        color = "#0ea1ec"
                    />
                </div>

                <div className="middle-video">
                    <h1 className="latest-text">LATEST</h1>
                    <img className="arrow" src={arrowPng} alt="arrow" loading="lazy"/>
                    <a href="https://hyveout-ghosts.vercel.app/" target="_blank">
                        <img className="game-gif" src={videoGif} alt="ghost_game"/>
                    </a>
                    <h1 className="mid-text">GHOST BY NINEXTEEN</h1>
                </div>

                <div className="right-side-gifs">
                    <GifLink 
                        title="GAMES"
                        image = {gamesGif}
                        alt = "games"
                        path = "/games"
                        color = "#00c600"
                    />
                    <GifLink 
                        title="SHOP"
                        image = {shopGif}
                        alt = "shop"
                        path = "/shop"
                        color = "#d474c9"
                    />
                    <GifLink 
                        title="CONTACT"
                        image = {contactGif}
                        alt = "contact"
                        path = "/contact"
                        color = "#9b5af3"
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;