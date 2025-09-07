import BackButton from "../components/backButton";
import GameCard from "../components/GameCard";
import StaticBackground from "../components/StaticBackground";
import ghostGameGif from "../gifs/GHOST_GAME.gif";
import fragmentGameGif from "../gifs/fragmentGame.gif";


function Games() {
    return (
        <div className="main-border">
            <StaticBackground/>
            <BackButton/>
            <div className="game-container">
                <GameCard 
                    title="GHOST BY NINEXTEEN"
                    image = {ghostGameGif}
                    alt = "Ghost game gif"
                    path = "https://hyveout-ghosts.vercel.app/"
                />

                <GameCard 
                    title = "EATMYNOODLE FRAGMENT GAME"
                    image = {fragmentGameGif}
                    alt = "fragment game gif"
                    path = "https://hyveout-fragments-game.vercel.app/"
                />

                
            </div>
        </div>
    )
}

export default Games;