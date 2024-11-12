import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import VideoDetail from "./008_VideoDetail"; // 詳細表示コンポーネントをインポート

interface VideoLink {
  url: string;
  description: string;
}

interface VideoData {
  id: number;
  type: "video" | "image";
  title: string;
  tags: string[];
  description: string;
  tools: string[];
  thumbnail: string;
  video: string;
  image: string;
  links: VideoLink[];
}

const VideoGallery: React.FC = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]); // 複数タグの選択を管理

  useEffect(() => {
    // JSONファイルの取得
    fetch("/assets/videos.json")
      .then((res) => res.json())
      .then((data) => {
        // IDの降順にソート
        const sortedData = data.sort(
          (a: VideoData, b: VideoData) => b.id - a.id
        );
        setVideos(sortedData);
      })
      .catch((error) => console.error("Error loading video data:", error));
  }, []);
  const filteredVideos =
    selectedTags.length > 0
      ? videos.filter(
          (video) => selectedTags.every((tag) => video.tags.includes(tag)) // すべての選択タグが含まれる動画のみ表示
        )
      : videos;

  // タグの選択/解除
  const toggleTag = (tag: string) => {
    setSelectedTags(
      (prevTags) =>
        prevTags.includes(tag)
          ? prevTags.filter((t) => t !== tag) // タグが選択されていれば解除
          : [...prevTags, tag] // 選択されていなければ追加
    );
  };
  return (
    <Router>
      <Routes>
        {/* サムネイル一覧ページ */}

        <Route
          path="/"
          element={
            <div className="work">
              <div className="filters">
                <button
                  className={`filter-button ${
                    selectedTags.includes("") ? "selected" : ""
                  }`}
                  onClick={() => setSelectedTags([])} // "すべて" ボタンで全解除
                >
                  すべて
                </button>
                <button
                  className={`filter-button ${
                    selectedTags.includes("依頼") ? "selected" : ""
                  }`}
                  onClick={() => toggleTag("依頼")}
                >
                  依頼
                </button>
                <button
                  className={`filter-button ${
                    selectedTags.includes("個人制作") ? "selected" : ""
                  }`}
                  onClick={() => toggleTag("個人制作")}
                >
                  個人制作
                </button>
                <button
                  className={`filter-button ${
                    selectedTags.includes("映像") ? "selected" : ""
                  }`}
                  onClick={() => toggleTag("映像")}
                >
                  映像
                </button>
                <button
                  className={`filter-button ${
                    selectedTags.includes("デザイン") ? "selected" : ""
                  }`}
                  onClick={() => toggleTag("デザイン")}
                >
                  デザイン
                </button>
                <button
                  className={`filter-button ${
                    selectedTags.includes("プログラミング") ? "selected" : ""
                  }`}
                  onClick={() => toggleTag("プログラミング")}
                >
                  プログラミング
                </button>
                <button
                  className={`filter-button ${
                    selectedTags.includes("3DCG") ? "selected" : ""
                  }`}
                  onClick={() => toggleTag("3DCG")}
                >
                  3DCG
                </button>
                <button
                  className={`filter-button ${
                    selectedTags.includes("DTM") ? "selected" : ""
                  }`}
                  onClick={() => toggleTag("DTM")}
                >
                  DTM
                </button>
              </div>
              <div className="gallery-container">
                <div className="gallery">
                  {filteredVideos.map((video) => (
                    <div key={video.id} className="thumbnail-container">
                      <Link to={`/video/${video.id}`}>
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="thumbnail"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        />

        {/* 詳細ページ */}
        <Route path="/video/:id" element={<VideoDetail videos={videos} />} />
      </Routes>
    </Router>
  );
};

export default VideoGallery;
