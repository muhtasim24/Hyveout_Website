import StaticBackground from "../components/StaticBackground";
import mediaGif from "../gifs/media.gif";
import contactGif from "../gifs/contact.gif";
import mindGif from "../gifs/brain.gif";
import gamesGif from "../gifs/games.gif";
import aboutGif from "../gifs/about.gif";
import shopGif from "../gifs/shop.gif";
import "../css/home.css"
import GifLink from "../components/GifLink";
import arrowPng from "../assets/arrow.webp";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import useLoading from "../components/useLoading";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


function Home() {
    const isLoading = useLoading([
        mediaGif, contactGif, mindGif, gamesGif, aboutGif, arrowPng
    ], 1000);

    if (isLoading) return <LoadingScreen/>



    return (
        <div className="main-border">
            <StaticBackground/>
            <div className="home-container">
                <div className="left-side-gifs">
                    <GifLink 
                        title="MEDIA"
                        image = {mediaGif}
                        alt = "media"
                        path = "/mediaSelect"
                        color = "#ec00ce"
                        newTab = {false}
                    />
                    <GifLink 
                        title="MIND"
                        image = {mindGif}
                        alt = "mind"
                        path = "/mind"
                        color = "#fd395e"
                        newTab = {false}
                    />
                    <GifLink 
                        title="ABOUT"
                        image = {aboutGif}
                        alt = "about"
                        path = "/about"
                        color = "#0ea1ec"
                        newTab = {false}
                    />
                </div>

                <div className="middle-video">
                    <h1 className="latest-text">LATEST</h1>
                    <img className="arrow" src={arrowPng} alt="arrow" loading="lazy"/>
                    <div className="video-wrapper">
                        <LiteYouTubeEmbed
                            id = "OseKKumHfW4"
                            title = "slayr - Sloppy Joe"
                        />
                    </div>
                    <h1 className="mid-text">SLAYR - SLOPPY JOE</h1>
                </div>

                <div className="right-side-gifs">
                    <GifLink 
                        title="GAMES"
                        image = {gamesGif}
                        alt = "games"
                        path = "/games"
                        color = "#00c600"
                        newTab = {false}
                    />
                    <GifLink 
                        title="SHOP"
                        image = {shopGif}
                        alt = "shop"
                        path = "/shop"
                        color = "#d474c9"
                        newTab = {false}
                    />
                    <GifLink 
                        title="CONTACT"
                        image = {contactGif}
                        alt = "contact"
                        path = "/contact"
                        color = "#9b5af3"
                        newTab = {false}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;