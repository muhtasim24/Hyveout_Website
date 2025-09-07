
import { Link } from "react-router"
import "../css/gifLink.css"

function GifLink(props) {
    const { title, image, alt, path } =  props
    return (
        <>
            <Link to={path}>
                <img className="gifs" src={image} alt={alt} loading="lazy"/>
            </Link>
            <h1 className="caption">{title}</h1>
        </>
    )
}

export default GifLink;