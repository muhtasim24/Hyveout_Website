import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import "../css/games.css";
import StaticBackground from "../components/StaticBackground";
import GameCard from "../components/GameCard";
import jiaqyGraphic from "../graphics/jiaqy.png";
import capSwagGraphic from "../graphics/capSwag.png";
import dc2trillGraphic from "../graphics/dc2trill.png";
import gashGraphic from "../graphics/gash.png";


function Graphics() {

    return (
        <div className="main-border">
            <StaticBackground/>
            <BackButton path="/mediaSelect"/>
            <div className="game-container">
                <GameCard 
                    title = "GASH FM PRESENTS: THIRTEEN DEGREES"
                    image = {gashGraphic}
                    alt = "gash fm graphic"
                />

               <GameCard 
                    title = "DC2TRILL POWERED BY GASH FM"
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