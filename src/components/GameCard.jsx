
import { Link } from "react-router"
import "../css/gameCard.css"

function GameCard(props) {
    const { title, image, alt, path, video } =  props
    return (
        <div className="game">
            {video ? (
                <iframe
                    className="games-gif video"
                    src={video}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            ) : (
                <a href={path} target="_blank">
                    <img className="games-gif" src={image} alt={alt} loading="lazy"/>
                </a>
            )}
                <h1 className="games-caption">{title}</h1>
        </div>
    )
}

export default GameCard;