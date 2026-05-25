import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import "../css/games.css";
import StaticBackground from "../components/StaticBackground";
import GameCard from "../components/GameCard";
import jiaqyGraphic from "../graphics/jiaqy.png";
import capSwagGraphic from "../graphics/capSwag.png";
import dc2trillGraphic from "../graphics/dc2trill.png";
import halfBloodGraphic from "../graphics/halfbloodlogo.png";
import bloodLuxeGraphic from "../graphics/bloodluxelogo.png";
import gashGraphic from "../graphics/gash.png";
import useLoading from "../components/useLoading";
import LoadingScreen from "../components/LoadingScreen";


function Graphics() {
    const isLoading = useLoading(
        [gashGraphic, dc2trillGraphic, capSwagGraphic, jiaqyGraphic, halfBloodGraphic, bloodLuxeGraphic],
        1000);
    
    if (isLoading) return <LoadingScreen/>

    return (
        <div className="main-border">
            <StaticBackground/>
            <BackButton path="/mediaSelect"/>
            <div className="game-container">
                <GameCard 
                    title = "slayr:HalfBlood"
                    image = {halfBloodGraphic}
                    alt = "slayr half blood"
                />
                
                <GameCard 
                    title = "slayr:BloodLuxe"
                    image = {bloodLuxeGraphic}
                    alt = "slayr blood luxe"
                />
                
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
                    title = "SWEXGAWD VOL.1"
                    image = {capSwagGraphic}
                    alt = "capSwag graphic"
                />
                
                <GameCard 
                    title = "JAQY 38TH BIRTHDAY PARTY"
                    image = {jiaqyGraphic}
                    alt = "jaqy graphic"
                />

            </div>


            <Footer/>
        </div>

    )
}

export default Graphics;