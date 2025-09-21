import { useState, useEffect } from "react";


function useLoading(images = [], delay = 1300) {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [delayTime, setDelayTime] = useState(false);

    useEffect( () => {
        const timer = setTimeout( () => setDelayTime(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    useEffect( () => {
        let loadedCount = 0;
        if (images.length === 0) {
            setImagesLoaded(true);
            return;
        }

        images.forEach( (src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === images.length) {
                    setImagesLoaded(true);
                }
            };
        }); 
    }, [images]);

    return !imagesLoaded || !delayTime;
}

export default useLoading;