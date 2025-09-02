import StaticBackground from "../components/StaticBackground";
import homeBorder from "../assets/home-page.png"
import "../css/home.css"


function Home() {
    return (
        <div className="main-border">
            <StaticBackground/>
            <div className="container">
                <img className="home-container" src= {homeBorder} alt="box page"/>
                <h1>LATEST</h1>
            </div>
        </div>
    )
}

export default Home;