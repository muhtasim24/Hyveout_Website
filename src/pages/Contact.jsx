import BackButton from "../components/BackButton";
import StaticBackground from "../components/StaticBackground";
import instaImg from "../assets/instagram.png";
import mediaGif from "../gifs/media.gif";
import discordImg from "../assets/discord.png";
import "../css/contact.css"

function Contact() {
    return (
        <div className="main-border">
            <StaticBackground/>
            <BackButton/>
            <div className="contact-container">
                <div className="text">
                    <p>EMAIL:</p>
                    <p>hyveoutstaff@gmail.com</p>
                </div>

                <div class="social-icons">
                    <a href="https://www.instagram.com/hyveout/" target="_blank">
                        <img src= {instaImg} alt="instagram image" />
                    </a>
                    <a href="https://www.youtube.com/@HYVEOUT/videos" target="_blank">
                        <img src={mediaGif} alt="youtube gif"/>
                    </a>
                    <a href="https://discord.gg/YxQgw4aCaK" target="_blank">
                        <img src={discordImg} alt="discord image"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;