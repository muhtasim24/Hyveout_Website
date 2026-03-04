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
                    id = "OseKKumHfW4"
                    title = "slayr - Sloppy Joe"
                />
                <GameCard
                    id = "aV6qdmObWxA"
                    title = "Maxxant - Run.pony"
                />
                <GameCard
                    id = "GXq_3CULKDE"
                    title = "slayr - Holding"
                />
                <GameCard
                    id = "DFmHkonVCAo"
                    title = "Vax - Bobby Schmurda"
                />
                <GameCard
                    id = "-oV24UTQ464"
                    title = "EZCODYLEE - PUNK!"
                />
                <GameCard
                    id = "D7a3DfNLf7U"
                    title = "slayr - Never Go Down"
                />
                <GameCard
                    id = "JQ_k4kDYHNE"
                    title = "EZCODYLEE - AOTY!"
                />
                <GameCard
                    id = "KzqISznncDM"
                    title = "Vax - Buddy Buddy"
                />
                <GameCard
                    id = "6StwyoDbMKE"
                    title = "slayr - Just Like Mine"
                />
                <GameCard
                    id = "FyZEULIMtVk"
                    title = "ninexteen - ghost"
                />



            </div>
            <Footer/>
        </div>
    )
}

export default Media;