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
                    title="Slayr - SwagStealin"
                    video="https://www.youtube.com/embed/Le18KV-Lj3U?si=6hup9J5_a32381AW"
                />

                <GameCard 
                    title="Remi Zerxes - LIL SUNSET"
                    video="https://www.youtube.com/embed/IWYYNB6q3-w?si=-kfv6zqBTdBAmQ6_"
                />

                <GameCard 
                    title = "Ninexteen - ghost"
                    video = "https://www.youtube.com/embed/FyZEULIMtVk?si=Q6n8XMO4_LuV55Ve"
                />  

                <GameCard 
                    title = "JF ANT - Ashin'"
                    video = "https://www.youtube.com/embed/c7QPJehfG20?si=I4ng_bIC1Fc99W2b"
                />  

                <GameCard 
                    title = "Wint - Is We?"
                    video = "https://www.youtube.com/embed/a2p0ckvGbC4?si=OdpNOoGNzA1gTKMe"
                />  
        
                <GameCard 
                    title = "Mattcuz - Hearts &amp; Chrome"
                    video = "https://www.youtube.com/embed/bT8uhIbO6gw?si=Wvadn8xhXAjtQpMz"
                />  
            </div>
            <Footer/>
        </div>
    )
}

export default Media;