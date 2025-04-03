import { useRef, useEffect } from "react";
import videojs from "video.js";

const VideoPlayer = ({ videoUrl }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const player = videojs(videoRef.current);
        return () => player.dispose();
    }, []);

    return (
    <video ref={videoRef} className="video-js" controls>
    <source src={videoUrl} type="video/mp4" />
</video>
    );
};

export default VideoPlayer;