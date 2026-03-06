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
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


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
                        path = "https://delulubutswag.myshopify.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnPriRi02NwJ3owaJXE3neiBTGR3ITJjL1WkV4fiEbg2YRq0xzqMWcnh0c9FU_aem_ixLn8IyvxXsZj2QOZI5fEg"
                        color = "#d474c9"
                        newTab = {true}
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