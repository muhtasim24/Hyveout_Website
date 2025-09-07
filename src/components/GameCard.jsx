
import { Link } from "react-router"
import "../css/gameCard.css"

function GameCard(props) {
    const { title, image, alt, path } =  props
    return (
        <div className="game">
            <a href={path} target="_blank">
                <img src={image} alt={alt} />
            </a>
            <h1>{title}</h1>
        </div>
    )
}

export default GameCard;