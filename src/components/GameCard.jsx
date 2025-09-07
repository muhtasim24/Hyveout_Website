
import { Link } from "react-router"
import "../css/gameCard.css"

function GameCard(props) {
    const { title, image, alt, path } =  props
    return (
        <div className="game">
            <a href={path} target="_blank">
                <img className="games-gif" src={image} alt={alt} loading="lazy"/>
            </a>
            <h1 className="games-caption">{title}</h1>
        </div>
    )
}

export default GameCard;