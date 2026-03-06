
import { Link } from "react-router"
import "../css/gifLink.css"

function GifLink(props) {
    const { title, image, alt, path, color, newTab } =  props
    return (
        <div className="gif-container">
            {newTab ? (
                <a href={path} target="_blank" rel="noopener noreferrer">
                    <img className="gifs" src={image} alt={alt}/>
                </a>
            ) : (
                <Link to={path}>
                    <img className="gifs" src={image} alt={alt}/>
                </Link>
            )}

            <h1 className="caption" style={{ color }}>{title}</h1>
        </div>
    )
}

export default GifLink;