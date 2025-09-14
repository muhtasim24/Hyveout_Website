import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import StaticBackground from "../components/StaticBackground";
import "../css/about.css"

function About() {
    return (
        <div className="main-border">
            <StaticBackground/>
            <BackButton/>
            <div className="about-text">
                <h1>HYVEOUT IS A CREATIVE AGENCY/COLLECTIVE INTERESTED IN THE INTEGRATION OF ALL FORMS OF MEDIA</h1>
                <h1>WHAT WE ARE IS IN OUR WORK</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default About;