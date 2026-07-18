
import { Link } from "react-router"
import "../css/gameCard.css"
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function GameCard(props) {
    const { id, title, image, alt, path } =  props
    const isVideo = typeof image === "string" && image.endsWith(".mp4")
    return (
        <div className="game">
            {id ? (
                <div className="video-card">
                    <LiteYouTubeEmbed
                        id = {id}
                        title = {title}
                        poster ="maxresdefault"
                    />
                </div>
            ) : (
                <a href={path} target="_blank">
                    {isVideo ? (
                        <video className="games-gif" src={image} autoPlay loop muted playsInline />
                    ) : (
                        <img className="games-gif" src={image} alt={alt} loading="lazy"/>
                    )}
                </a>
            )}
                <h1 className="games-caption">{title}</h1>
        </div>
    )
}

export default GameCard;