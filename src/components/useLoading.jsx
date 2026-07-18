import { useState, useEffect } from "react";

function preload(src) {
    return new Promise((resolve) => {
        if (/\.(mp4|webm)$/i.test(src)) {
            const video = document.createElement("video");
            video.preload = "auto";
            video.oncanplaythrough = resolve;
            video.onerror = resolve;
            video.src = src;
        } else {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = src;
        }
    });
}

function useLoading(sources = [], maxWait = 1500) {
    const [ready, setReady] = useState(sources.length === 0);

    useEffect(() => {
        if (sources.length === 0) return;
        let cancelled = false;
        const timeout = setTimeout(() => !cancelled && setReady(true), maxWait);

        Promise.all(sources.map(preload)).then(() => {
            if (!cancelled) {
                clearTimeout(timeout);
                setReady(true);
            }
        });

        return () => {
            cancelled = true;
            clearTimeout(timeout);
        };
    }, [sources, maxWait]);

    return !ready;
}

export default useLoading;
