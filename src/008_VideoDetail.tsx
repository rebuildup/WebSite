import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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

interface VideoDetailProps {
  videos: VideoData[];
}

const VideoDetail: React.FC<VideoDetailProps> = ({ videos }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // URLパラメータからIDに対応するビデオを検索
  const video = videos.find((v) => v.id === Number(id));

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div>
      <div className="modal-content">
        <div className="left">
          {video.type === "video" ? (
            <video src={video.video} controls loop />
          ) : (
            <img src={video.image} alt={video.title} />
          )}
          <h2>{video.title}</h2>
          <button onClick={() => navigate(-1)}>Back to Gallery</button>
          <br />
        </div>
        <div className="right">
          <div>{video.description}</div>
          <br />
          <br />
          <h4>tags</h4>
          <div className="tags">
            {video.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <br />
          <h4>tools</h4>
          <div className="tools">
            {video.tools.map((tool, index) => (
              <span key={index} className="tool">
                {tool}
              </span>
            ))}
          </div>
          <br />
          <h4>links</h4>
          <div className="links">
            {video.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.description}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
