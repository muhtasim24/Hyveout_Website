import BackButton from "../components/backButton";
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
        </div>
    )
}

export default About;