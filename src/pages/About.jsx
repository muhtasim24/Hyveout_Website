import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import StaticBackground from "../components/StaticBackground";
import "../css/about.css"
import useLoading from "../components/useLoading";
import LoadingScreen from "../components/LoadingScreen";


function About() {
    const isLoading = useLoading(
    [],
    1000);
    
    if (isLoading) return <LoadingScreen/>

    return (
        <div className="main-border">
            <StaticBackground/>
            <BackButton/>
            <div className="about-text">
                <h1>HYVEOUT IS A CREATIVE IDENTITY BASED UPON THE IDEA OF CONSTRUCTIVISM </h1>
                
                <h1>IT IS A COLLECTIVE IDEA TO KEEP MOVING FOWARD</h1>
                <h1>#KMF</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default About;