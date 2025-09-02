
import { Link } from "react-router"

function GifLink(props) {
    const { title, src, alt, path } =  props
    return (
        <Link to={path}>
            <img src={src} alt={alt} />
            <h1>{title}</h1>
        </Link>
    )
}

export default GifLink;