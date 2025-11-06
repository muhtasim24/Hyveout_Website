import BackButton from "../components/BackButton";
import GameCard from "../components/GameCard";
import StaticBackground from "../components/StaticBackground";
import ghostGameGif from "../gifs/GHOST_GAME.gif";
import fragmentGameGif from "../gifs/fragmentGame.gif";
import allureGif from "../gifs/allure.gif";
import pfyGame from "../gifs/pfy_game.gif";
import "../css/games.css"
import Footer from "../components/Footer";
import useLoading from "../components/useLoading";
import LoadingScreen from "../components/LoadingScreen";


function Games() {
    const isLoading = useLoading(
        [ghostGameGif, fragmentGameGif, allureGif, pfyGame],
        1000);
    
    if (isLoading) return <LoadingScreen/>

    return (
        <div className="main-border">
            <StaticBackground/>
            <BackButton/>
            <div className="game-container">
                <GameCard 
                    title="PFY + FRIENDS"
                    image = {pfyGame}
                    alt = "PFY + FRIENDS"
                    path = "https://hyveout-prayforyouth.vercel.app/"
                />
                <GameCard 
                    title="ALLURE POP UP"
                    image = {allureGif}
                    alt = "Allure game"
                    path = "https://allure-hyveout.vercel.app/"
                />

                <GameCard 
                    title="GHOST BY NINEXTEEN"
                    image = {ghostGameGif}
                    alt = "Ghost game gif"
                    path = "https://hyveout-ghosts.vercel.app/"
                />

                <GameCard 
                    title = "EATMYNOODLE FRAGMENT"
                    image = {fragmentGameGif}
                    alt = "fragment game gif"
                    path = "https://hyveout-fragments-game.vercel.app/"
                />  
            </div>
            <Footer/>
        </div>
    )
}

export default Games;