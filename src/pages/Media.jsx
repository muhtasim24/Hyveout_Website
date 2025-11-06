import BackButton from "../components/BackButton";
import GameCard from "../components/GameCard";
import StaticBackground from "../components/StaticBackground";
import ghostGameGif from "../gifs/GHOST_GAME.gif";
import fragmentGameGif from "../gifs/fragmentGame.gif";
import allureGif from "../gifs/allure.gif";
import "../css/games.css"
import Footer from "../components/Footer";
import useLoading from "../components/useLoading";
import LoadingScreen from "../components/LoadingScreen";


function Media() {
    const isLoading = useLoading(
        [ghostGameGif, fragmentGameGif, allureGif],
        1000);
    
    if (isLoading) return <LoadingScreen/>

    return (
        <div className="main-border">
            <StaticBackground/>
            <BackButton/>
            <div className="game-container">
                <GameCard
                    id = "6StwyoDbMKE"
                    title = "Slayr - Just Like Mine"
                />
                <GameCard
                    id = "Z-n_DrZkoi8"
                    title = "Slayr - Set In Stone"
                />
                <GameCard 
                    id = "Le18KV-Lj3U"
                    title="Slayr - SwagStealin"
                />
                <GameCard 
                    id = "IWYYNB6q3-w"
                    title="Remi Zerxes - LIL SUNSET"
                />

                <GameCard 
                    id = "FyZEULIMtVk"
                    title = "Ninexteen - ghost"
                />  

                <GameCard 
                    id = "a2p0ckvGbC4"
                    title = "Wint - Is We?"
                />  
        
                <GameCard 
                    id = "bT8uhIbO6gw"
                    title = "Mattcuz - Hearts &amp; Chrome"
                />  
            </div>
            <Footer/>
        </div>
    )
}

export default Media;