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
import GifLink from "../components/gifLink";
import arrowPng from "../assets/arrow.png";


function Home() {
    return (
        <div className="main-border">
            <StaticBackground/>
            <div className="container">
                <img className="home-container" src= {homeBorder} alt="box page"/>
                <div className="left-side-gifs">
                    <GifLink 
                        title="MEDIA"
                        image = {mediaGif}
                        new = "_blank"
                        alt = "youtube"
                        path = "https://www.youtube.com/@HYVEOUT/videos"
                    />
                    <GifLink 
                        title="CONTACT"
                        image = {contactGif}
                        alt = "contact"
                        path = "/contact"
                    />
                    <GifLink 
                        title="MIND"
                        image = {mindGif}
                        alt = "mind"
                        path = "/mind"
                    />
                </div>

                <div className="middle-video">
                    <h1 className="latest-text">LATEST</h1>
                    <img className="arrow" src={arrowPng} alt="arrow" />
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
                    />
                    <GifLink 
                        title="ABOUT"
                        image = {aboutGif}
                        alt = "about"
                        path = "/about"
                    />
                    <GifLink 
                        title="SHOP"
                        image = {shopGif}
                        alt = "shop"
                        path = "/shop"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;