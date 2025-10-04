import StaticBackground from "../components/StaticBackground";
import homeBorder from "../assets/home-page.png";
import mediaGif from "../gifs/media.gif";
import contactGif from "../gifs/contact.gif";
import mindGif from "../gifs/brain.gif";
import gamesGif from "../gifs/games.gif";
import aboutGif from "../gifs/about.gif";
import shopGif from "../gifs/shop.gif";
import videoGif from "../gifs/GHOST_GAME.gif"
import "../css/home.css"
import GifLink from "../components/GifLink";
import arrowPng from "../assets/arrow.png";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import useLoading from "../components/useLoading";


function Home() {
    const imageArray = [
        mediaGif, contactGif, mindGif, gamesGif, aboutGif, videoGif, arrowPng
    ];
    const isLoading = useLoading([
        mediaGif, contactGif, mindGif, gamesGif, aboutGif, videoGif, arrowPng
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
                        path = "/media"
                        color = "#ec00ce"
                    />
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
                    <div className="video-wrapper">
                        <iframe
                            className="game-gif"
                            src="https://www.youtube.com/embed/6StwyoDbMKE?si=z9yVDPg-s4CuvUgb"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <h1 className="mid-text">SLAYR - JUST LIKE MINE</h1>
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