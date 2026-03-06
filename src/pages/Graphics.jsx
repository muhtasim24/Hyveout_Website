import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import "../css/games.css";
import StaticBackground from "../components/StaticBackground";
import GameCard from "../components/GameCard";
import jiaqyGraphic from "../graphics/jiaqy.png";
import capSwagGraphic from "../graphics/capSwag.png";
import dc2trillGraphic from "../graphics/dc2trill.png";
import gashGraphic from "../graphics/gash.png";
import useLoading from "../components/useLoading";
import LoadingScreen from "../components/LoadingScreen";


function Graphics() {
    const isLoading = useLoading(
        [gashGraphic, dc2trillGraphic, capSwagGraphic, jiaqyGraphic],
        1000);
    
    if (isLoading) return <LoadingScreen/>

    return (
        <div className="main-border">
            <StaticBackground/>
            <BackButton path="/mediaSelect"/>
            <div className="game-container">
                <GameCard 
                    title = "GASH FM:THIRTEEN DEGREES"
                    image = {gashGraphic}
                    alt = "gash fm graphic"
                />

               <GameCard 
                    title = "GASH FM:DC2TRILL"
                    image = {dc2trillGraphic}
                    alt = "dcs2trill graphic"
                />

                <GameCard 
                    title = "SWEXGAWD VOL.1 COVER ART"
                    image = {capSwagGraphic}
                    alt = "capSwag graphic"
                />
                
                <GameCard 
                    title = "JAQY 38TH BIRTHDAY PARTY FLYER"
                    image = {jiaqyGraphic}
                    alt = "jaqy graphic"
                />

            </div>


            <Footer/>
        </div>

    )
}

export default Graphics;