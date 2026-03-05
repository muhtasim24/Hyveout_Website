import BackButton from "../components/BackButton";
import StaticBackground from "../components/StaticBackground";
import brainGif from "../gifs/brain.gif";
import "../css/mind.css"
import Footer from "../components/Footer";
import useLoading from "../components/useLoading";
import LoadingScreen from "../components/LoadingScreen";


function Mind() {
    const isLoading = useLoading(
    [brainGif],
    1000);
    
    if (isLoading) return <LoadingScreen/>

    return (
        <div className="main-border">
            <StaticBackground/>
            <BackButton path="/home"/>
            <div className="mind-container">
                <h1 className="mind-artist">
                    <a href="https://www.instagram.com/countdragons/" target="_blank" className="mind-link">SLAYR</a>
                </h1>

                <h1 className="mind-artist">
                    <a href="https://www.instagram.com/vaxfrr/" className="mind-link" target="_blank">VAX</a>
                </h1>

                <h1 className="mind-artist">
                    <a href="https://www.instagram.com/maxxant/" target="_blank" className="mind-link">MAXXANT</a>
                </h1>

                <h1 className="mind-artist">
                    <a href="https://www.instagram.com/ezcodylee/" target="_blank"
                    className="mind-link">EZCODYLEE</a>
                </h1>

                <h1 className="mind-artist">
                    <a href="https://www.instagram.com/praizewa/" target="_blank"
                    className="mind-link">WA</a>
                </h1>

                <h1 className="mind-artist">
                    <a href="https://www.instagram.com/captainswaggg/" target="_blank"
                    className="mind-link">CAPTAIN SWAG</a>
                </h1>

                <h1 className="mind-artist">
                    <a href="https://www.instagram.com/baronsolderbrother/" target="_blank"
                    className="mind-link">NINEXTEEN</a>
                </h1>

                <h1 className="mind-artist">
                    <a href="https://www.instagram.com/allure.newyork/" target="_blank"
                    className="mind-link">ALLURE</a>
                </h1>

                <h1 className="mind-artist">
                    <a href="https://www.instagram.com/jjjaqy/" target="_blank"
                    className="mind-link">JJJAQY</a>
                </h1>

                <h1 className="mind-artist">
                    <a href="https://www.instagram.com/shadx2__/" target="_blank"
                    className="mind-link">SHADX2</a>
                </h1>

                <h1 className="mind-artist">
                    <a href="https://www.instagram.com/tturnaboutt/" target="_blank"
                    className="mind-link">TURNABOUT</a>
                </h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Mind;