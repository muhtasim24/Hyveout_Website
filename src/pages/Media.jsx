import { useState } from "react";
import BackButton from "../components/BackButton";
import StaticBackground from "../components/StaticBackground";
import "../css/media.css"
import Footer from "../components/Footer";
import useLoading from "../components/useLoading";
import LoadingScreen from "../components/LoadingScreen";
import playlist from "../data/playlist.json";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function formatViews(count) {
    if (count == null) return null;
    return `${new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(count)} views`;
}

function formatRelativeDate(iso) {
    if (!iso) return null;
    const diffDays = Math.floor((Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24));
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    if (diffDays < 1) return "today";
    if (diffDays < 30) return rtf.format(-diffDays, "day");
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths < 12) return rtf.format(-diffMonths, "month");
    return rtf.format(-Math.floor(diffDays / 365), "year");
}

function Media() {
    const isLoading = useLoading([], 1000);
    const [activeIndex, setActiveIndex] = useState(0);
    const [hasSelected, setHasSelected] = useState(false);

    if (isLoading) return <LoadingScreen/>

    const activeVideo = playlist[activeIndex];

    return (
        <div className="main-border">
            <StaticBackground/>
            <BackButton path="/mediaSelect"/>
            <div className="media-page">
                <div className="media-left">
                    <div className="media-player">
                        <LiteYouTubeEmbed
                            key={activeVideo.id}
                            id={activeVideo.id}
                            title={activeVideo.title}
                            autoplay={hasSelected}
                        />
                    </div>
                    <h1 className="media-now-playing">{activeVideo.title}</h1>
                </div>

                <div className="media-playlist">
                    {playlist.map((video, i) => {
                        const meta = [formatViews(video.viewCount), formatRelativeDate(video.publishedAt)]
                            .filter(Boolean)
                            .join(" • ");
                        return (
                            <button
                                key={video.id}
                                className={`media-playlist-item${i === activeIndex ? " active" : ""}`}
                                onClick={() => {
                                    setActiveIndex(i);
                                    setHasSelected(true);
                                }}
                            >
                                <img
                                    className="media-playlist-thumb"
                                    src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                                    alt={video.title}
                                    loading="lazy"
                                />
                                <div className="media-playlist-info">
                                    <span className="media-playlist-title">{video.title}</span>
                                    {meta && <span className="media-playlist-meta">{meta}</span>}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Media;
