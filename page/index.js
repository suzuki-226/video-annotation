import { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import AnnotationTool from "../components/AnnotationTool";

export default function Home() {
    const [annotations, setAnnotations] = useState([]);

    return (
        <div>
            <h1>動画アノテーションツール</h1>
            <VideoPlayer videoUrl="/sample.mp4"/> 
            <AnnotationTool annotations={annotations} setAnnotations={setAnnotations} />
        </div>
    );
}
