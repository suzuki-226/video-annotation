"use client";
import { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";  // VideoPlayerをインポート
import AnnotationTool from "../components/AnnotationTool";  // AnnotationToolをインポート

export default function Home() {
  const [annotations, setAnnotations] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("/sample1.mp4");
 
  const handleVideoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVideo(e.target.value);
    setAnnotations([]); // 動画変えたときにアノテーションをリセット
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">動画アノテーションツール</h1>

      {/* ▼ 動画選択セレクトボックス */}
      <select onChange={handleVideoChange} value={selectedVideo} className="mb-4 p-2 border rounded">
        <option value="/sample1.mp4">動画①：sample1.mp4</option>
        <option value="/sample2.mp4">動画②：sample2.mp4</option>
        <option value="/sample3.mp4">動画③：sample3.mp4</option>
      </select>

      {/* ▼ 動画プレイヤー */}
      <VideoPlayer videoUrl={selectedVideo} />

      {/* ▼ アノテーションツール */}
      <AnnotationTool annotations={annotations} setAnnotations={setAnnotations} />
    </div>
  );
}