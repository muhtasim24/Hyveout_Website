
import { Link } from "react-router"
import "../css/gifLink.css"

function GifLink(props) {
    const { title, image, alt, path, color } =  props
    return (
        <div className="gif-container">
            <Link to={path}>
                <img className="gifs" src={image} alt={alt}/>
            </Link>
            <h1 className="caption" style={ {color} }>{title}</h1>
        </div>
    )
}

export default GifLink;